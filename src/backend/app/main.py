# backend/app/main.py
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from .controllers import router
from .broadcaster import broadcaster

app = FastAPI(title="Invernadero API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(router)

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await broadcaster.connect(ws)
    try:
        while True:
            _ = await ws.receive_text()  # opcional: procesar mensajes de cliente
    except WebSocketDisconnect:
        await broadcaster.disconnect(ws)
