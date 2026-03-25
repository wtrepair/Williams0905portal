#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_DIR="${1:-$ROOT_DIR/simply-static}"

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Source directory not found: $SOURCE_DIR" >&2
  exit 1
fi

rsync \
  --archive \
  --delete \
  --exclude '/.git/' \
  --exclude '/.githooks/' \
  --exclude '/.next/' \
  --exclude '/node_modules/' \
  --exclude '/scripts/' \
  --exclude '/simply-static/' \
  --exclude '/.gitignore' \
  --exclude '/.gitattributes' \
  --exclude '/README.md' \
  --exclude '/package.json' \
  --exclude '/package-lock.json' \
  "$SOURCE_DIR"/ \
  "$ROOT_DIR"/

echo "Promoted static export from $SOURCE_DIR to $ROOT_DIR"
