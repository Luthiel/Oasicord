from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from src.config import PORT

app = FastAPI(title="Scene Recommender Service", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok", "service": "scene-recommender"}


class GenerateSceneRequest(BaseModel):
    outfit_id: str
    style: str  # "3d", "cartoon", "clay"


class SceneResponse(BaseModel):
    scene_id: str
    status: str
    image_url: str | None = None
    style: str


@app.post("/generate-scene", response_model=SceneResponse)
def generate_scene(request: GenerateSceneRequest):
    return SceneResponse(
        scene_id="scene-stub-001",
        status="pending",
        image_url=None,
        style=request.style,
    )


class LocationRecommendation(BaseModel):
    name: str
    latitude: float
    longitude: float
    category: str
    distance_km: float


@app.get("/recommend-locations")
def recommend_locations(lat: float = 0.0, lng: float = 0.0, radius: float = 5.0):
    return [
        LocationRecommendation(
            name="Sample Photo Spot",
            latitude=lat,
            longitude=lng,
            category="park",
            distance_km=1.2,
        )
    ]


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("src.main:app", host="0.0.0.0", port=PORT, reload=True)
