# Pydantic schemas para peticiones y respuestas.
# backend/app/schemas.py
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class SensorPayload(BaseModel):
    device_id: str
    temperature: float
    humidity: float
    light: float
    timestamp: Optional[datetime] = None

class ControlCommand(BaseModel):
    device_id: str
    command: str
    value: Optional[float] = None

class LatestSensor(BaseModel):
    device_id: str
    temperature: float
    humidity: float
    light: float
    timestamp: datetime
