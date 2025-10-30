import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "6rem 2rem 2rem", // Agrega espacio por la barra fija
          fontFamily: "sans-serif",
          backgroundColor: "#202A44",
          minHeight: "100vh",
          color: "#1d1d1f",
        }}
      >
        <h1 className="text-2xl font-semibold text-blue-200 mb-4" style={{ textAlign: "center"}}>🌱 Greenhouse Future 🌱</h1>
        <p style={{ textAlign: "center", color: "white"}}>Monitorea tu ambiente en tiempo real con GreenHouse Future.</p>
      </main>
    </>
  );
}
