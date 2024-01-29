import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom"; // React routing modules

import { Link } from "react-router-dom";

const DocumentList = () => {
  const [searchParams] = useSearchParams(); // Defining searchParams state variable (for getting search params from URL)
  const navigate = useNavigate(); // Getting navigate from react-router-dom (for navigating between pages)

  const team = searchParams.get("equipo"); // Getting equipo from URL
  const categoria = searchParams.get("categoria"); // Getting categoria from URL

  return (
    <div>
      <h1>Documentos {team}</h1>
      <h2>Categoria {categoria}</h2>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};

export default DocumentList;
