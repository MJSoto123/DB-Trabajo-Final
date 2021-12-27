import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom" 
import { useParams } from "react-router-dom";
import { TYPES } from "../actions/product.actions";
import { getAllCategories } from "../api/categories.api";
import { getProductById } from "../api/products.api";
import { Header } from "../components/header.component";
import { productInitialState, productReducer } from "../reducers/product.reducers";

export const Product = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(productReducer, productInitialState);
  
  useEffect(() => {
    getProductById({"id":id}).then((res) => {
      dispatch({ type: TYPES.READ_DATA, payload: res });
    });
  }, []);

  const buy_status = () => {
    if (state.data.stock > 0) {
      return (
        <Link to={`/product/buy/${state.data._id}`}>
          <button className="buy">Comprar</button>
        </Link>
      );
    } else {
      return <button className="agotado">Agotado</button>;
    }
  }

  return (
    <div>
      <Header/>
      <div className="single_product-container">
        <div className="single_product-img-container">
          <img
            className="single_product-img"
            src= {state.data.url}
            alt="new"
          />
        </div>
        <div className="single-product-body">
          <h1>{state.data.model}</h1>
          <div className="price-stock">
            <h3>S/.{state.data.price}</h3>
            {buy_status()}
          </div>
          <p>{state.data.category.category + " " + state.data.category.subcategory}</p>
          {/* <p>{JSON.stringify(state.data)}</p> */}
          <h4>DESCRIPCIÓN</h4>
          <p className="product-description">
            {JSON.stringify(state.data.description)}
          </p>
        </div>
      </div>
    </div>
  );
};