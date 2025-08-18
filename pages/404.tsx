import { NextPage } from "next";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "3rem" }}>404 - Página no encontrada</h1>
      <p>La ruta que intentas visitar no existe.</p>
      <Link href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default Custom404;
