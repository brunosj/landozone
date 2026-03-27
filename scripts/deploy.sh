#!/usr/bin/env bash
set -Eeuo pipefail

# VPS deploy script for landozone
# Base dir: /home/lando/landozone
# Repo dir: /home/lando/landozone/repo
#
# Usage:
#   bash /home/lando/landozone/repo/scripts/deploy-vps.sh
#
# Optional env vars:
#   RESTART_CMD="sudo systemctl restart landozone"   # recommended
#   APP_DIR="/home/lando/landozone/repo"             # override repo path
#   BRANCH="main"                                    # git branch to deploy
#   KEEP_RELEASES=3                                  # reserved for future use

APP_BASE_DIR="/home/lando/landozone"
APP_DIR="${APP_DIR:-/home/lando/landozone/repo}"
BRANCH="${BRANCH:-main}"
APP_PORT="${APP_PORT:-5175}"
APP_HOST="${APP_HOST:-0.0.0.0}"
LOCK_FILE="$APP_BASE_DIR/deploy.lock"
TIMESTAMP="$(date '+%Y-%m-%d %H:%M:%S')"

# Ensure non-interactive shells (e.g. GitHub runner over SSH) can resolve tools.
export PATH="/home/lando/.local/share/pnpm:$PATH"
NVM_DIR="${NVM_DIR:-/home/lando/.nvm}"
NODE_VERSION="${NODE_VERSION:-22}"
PNPM_BIN="${PNPM_BIN:-/home/lando/.local/share/pnpm/pnpm}"
PM2_BIN="${PM2_BIN:-/home/lando/.local/share/pnpm/pm2}"

log() {
	echo "[$TIMESTAMP] $*"
}

fail() {
	echo "[$TIMESTAMP] ERROR: $*" >&2
	exit 1
}

command -v git >/dev/null 2>&1 || fail "git is not installed"

# Prefer nvm-managed Node so engine requirements stay compatible over time.
if [ -s "$NVM_DIR/nvm.sh" ]; then
	# shellcheck disable=SC1090
	. "$NVM_DIR/nvm.sh"
	nvm install "$NODE_VERSION" >/dev/null
	nvm use "$NODE_VERSION" >/dev/null
else
	log "nvm not found at $NVM_DIR, using system node from PATH"
fi

NODE_BIN="$(command -v node || true)"
[ -n "$NODE_BIN" ] || fail "node is not available in PATH"
[ -x "$PNPM_BIN" ] || fail "pnpm binary not found at $PNPM_BIN"
[ -x "$PM2_BIN" ] || log "pm2 binary not found at $PM2_BIN (only needed if your restart command uses pm2)"
log "Using node: $NODE_BIN ($("$NODE_BIN" -v))"
log "Using pnpm: $PNPM_BIN ($("$PNPM_BIN" -v))"
log "Runtime bind: $APP_HOST:$APP_PORT"

[ -d "$APP_BASE_DIR" ] || fail "Base dir not found: $APP_BASE_DIR"
[ -d "$APP_DIR/.git" ] || fail "Git repo not found at: $APP_DIR"

exec 9>"$LOCK_FILE"
if ! flock -n 9; then
	fail "another deployment is already running"
fi

log "Starting deploy in $APP_DIR"
cd "$APP_DIR"

log "Fetching latest changes"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git reset --hard "origin/$BRANCH"

if [ -f "$APP_BASE_DIR/.env" ]; then
	log "Syncing shared .env into repo"
	cp "$APP_BASE_DIR/.env" "$APP_DIR/.env"
fi

log "Installing dependencies"
"$PNPM_BIN" install --frozen-lockfile

log "Building app"
"$PNPM_BIN" build

if [ ! -f "$APP_DIR/build/index.js" ] && [ ! -f "$APP_DIR/build/server/index.js" ]; then
	fail "build output not found (expected adapter-node output in build/)"
fi

export HOST="$APP_HOST"
export PORT="$APP_PORT"

if [ -z "${RESTART_CMD:-}" ]; then
	RESTART_CMD="$PM2_BIN restart landozone --update-env || $PM2_BIN start build/index.js --name landozone --update-env"
fi

if [ -n "${RESTART_CMD:-}" ]; then
	log "Restarting app: $RESTART_CMD"
	eval "$RESTART_CMD"
else
	log "No RESTART_CMD provided, skipping restart"
	log "Set RESTART_CMD, e.g.: RESTART_CMD='sudo systemctl restart landozone'"
fi

log "Deployment complete"
