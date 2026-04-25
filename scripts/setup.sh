#!/usr/bin/env bash
set -euo pipefail

echo "=== Fashion Assistant - Setup ==="

echo ""
echo "--- Installing mobile app dependencies ---"
cd apps/mobile && npm install && cd ../..

echo ""
echo "--- Installing API gateway dependencies ---"
cd services/api-gateway && npm install && cd ../..

echo ""
echo "--- Installing Python service dependencies ---"
for svc in fashion-transform scene-recommender posture-director; do
  echo "  -> $svc"
  cd "services/$svc" && pip install -r requirements.txt && cd ../..
done

echo ""
echo "--- Copying .env.example files ---"
for dir in services/*/; do
  if [ -f "$dir/.env.example" ] && [ ! -f "$dir/.env" ]; then
    cp "$dir/.env.example" "$dir/.env"
    echo "  -> Copied $dir/.env"
  fi
done

if [ ! -f .env ] && [ -f .env.example ]; then
  cp .env.example .env
  echo "  -> Copied root .env"
fi

echo ""
echo "=== Setup complete ==="
