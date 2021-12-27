import { API } from "../config/config";

export const deleteOneUser = (e) => {
  return fetch(`${API}/user/delete`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(e)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};