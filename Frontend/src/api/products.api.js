import { API } from "../config/config";

export const getProductsList = () => {
  return fetch(`${API}/product/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const getProductsListStock = () => {
  return fetch(`${API}/product/liststock`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

// https://db-final-proyect.herokuapp.com/product/bycategoryname
// {
//   "category": "Cañas-Surfcasting"
// }
export const getProductsBySubcategory = (c) => {
  return fetch(`${API}/product/bycategoryname`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(c)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const deleteOneProduct = (model) => {
  return fetch(`${API}/product/delete`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(model)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const getProductById = (id) => {
  return fetch(`${API}/product/productid`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(id)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const modifyOneProduct = (product) => {
  console.log(product)
  return fetch(`${API}/product/modify`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const createOneProduct = (product) => {
  return fetch(`${API}/product/create`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

