import { useEffect, useState } from "react";

type SensorData = {
  temperature: number;
  humidity: number;
  timestamp: string;
};

export function useSocket() {
  const [data, setData] = useState<Record<string, any>>({});
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.type === "sensor_update") {
        setData(prev => ({...prev, [msg.data.device_id]: msg.data}));
      }
    };
    return () => ws.close();
  }, []);
  return data;
}
