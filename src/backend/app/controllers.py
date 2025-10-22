# backend/app/controllers.py
from fastapi import APIRouter, Depends, HTTPException
from .schemas import SensorPayload, ControlCommand
from .broadcaster import broadcaster
from .db import SessionLocal, SensorReading, init_db
from datetime import datetime

router = APIRouter()
init_db()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

LATEST = {}

@router.post("/api/sensors", status_code=201)
async def receive_sensor(payload: SensorPayload, db=Depends(get_db)):
    ts = payload.timestamp or datetime.utcnow()
    reading = SensorReading(
        device_id=payload.device_id,
        temperature=payload.temperature,
        humidity=payload.humidity,
        light=payload.light,
        timestamp=ts
    )
    db.add(reading); db.commit()
    LATEST[payload.device_id] = {
        "device_id": payload.device_id,
        "temperature": payload.temperature,
        "humidity": payload.humidity,
        "light": payload.light,
        "timestamp": ts.isoformat()
    }
    await broadcaster.broadcast({"type":"sensor_update","data":LATEST[payload.device_id]})
    return {"status":"ok"}

@router.post("/api/control", status_code=200)
async def control(command: ControlCommand):
    payload = {"type":"control","data":{"device_id": command.device_id, "command": command.command, "value": command.value}}
    await broadcaster.broadcast(payload)
    return {"sent": True}
