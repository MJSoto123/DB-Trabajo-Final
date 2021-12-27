import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom" 
import { usersInitialState, usersReducer } from "../../reducers/users.reducers";
import { getUsersList } from "../../api/user.api";
import { TYPES } from "../../actions/users.actions";
import { Header } from "../../components/header.component";
import { deleteOneUser } from "../../api/users.api";

export const UsersABC = () => {
  const [state, dispatch] = useReducer(usersReducer, usersInitialState);

  useEffect(() => {
    getUsersList().then((res) => {
      console.log(res);
      dispatch({ type: TYPES.READ_USERS_DATA, payload: res });
    });
  }, []);

  const deleteElement = async (email) => {
    await deleteOneUser({e:email}).then(() => {
      console.log(state);
      dispatch({ type: TYPES.DELETE_ONE_ELEMENT, payload: email})
    });
  }


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
                <button onClick={() => deleteElement(e.email)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
