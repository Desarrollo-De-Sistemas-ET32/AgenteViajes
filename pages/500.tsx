export default function Custom500() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f44336",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}>
        <h1>500 - Error en el servidor</h1>
        <p>Lo sentimos, algo salió mal.</p>
      </div>
    );
  }
  