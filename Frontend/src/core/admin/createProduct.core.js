import React, { useReducer, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom" 
import { Header } from "../../components/header.component";
import { createproductInitialState, productsReducer } from "../../reducers/products.reducers";
import { createOneProduct, deleteOneProduct, getProductById, getProductsList, modifyOneProduct } from "../../api/products.api";
import { TYPES } from "../../actions/products.actions";

export const ProductsCreate = () => {

  const [state, dispatch] = useReducer(productsReducer, createproductInitialState);


  const handleChange = n => event => {
    dispatch({ type: TYPES.CREATE, payload: { field: n, value: event.target.value} });
    console.log(state)
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    console.log("?")
    createOneProduct({
      "model": state.data.model,
      "category": state.data.namecategory+"-"+state.data.subcategory,
      "brand": state.data.brand,
      "discount": state.data.discount,
      "price": state.data.price,
      "stock": state.data.stock,
      "description": state.data.description,
      "url": state.data.url,
    }).then((result) => {
      console.log(result)
      dispatch({ type: TYPES.REDIRECT });
    })
  }

  const redirect = () => {
    if (state.redirectToReferrer) {
      return <Navigate replace to="/dashboard/products"></Navigate>
    }
  }

  return (
    <div>
      <Header />
        <form>
          <div>
            <label>
              Modelo:
            </label>
            <input
              onChange={handleChange("model")}
              value={state.data.model}
            />
          </div>
          <div>
            <label>
              Marca:
            </label>
            <input
              onChange={handleChange("brand")}
              value={state.data.brand}
            />
          </div>
          <div>
            <label>
              Categoria:
            </label>
            <input
              onChange={handleChange("namecategory")}
              value={state.data.namecategory}
            />
          </div>
          <div>
            <label>
              Sub-Categoria:
            </label>
            <input
              onChange={handleChange("subcategory")}
              value={state.data.subcategory}
            />
          </div>
          <div>
            <label>
              Precio:
            </label>
            <input
              onChange={handleChange("price")}
              value={state.data.price}
            />
          </div>
          <div>
            <label>
              Descuento:
            </label>
            <input
              onChange={handleChange("discount")}
              value={state.data.discount}
            />
          </div>
          <div>
            <label>
              Stock:
            </label>
            <input
              onChange={handleChange("stock")}
              value={state.data.stock}
            />
          </div>
          <div>
            <label>
              Descripción:
            </label>
            <input
              onChange={handleChange("description")}
              value={state.data.description}
            />
          </div>
          <div>
            <label>
              URL de la imagen:
            </label>
            <input
              onChange={handleChange("url")}
              value={state.data.url}
            />
          </div>
          <div>
            <button onClick={clickSubmit}>Guardar</button>
            <Link to="/dashboard/products">
              <button>Cancelar</button>
            </Link>
          </div>
        </form>
        {redirect()}
    </div>
  );
};
