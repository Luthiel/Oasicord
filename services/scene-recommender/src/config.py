import os
from dotenv import load_dotenv

load_dotenv()

PORT = int(os.getenv("PORT", "8085"))
MODEL_PATH = os.getenv("MODEL_PATH", "")
MAPS_API_KEY = os.getenv("MAPS_API_KEY", "")
