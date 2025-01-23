from fastapi import FastAPI
from pydantic import BaseModel
from llama_cpp import Llama
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from any origin (change this in production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Load Mistral 7B model
MODEL_PATH = os.path.expanduser("~/llama.cpp/models/mistral-7b-instruct-v0.1.Q4_K_M.gguf")
llm = Llama(model_path=MODEL_PATH, n_ctx=4096)

class ChatRequest(BaseModel):
    text: str

@app.post("/chat")
async def chat(request: ChatRequest):
    response = llm(f"{request.text}", max_tokens=200)["choices"][0]["text"]
    return {"response": response.strip()}
