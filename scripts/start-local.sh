#!/usr/bin/env bash
set -euo pipefail

echo "=== Starting all services with Docker Compose ==="
docker-compose up -d

echo ""
echo "Waiting for services to start..."
sleep 10

bash "$(dirname "$0")/health-check.sh"
