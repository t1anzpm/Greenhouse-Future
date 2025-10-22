"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#90EE90",
        borderBottom: "1px solid #d2d2d7",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {/* Logo o título */}
      <h2 style={{ margin: 0, color: "#008000", fontWeight: "600" }}>
        🌱 GreenHouse Future
      </h2>

      {/* Enlaces de navegación */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link
          href="/"
          style={{
            color: pathname === "/" ? "green" : "#333",
            textDecoration: "none",
            fontWeight: pathname === "/" ? "600" : "500",
            transition: "color 0.2s ease",
          }}
        >
          Inicio
        </Link>

        <Link
          href="/dashboard"
          style={{
            color: pathname === "/dashboard" ? "green" : "#333",
            textDecoration: "none",
            fontWeight: pathname === "/dashboard" ? "600" : "500",
            transition: "color 0.2s ease",
          }}
        >
          Dashboard
        </Link>

        <Link
          href="#"
          style={{
            color: "#1d1d1f",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Configuración
        </Link>
      </div>
    </nav>
  );
}
