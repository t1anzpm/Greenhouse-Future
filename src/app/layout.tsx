import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GreenhouseFuture",
  description: "Sistema en tiempo real para monitoreo de invernaderos",
  icons: {
    icon: "/favicon_ghf_final.png", // o favicon.ico
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_ghf_final.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        style={{
          minHeight: "100vh",
          backgroundColor: "#0D1117", // color base oscuro
          color: "#E6E6FA", // texto lavanda suave
          fontFamily: "sans-serif",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* Fondo global del logo */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/favicon_ghf_final.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "300px", // ajusta tamaño del logo
            opacity: 0.05, // marca de agua sutil
            zIndex: -1,
          }}
        />
        {children}
      </body>
    </html>
  );
}

