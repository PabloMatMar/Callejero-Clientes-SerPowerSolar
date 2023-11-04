import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return <nav>
    <button>
      <Link to="/llamar"> Llamadas para hoy </Link>
    </button>
    <button>
      <Link to="/misClientes"> Mis Clientes </Link>
    </button>
    <button>
      <Link to="/calles"> Buscar Calles </Link>
    </button>
    <button>
      <Link to="/"> Iniciar Sesión </Link>
    </button>
  </nav>;
};

export default Nav;
