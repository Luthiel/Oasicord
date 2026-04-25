#!/usr/bin/env bash

echo "=== Health Check ==="
echo ""

services=(
  "API Gateway:http://localhost:4000/health"
  "User Service:http://localhost:8081/health"
  "Wardrobe Service:http://localhost:8082/health"
  "Social Service:http://localhost:8083/health"
  "Fashion Transform:http://localhost:8084/health"
  "Scene Recommender:http://localhost:8085/health"
  "Posture Director:http://localhost:8086/health"
  "Media Storage:http://localhost:8087/health"
  "Location Service:http://localhost:8088/health"
)

passed=0
failed=0

for entry in "${services[@]}"; do
  name="${entry%%:http*}"
  url="http${entry#*:http}"

  if response=$(curl -sf -m 5 "$url" 2>/dev/null); then
    echo "[OK]   $name ($url)"
    ((passed++))
  else
    echo "[FAIL] $name ($url)"
    ((failed++))
  fi
done

echo ""
echo "Results: $passed passed, $failed failed (total: $((passed + failed)))"

if [ "$failed" -gt 0 ]; then
  exit 1
fi
