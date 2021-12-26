import { API } from "../config/config";

export const signin = user => {
  return fetch(`${API}/user/signin`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const signup = user => {
  return fetch(`${API}/user/signup`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const getUsersList = () => {
  return fetch(`${API}/user/list`, {
    method: "get",
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

export const getUsersListDate = () => {
  return fetch(`${API}/user/listdate`, {
    method: "get",
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