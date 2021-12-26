import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/header.component";

export const Dashboard = () => {

  return (
    <div>
      <Header/>
      <Link to="/dashboard/users">
        <button>
          Usuarios
        </button>
      </Link>
      <Link to="/dashboard/products">
        <button>
          Productos
        </button>
      </Link>
      <Link to="/dashboard/sales">
        <button>
          Ventas
        </button>
      </Link>
    </div>
  )
}