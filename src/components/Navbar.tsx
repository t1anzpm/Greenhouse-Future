"use client";
import Link from "next/link";
import Image from "next/image";
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
        backgroundColor: "#4a8af1ff",
        borderRadius: "200px",
        borderBottom: "5px solid #00000062",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {/* Logo y título */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Image
          src="/logo_navbar.png" // tu logo debe estar en /public/logo_navbar.png
          alt="Logo del proyecto"
          width={200}
          height={300}
        />
      </div>

      {/* Enlaces de navegación */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link
          href="/"
          style={{
            color: pathname === "/" ? "#202A44" : "#F0FFFF",
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
            color: pathname === "/dashboard" ? "#202A44" : "#F0FFFF",
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
            color: "#F0FFFF",
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

