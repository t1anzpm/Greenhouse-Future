import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "6rem 2rem 2rem", // Agrega espacio por la barra fija
          fontFamily: "sans-serif",
          backgroundColor: "#D3D3D3",
          minHeight: "100vh",
          color: "#1d1d1f",
        }}
      >
        <h1 className="text-2xl font-semibold text-green-700 mb-4" style={{ textAlign: "center"}}>🌱 Greenhouse Future 🌱</h1>
        <p style={{ textAlign: "center"}}>Monitorea tu ambiente en tiempo real con el nuevo sistema de GreenHouse Future.</p>
      </main>
    </>
  );
}
