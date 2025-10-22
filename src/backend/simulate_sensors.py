# backend/simulate_sensors.py
import asyncio, httpx, random
from datetime import datetime
API = "http://localhost:8000"

async def send_sensor(device_id: str):
    async with httpx.AsyncClient() as client:
        while True:
            payload = {
                "device_id": device_id,
                "temperature": round(random.uniform(18, 30), 2),
                "humidity": round(random.uniform(40, 80), 2),
                "light": round(random.uniform(100, 1000), 0),
                "timestamp": datetime.utcnow().isoformat()
            }
            try:
                await client.post(f"{API}/api/sensors", json=payload, timeout=5.0)
                print("sent:", payload)
            except Exception as e:
                print("error:", e)
            await asyncio.sleep(2)

async def main():
    await asyncio.gather(send_sensor("arduino-1"), send_sensor("arduino-2"))

if __name__ == "__main__":
    asyncio.run(main())
