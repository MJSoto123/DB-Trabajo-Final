import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { TYPES } from "../actions/home.actions";
import { getAllCategories, getSubCategories } from "../api/categories.api";
import { Carousel } from "../components/carousel.component";
import { Categories } from "../components/categories.component";
import { Header } from "../components/header.component";
import { isAdmin } from "../functions/isAdmin.function";
import { isAuthenticated } from "../functions/isAutenticated.function";
import { homeInitialState, homeReducer } from "../reducers/home.reducers";

export const Home = () => {
  const [state, dispatch] = useReducer(homeReducer, homeInitialState);

  useEffect(() => {
    getSubCategories().then((res) => {
      dispatch({ type: TYPES.READ_SUBCATEGORIES_DATA, payload: res });
    });
  }, []);

  const ShowDashboard = () => {
    if (isAuthenticated() && isAdmin()) {
      return (
        <Link to="/dashboard">
          <button>Ir al Panel de Control</button>
        </Link>
      );
    }
  };

  return (
    <div>
      <Header />
      <div>{ShowDashboard()}</div>
      <Carousel>
        <div className="carousel-container">
          <img
            className="carousel-img"
            src="https://i.pinimg.com/564x/36/96/8c/36968c6cce7610f295d01bb38bbf213b.jpg"
            alt="new"
          />
        </div>
        <div className="carousel-container">
          <img
            className="carousel-1"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
          />
        </div>
        <div className="carousel-container"> Oferton 3 </div>
        <div className="carousel-container"> Oferton 4 </div>
        <div className="carousel-container"> Oferton 5 </div>
      </Carousel>

      <Categories subcategories={state.subcategories} />
    </div>
  );
};
