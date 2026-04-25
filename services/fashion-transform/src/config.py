import os
from dotenv import load_dotenv

load_dotenv()

PORT = int(os.getenv("PORT", "8084"))
MODEL_PATH = os.getenv("MODEL_PATH", "")
LLM_API_KEY = os.getenv("LLM_API_KEY", "")
