"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useSocket } from "@/hooks/useSocket";
import { useEffect, useState } from "react";

interface SensorData {
  temperature: number;
  humidity: number;
  light: number;  // corregido de 'ligth'
  timestamp: string;
}


export function useSimulatedSensors(){
  const [data, setData] = useState<SensorData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/sensores")
      const json = await res.json();
      setData(json);
    };
    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return data;
}

export default function DashboardPage() {
  const data = useSimulatedSensors();

  return (
    <>
      <Navbar />
      <main style={{
        textAlign: "center",
        padding: "6rem 2rem 2rem",
        fontFamily: "sans-serif",
        backgroundColor: "#202A44",
        minHeight: "100vh",
        color: "white",
      }}>
        <h1 className="text-2xl font-semibold text-blue-200 mb-4">
          Panel de Control del Invernadero 🌱
        </h1>
        <p>Bienvenido al sistema de monitoreo en tiempo real de GreenHouse Future.</p>
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-green-200 border-2 border-green-500 rounded-xl shadow">
            <h2 className="font-medium text-gray-700">Temperatura</h2>
            <p className="text-3xl font-bold text-green-700">
              {data ? `${data.temperature} °C` : "-- °C"}
            </p>
          </div>
          <div className="p-4 bg-blue-200 border-2 border-blue-400 rounded-xl shadow">
            <h2 className="font-medium text-gray-700">Humedad</h2>
            <p className="text-3xl font-bold text-blue-600">
              {data ? `${data.humidity} %` : "-- %"}
            </p>
          </div>
          <div className="p-4 bg-yellow-100 border-2 border-yellow-500 rounded-xl shadow">
            <h2 className="font-medium text-gray-700">Luz</h2>
            <p className="text-3xl font-bold text-yellow-600">
              {data ? `${data.light} lux` : "-- Luz"}
            </p>
          </div>
        </div>

        <br />

        {data ? (
          <div className="p-6 rounded-xl bg-green-50 border-2 border-blue-700 shadow-sm">
            <p className="text-medium text-gray-700 mt-2">
              Última actualización: {new Date(data.timestamp).toLocaleTimeString()}
            </p>
          </div>
        ) : (
          <p>Cargando datos en tiempo real...</p>
        )}

        <br />

        <Link
          href="/"
          style={{
            border: "2px", 
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#3b5085ff",
            color: "#E2E8F0",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "500",
            boxShadow: "0 1px 3px rgba(0,0,0,0.5)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#202A44"; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#3b5085ff"; }}
        >
          ⬅ Volver al Inicio
        </Link>
      </main>
    </>
  );
}
