import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { createSales } from "../api/sales.api";
import { isAuthenticated } from "../functions/isAutenticated.function";

export const BuyProduct = () => {
  
  var idUser = "12"
  if (isAuthenticated) {
    idUser = JSON.parse(localStorage.getItem("jwt")).user._id;
  }
  const id = useParams()
  useEffect(() => {
    createSales({ "iduser": idUser, "idproduct": id }).then((res) => {
      console.log(res);
    });
  }, []);

  return <Navigate replace to='/'/>
}