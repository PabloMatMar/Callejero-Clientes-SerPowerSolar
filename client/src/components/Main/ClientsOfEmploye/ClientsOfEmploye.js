import React from "react";
import { Link } from "react-router-dom";

const ClientsOfEmploye = () => {
  return <section>
    <button>
      <Link to="/introducirUnCliente"> Introducir un cliente </Link>
    </button>
    <button>
      <Link to="/buscarUnCliente"> Buscar un cliente </Link>
    </button>
    <button>
      <Link to="/verTodosMisClientes"> Ver todos mis clientes</Link>
    </button>
  </section>;
};

export default ClientsOfEmploye;
