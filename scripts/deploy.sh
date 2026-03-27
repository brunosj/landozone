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
LOCK_FILE="$APP_BASE_DIR/deploy.lock"
TIMESTAMP="$(date '+%Y-%m-%d %H:%M:%S')"

# Ensure non-interactive shells (e.g. GitHub runner over SSH) can resolve tools.
export PATH="/home/lando/.local/share/pnpm:/home/lando/.nvm/versions/node/v20.12.2/bin:$PATH"
NODE_BIN="${NODE_BIN:-/home/lando/.nvm/versions/node/v20.12.2/bin/node}"
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
[ -x "$NODE_BIN" ] || fail "node binary not found at $NODE_BIN"
[ -x "$PNPM_BIN" ] || fail "pnpm binary not found at $PNPM_BIN"
[ -x "$PM2_BIN" ] || log "pm2 binary not found at $PM2_BIN (only needed if your restart command uses pm2)"

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

if [ -z "${RESTART_CMD:-}" ]; then
	RESTART_CMD="$PM2_BIN restart landozone || $PM2_BIN start build/index.js --name landozone"
fi

if [ -n "${RESTART_CMD:-}" ]; then
	log "Restarting app: $RESTART_CMD"
	eval "$RESTART_CMD"
else
	log "No RESTART_CMD provided, skipping restart"
	log "Set RESTART_CMD, e.g.: RESTART_CMD='sudo systemctl restart landozone'"
fi

log "Deployment complete"
