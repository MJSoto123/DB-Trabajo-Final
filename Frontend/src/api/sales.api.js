import { API } from "../config/config";

export const createSales = (a) => {
  return fetch(`${API}/sales/create`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(a)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};