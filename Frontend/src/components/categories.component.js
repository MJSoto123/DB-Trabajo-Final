import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { TYPES } from "../actions/components.actions";
import { getAllCategories } from "../api/categories.api";
import { getProductsBySubcategory, getProductsList } from "../api/products.api";
import {
  ComponentsReducer,
  productsInitialState,
} from "../reducers/components.reducers";

export const Categories = (props) => {
  const [state, dispatch] = useReducer(ComponentsReducer, productsInitialState);

  useEffect(() => {
    getProductsList().then((res) => {
      dispatch({ type: TYPES.READ_PRODUCTS_DATA, payload: res });
    });
  }, []);

  const cosita = () => {
    return props.subcategories.map((e, i) => {
      var arr = e.split("-");
      var primer = arr[0];
      var segundo = "";
      if (arr.length > 2) {
        segundo = arr[1] + "-" + arr[2];
      } else {
        segundo = arr[1];
      }
      var ans = [];
      for (let i = 0; i < state.products.length; i++) {
        if (
          state.products[i].category.category == primer &&
          state.products[i].category.subcategory == segundo
        ) {
          ans.push(state.products[i]);
        }
      }
      // function filtradito(obj) {
      //   if (obj.category.category==primer && obj.category.subcategory==segundo) {
      //     return true
      //   }
      // }
      return (
        <div key={i}>
          <h2 className="product-category">{e}</h2>
          <div className="products-container">
            {/* {JSON.stringify(ans)} */}
            {ans.map((product, i) => {
              return (
                <div className="product" key={i}>
                  <img className="product-img" src={product.url} alt="new" />
                  <p className="product-title">{product.model}</p>
                  <p className="product-price">{product.price}</p>
                  <Link to={`product/${product._id}`}>
                    <button>Ver</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };
  return <div>{cosita()}</div>;
};
