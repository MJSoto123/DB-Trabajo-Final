import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom" 
import { TYPES } from "../actions/components.actions";
import { getAllCategories } from "../api/categories.api";
import { isAuthenticated } from "../functions/isAutenticated.function";
import {
  componentsInitialState,
  ComponentsReducer,
} from "../reducers/components.reducers";

export const Header = () => {
  const [state, dispatch] = useReducer(
    ComponentsReducer,
    componentsInitialState
  );

  useEffect(() => {
    console.log("hola");
    getAllCategories().then((res) => {
      console.log(res);
      dispatch({ type: TYPES.READ_CATEGORIES_DATA, payload: res });
    });
  }, []);

  const login = () => {
    //Para menu principal: Iniciar Sesión
    // Para lugar de registro: Resgistrase
    // Para lugar de registro: Iniciar Sesion
    // Cuando la sesion esté iniciada: Cerrar Sesión
    let text,
      link = "";
    if (!isAuthenticated()) {
      text = "Iniciar Sesión";
      link = "/signin";
    } else {
      text = "Cerrar Sesión";
      link = "/signout";
    }
    return (
      <div className="sesion-container">
        <a href={link}>
          <button type="button">{text}</button>
        </a>
      </div>
    );
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img
            className="logo"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
          />
        </Link>
      </div>
      <div className="centro-container">
        <div className="lupa-container">
          <img
            className="lupa"
            src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png"
            alt="new"
          />
        </div>
        <div className="categories-container">
          {state.categories.map((e, i) => (
            <div className="category" key={i}>
              {e}
            </div>
          ))}
        </div>
      </div>
      <div className="registro">{login()}</div>
    </div>
  );
};
