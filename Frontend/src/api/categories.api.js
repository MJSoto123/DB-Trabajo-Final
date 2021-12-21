import { API } from "../config/config";

export const getAllCategories = () => {
  return fetch(`${API}/categories/list`, {
    method: "GET",
    headers: {
      "Content-Type": "aplication/json"
    }
  }).then(response => {
    console.log(`${API}/categories/list`)
    return response.json();
  }).catch(error => {
    console.log(error);
  })
  
}
// https://db-final-proyect.herokuapp.com/categories/list