// src/app/api/sensores/route.ts
import { NextResponse } from "next/server";

// Simulación de datos (luego se puede conectar a Firebase o sensores reales)
export async function GET() {
    const data = {
        temperatura_aire: (20 + Math.random() * 5).toFixed(1),
        humedad_relativa: (40 + Math.random() * 20).toFixed(1),
        humedad_suelo: (30 + Math.random() * 10).toFixed(1),
        luz: (300 + Math.random() * 500).toFixed(0),
        nivel_agua: (50 + Math.random() * 50).toFixed(1),
        timestamp: new Date().toISOString(),
    };

    return NextResponse.json(data);
}
