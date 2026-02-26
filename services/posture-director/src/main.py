from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from src.config import PORT

app = FastAPI(title="Posture Director Service", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok", "service": "posture-director"}


class PoseKeypoint(BaseModel):
    name: str
    x: float
    y: float
    confidence: float


class AnalyzePoseRequest(BaseModel):
    keypoints: list[PoseKeypoint]
    outfit_id: str | None = None
    scene_id: str | None = None


class PoseFeedback(BaseModel):
    match_score: float
    is_in_frame: bool
    suggestions: list[str]


@app.post("/analyze-pose", response_model=PoseFeedback)
def analyze_pose(request: AnalyzePoseRequest):
    return PoseFeedback(
        match_score=0.0,
        is_in_frame=True,
        suggestions=["Stand straight", "Raise your chin slightly"],
    )


class PoseRecommendation(BaseModel):
    pose_id: str
    name: str
    description: str


@app.get("/recommend-poses")
def recommend_poses(outfit_id: str | None = None, scene_id: str | None = None):
    return [
        PoseRecommendation(
            pose_id="pose-1",
            name="Casual Stand",
            description="Stand relaxed with weight on one leg",
        ),
        PoseRecommendation(
            pose_id="pose-2",
            name="Power Pose",
            description="Stand tall with hands on hips",
        ),
    ]


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("src.main:app", host="0.0.0.0", port=PORT, reload=True)
