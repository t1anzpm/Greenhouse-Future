# backend/app/broadcaster.py
import asyncio
import json
from typing import Set
from fastapi import WebSocket

class Broadcaster:
    def __init__(self):
        self.active_connections: Set[WebSocket] = set()
        self.lock = asyncio.Lock()

    async def connect(self, ws: WebSocket):
        await ws.accept()
        async with self.lock:
            self.active_connections.add(ws)

    async def disconnect(self, ws: WebSocket):
        async with self.lock:
            if ws in self.active_connections:
                self.active_connections.remove(ws)

    async def broadcast(self, message: dict):
        data = json.dumps(message)
        async with self.lock:
            to_remove = []
            for ws in list(self.active_connections):
                try:
                    await ws.send_text(data)
                except Exception:
                    to_remove.append(ws)
            for r in to_remove:
                self.active_connections.discard(r)

broadcaster = Broadcaster()
