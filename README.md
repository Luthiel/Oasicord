# Oasicord - AI-Powered Fashion Assistant

An AI-powered personalized clothing customization and styling assistant. Cross-platform mobile app (React Native) with polyglot microservices backend deployed on AWS.

## Core Modules

- **my-clothes** - AI wardrobe management with 3D clothing models and mood-based outfit recommendations
- **fashion-assistant** - Clothing modification visualization with step-by-step DIY instructions
- **scene-recommender** - Virtual background generation (3D, cartoon, clay) and photo spot recommendations
- **posture-director** - Real-time pose guidance for photos with dynamic frame generation

## Architecture

```
Mobile (React Native + Expo)
  ↕ GraphQL
API Gateway (Apollo Federation)
  ↕
┌──────────────────────────────────────────────────────┐
│ Kotlin/Spring Boot  │ Python/FastAPI  │ Go/Gin       │
│ - user-service      │ - fashion-trans │ - media-store │
│ - wardrobe-service  │ - scene-recom   │ - location    │
│ - social-service    │ - posture-dir   │               │
└──────────────────────────────────────────────────────┘
  ↕
PostgreSQL │ MongoDB │ Redis │ S3
```

## Directory Structure

```
├── apps/mobile/                 # React Native + Expo (TypeScript)
├── services/
│   ├── api-gateway/             # Node.js + Apollo Gateway
│   ├── user-service/            # Kotlin + Spring Boot
│   ├── wardrobe-service/        # Kotlin + Spring Boot
│   ├── social-service/          # Kotlin + Spring Boot
│   ├── fashion-transform/       # Python + FastAPI
│   ├── scene-recommender/       # Python + FastAPI
│   ├── posture-director/        # Python + FastAPI
│   ├── media-storage/           # Go + Gin
│   └── location-service/        # Go + Gin
├── shared/graphql-schemas/      # Federated GraphQL schema files
├── infrastructure/
│   ├── terraform/               # AWS IaC
│   └── k8s/                     # Kubernetes manifests
├── scripts/                     # Helper scripts
├── docker-compose.yml           # Local dev orchestration
└── package.json                 # Root workspace
```

## Prerequisites

- Node.js >= 20
- Python >= 3.11
- Go >= 1.22
- JDK >= 17 + Gradle 8
- Docker + Docker Compose
- Expo CLI (`npm install -g expo-cli`)

## Quick Start

```bash
# 1. Install dependencies
bash scripts/setup.sh

# 2. Start all services locally
docker-compose up -d

# 3. Verify health checks
bash scripts/health-check.sh

# 4. Start mobile app
cd apps/mobile && npx expo start
```

## Service Ports

| Service | Port |
|---------|------|
| API Gateway | 4000 |
| User Service | 8081 |
| Wardrobe Service | 8082 |
| Social Service | 8083 |
| Fashion Transform | 8084 |
| Scene Recommender | 8085 |
| Posture Director | 8086 |
| Media Storage | 8087 |
| Location Service | 8088 |
| PostgreSQL | 5432 |
| MongoDB | 27017 |
| Redis | 6379 |
