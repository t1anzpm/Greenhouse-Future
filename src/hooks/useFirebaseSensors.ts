// src/hooks/useFirebaseSensors.ts
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { ref, onValue } from "firebase/database";

interface SensorData {
  temperatura_aire: number;
  humedad_relativa: number;
  humedad_suelo: number;
  luz: number;
  nivel_agua: number;
  timestamp: number;
}

export function useFirebaseSensors() {
  const [data, setData] = useState<SensorData | null>(null);

  useEffect(() => {
    // Ruta del JSON en tu RTDB, asegúrate de usar la misma que en Arduino
    const sensorRef = ref(db, "sensores");
    // Escuchar cambios en tiempo real
    const unsubscribe = onValue(sensorRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      }
    });
    // Cleanup al desmontar el componente
    return () => unsubscribe();
  }, []);

  return data;
}
