import os
from dotenv import load_dotenv

load_dotenv()

PORT = int(os.getenv("PORT", "8086"))
MODEL_PATH = os.getenv("MODEL_PATH", "")
