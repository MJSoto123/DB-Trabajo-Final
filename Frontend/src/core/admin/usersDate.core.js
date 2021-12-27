import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom" 
import { usersInitialState, usersReducer } from "../../reducers/users.reducers";
import { getUsersListDate } from "../../api/user.api";
import { TYPES } from "../../actions/users.actions";
import { Header } from "../../components/header.component";
import { deleteOneUser } from "../../api/users.api";

export const UsersDate = () => {
  const [state, dispatch] = useReducer(usersReducer, usersInitialState);

  useEffect(() => {
    getUsersListDate().then((res) => {
      console.log(res);
      dispatch({ type: TYPES.READ_USERS_DATA, payload: res });
    });
  }, []);

  const deleteElement = async (email) => {
    await deleteOneUser({e:email}).then(() => {
      dispatch({ type: TYPES.DELETE_ONE_ELEMENT, payload: email})
      console.log(state);
    });
  }

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
                <button onClick={() => deleteElement(e.email)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
