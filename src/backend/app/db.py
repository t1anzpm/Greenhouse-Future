# backend/app/db.py
import os
from sqlalchemy import create_engine, Column, String, Float, DateTime, Integer
from sqlalchemy.orm import sessionmaker, declarative_base
from datetime import datetime

Base = declarative_base()

class SensorReading(Base):
    __tablename__ = "sensor_readings"
    id = Column(Integer, primary_key=True, autoincrement=True)
    device_id = Column(String(100), index=True)
    temperature = Column(Float)
    humidity = Column(Float)
    light = Column(Float)
    timestamp = Column(DateTime, default=datetime.utcnow)

DB_URL = os.environ.get("DATABASE_URL") or "sqlite:///./backend/backend_data.db"
engine = create_engine(DB_URL, connect_args={"check_same_thread": False} if DB_URL.startswith("sqlite") else {})
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)

def init_db():
    Base.metadata.create_all(bind=engine)
