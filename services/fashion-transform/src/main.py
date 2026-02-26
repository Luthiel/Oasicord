from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from src.config import PORT

app = FastAPI(title="Fashion Transform Service", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok", "service": "fashion-transform"}


class TransformRequest(BaseModel):
    clothing_id: str
    target_style: str


class TransformResponse(BaseModel):
    project_id: str
    status: str
    preview_url: str | None = None
    instructions: list[dict] = []


@app.post("/transform", response_model=TransformResponse)
def transform_clothing(request: TransformRequest):
    return TransformResponse(
        project_id="proj-stub-001",
        status="pending",
        preview_url=None,
        instructions=[],
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("src.main:app", host="0.0.0.0", port=PORT, reload=True)
