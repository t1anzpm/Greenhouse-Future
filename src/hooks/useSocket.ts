// src/hooks/useSimulatedSensors.ts
import { useEffect, useState } from "react";

interface SensorData {
  temperatura_aire: number;
  humedad_relativa: number;
  humedad_suelo: number;
  luz: number;
  nivel_agua: number;
  timestamp: string;
}

export function useSocket() {
  const [data, setData] = useState<SensorData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sensores");
      const json = await res.json();
      setData(json);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Actualiza cada 5s

    return () => clearInterval(interval);
  }, []);

  return data;
}
