import { isAuthenticated } from "./isAutenticated.function";

export const Role = () => {
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt')).user.role;
    // return localStorage.getItem('jwt')
  }
    return false;
}

export const isAdmin = () => {
  if (isAuthenticated() && Role() === 0) {
    return true
  }
    return false;
}