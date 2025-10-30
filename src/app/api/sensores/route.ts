// src/app/api/sensores/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    // Simular datos de sensores
    const data = {
        temperature: parseFloat((20 + Math.random() * 10).toFixed(1)), // 20-30 �C
        humidity: parseFloat((40 + Math.random() * 30).toFixed(1)),    // 40-70 %
        light: parseFloat((200 + Math.random() * 800).toFixed(0)),     // 200-1000 lux
        timestamp: new Date().toISOString(),
    };

    return NextResponse.json(data);
}
