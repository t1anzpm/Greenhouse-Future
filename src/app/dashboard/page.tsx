"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useFirebaseSensors } from "@/hooks/useFirebaseSensors";
import { useState } from "react";

export default function DashboardPage() {
  const data = useFirebaseSensors();
  const [luzEncendida, setLuzEncendida] = useState(false);

  return (
    <>
      <Navbar />
      <main
        style={{
          textAlign: "center",
          padding: "4rem 1rem 2rem",
          fontFamily: "sans-serif",
          backgroundColor: "#202A44",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <h1 className="text-2xl font-semibold text-blue-200 mb-2">
          Panel de Control del Invernadero
        </h1>
        <p>Monitoreo en tiempo real de los sensores</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
          {/* Temperatura aire */}
          <div className="p-3 bg-red-200 border-2 border-red-500 rounded-xl shadow text-gray-700">
            <h2 className="font-medium">Temperatura aire</h2>
            <p className="text-2xl font-bold text-red-700">
              {data ? `${data.temperatura_aire} °C` : "-- °C"}
            </p>
            <br></br>
            <div className="mt-2 h-1 bg-red-300 rounded-full"></div>
          </div>

          {/* Humedad relativa */}
          <div className="p-3 bg-blue-200 border-2 border-blue-400 rounded-xl shadow text-gray-700">
            <h2 className="font-medium">Humedad relativa</h2>
            <p className="text-2xl font-bold text-blue-600">
              {data ? `${data.humedad_relativa} %` : "-- %"}
            </p>
            <br></br>
            <div className="mt-2 h-1 bg-blue-300 rounded-full"></div>
          </div>

          {/* Humedad suelo */}
          <div className="p-3 bg-green-200 border-2 border-green-400 rounded-xl shadow text-gray-700">
            <h2 className="font-medium">Humedad suelo</h2>
            <p className="text-2xl font-bold text-green-600">
              {data ? `${data.humedad_suelo} %` : "-- %"}
            </p>
            <br></br>
            <div className="mt-2 h-1 bg-green-300 rounded-full"></div>
          </div>

          {/* Nivel de agua */}
          <div className="p-3 bg-cyan-200 border-2 border-cyan-500 rounded-xl shadow text-gray-700">
            <h2 className="font-medium">Nivel de agua</h2>
            <p className="text-2xl font-bold text-cyan-700">
              {data ? `${data.nivel_agua} %` : "-- %"}
            </p>
            <br></br>
            <div className="mt-2 h-1 bg-cyan-300 rounded-full"></div>
          </div>

          {/* Luz con switch */}
          <div className="p-3 bg-yellow-100 border-2 border-yellow-500 rounded-xl shadow text-gray-700 relative">
            <div className="flex justify-between items-center">
              <h2 className="font-medium">Luz</h2>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={luzEncendida}
                  onChange={() => setLuzEncendida(!luzEncendida)}
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-400 rounded-full peer dark:bg-gray-700 peer-checked:bg-yellow-500 relative transition-all duration-200">
                  <div
                    className={`absolute top-[2px] left-[2px] bg-white rounded-full h-5 w-5 transition-all duration-200 ${
                      luzEncendida ? "translate-x-5" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
            <p className="text-2xl font-bold text-yellow-600 mt-1">
              {data ? `${data.luz} lux` : "-- lux"}
            </p>
            {/* Placeholder del gráfico */}
            <div className="mt-2 h-10 bg-yellow-200/40 rounded-lg"></div>
          </div>
        </div>

        <div className="mt-6">
          {data ? (
            <div className="p-4 rounded-xl bg-green-50 border-2 border-blue-700 shadow-sm text-gray-700">
              <p>
                Última actualización:{" "}
                {new Date(data.timestamp).toLocaleTimeString()}
              </p>
            </div>
          ) : (
            <p>Cargando datos en tiempo real...</p>
          )}
        </div>

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
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#202A44";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#3b5085ff";
          }}
        >
          ⬅ Volver al Inicio
        </Link>
      </main>
    </>
  );
}

