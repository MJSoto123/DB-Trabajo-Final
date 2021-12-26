import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom" 
import { usersInitialState, usersReducer } from "../../reducers/users.reducers";
import { getUsersListDate } from "../../api/user.api";
import { TYPES } from "../../actions/users.actions";
import { Header } from "../../components/header.component";

export const UsersDate = () => {
  const [state, dispatch] = useReducer(usersReducer, usersInitialState);

  useEffect(() => {
    getUsersListDate().then((res) => {
      console.log(res);
      dispatch({ type: TYPES.READ_USERS_DATA, payload: res });
    });
  }, []);

  return (
    <div>
      <Header />
      <Link to="/dashboard">
        <button>Regresar</button>
      </Link>
      <Link to="/dashboard/users">
        <button>Ordenar por Orden Alfabetico</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Fecha de Creación</th>
            <th>Nombres</th>
            <th>Email</th>
            <th>ID</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((e, i) => (
            <tr key={i}>
              <td>{e.created}</td>
              <td>{e.names + " " + e.surnames}</td>
              <td>{e.email}</td>
              <td>{e._id}</td>
              <td>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
