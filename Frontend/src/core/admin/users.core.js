import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom" 
import { usersInitialState, usersReducer } from "../../reducers/users.reducers";
import { getUsersList } from "../../api/user.api";
import { TYPES } from "../../actions/users.actions";
import { Header } from "../../components/header.component";

export const UsersABC = () => {
  const [state, dispatch] = useReducer(usersReducer, usersInitialState);

  useEffect(() => {
    getUsersList().then((res) => {
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
      <Link to="/dashboard/users/date">
        <button>Ordenar por Fecha de Creación</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Email</th>
            <th>ID</th>
            <th>Fecha de Creación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((e, i) => (
            <tr key={i}>
              <td>{e.names + " " + e.surnames}</td>
              <td>{e.email}</td>
              <td>{e._id}</td>
              <td>{e.created}</td>
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
