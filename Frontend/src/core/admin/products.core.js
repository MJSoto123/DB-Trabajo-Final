import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom" 
import { Header } from "../../components/header.component";
import { productsInitialState, productsReducer } from "../../reducers/products.reducers";
import { deleteOneProduct, getProductsList } from "../../api/products.api";
import { TYPES } from "../../actions/products.actions";

export const ProductsABC = () => {
  const [state, dispatch] = useReducer(productsReducer, productsInitialState);

  useEffect(() => {
    getProductsList().then((res) => {
      dispatch({ type: TYPES.READ_PRODUCTS_DATA, payload: res });
    });
  }, []);

  const deleteElement = async (model) => {
    await deleteOneProduct({model: model}).then(() => {
      dispatch({ type: TYPES.DELETE_ONE_ELEMENT, payload: model})
    });
  }

  return (
    <div>
      <Header />
      <Link to="/dashboard">
        <button>Regresar</button>
      </Link>
      <Link to="/dashboard/products/create">
        <button>Crear un nuevo producto</button>
      </Link>
      <Link to="/dashboard/products/stock">
        <button>Ordenar por Stock</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>N°</th>
            <th>Modelo</th>
            <th>Categoria</th>
            <th>Subcategoria</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Descuento</th>
            <th>Stock</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((e, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{e.model}</td>
              <td>{e.category.category}</td>
              <td>{e.category.subcategory}</td>
              <td>{e.brand}</td>
              <td>{e.price}</td>
              <td>{e.discount}</td>
              <td>{e.stock}</td>
              <td>{e._id}</td>
              <td>
                <Link to={`/dashboard/products/modify/${e._id}`}>
                  <button>Modificar</button>
                </Link>
                <button onClick={() => deleteElement(e.model)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
