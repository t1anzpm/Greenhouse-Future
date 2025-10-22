"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useSocket } from "@/hooks/useSocket";

export default function DashboardPage() {
    const data = useSocket();

    return ( 
    <>
    <Navbar />
    <main style={{ textAlign: "center",padding: "6rem 2rem 2rem",fontFamily: "sans-serif",backgroundColor: "#f5f5f7",minHeight: "100vh",color: "#1d1d1f",}}>
        <h1 className="text-2xl font-semibold text-green-700 mb-4"> Panel de Control del Invernadero 🌱 </h1>
        <p> Bienvenido al sistema de monitoreo en tiempo real de GreenHouse Future. </p>
            <br></br>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl shadow">
            <h2 className="font-medium text-gray-700">Temperatura</h2>
            <p className="text-3xl font-bold text-green-700">-- °C</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl shadow">
            <h2 className="font-medium text-gray-700">Humedad</h2>
            <p className="text-3xl font-bold text-blue-700">-- %</p>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl shadow">
            <h2 className="font-medium text-gray-700">Luz</h2>
            <p className="text-3xl font-bold text-yellow-700">-- Luz</p>
            </div>
        </div>

        <br></br>

      {data ? (
        <div className="p-6 rounded-xl bg-green-50 border border-green-200 shadow-sm">
          <p>🌡️ Temperatura: {data.temperature} °C</p>
          <p>💧 Humedad: {data.humidity} %</p>
          <p className="text-sm text-gray-500 mt-2">
            Última actualización: {new Date(data.timestamp).toLocaleTimeString()}
          </p>
        </div>
      ) : (
        <p>Cargando datos en tiempo real...</p>
      )}

        <br></br>

        <Link href="/" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#e5e5e7", color: "#1d1d1f", borderRadius: "12px", textDecoration: "none", fontWeight: "500", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", transition: "all 0.3s ease",
            }} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = "#d2d2d7";}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = "#e5e5e7";}}> ⬅ Volver al Inicio </Link>
      </main>
      </>
    );
  }
  