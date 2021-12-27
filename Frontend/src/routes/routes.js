import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsCreate } from "../core/admin/createProduct.core";
import { Dashboard } from "../core/admin/dashboard.core";
import { ProductsModify } from "../core/admin/modifyProduct.core";
import { ProductsABC } from "../core/admin/products.core";
import { ProductsStock } from "../core/admin/productsStock.core";
import { UsersABC } from "../core/admin/users.core";
import { UsersDate } from "../core/admin/usersDate.core";
import { BuyProduct } from "../core/buyProduct.core";
import { Home } from "../core/home.core";
import { Product } from "../core/product.core";
import { SignIn } from "../core/signin.core";
import SignOut from "../core/signout.core";
import { AdminRoute } from "./roles.routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* General Routes */}
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signout" exact element={<SignOut />} />
        {/* User Routes */}
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/product/buy/:id" exact element={<BuyProduct />} />
        {/* Admin Routes */}
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/users"
          element={
            <AdminRoute>
              <UsersABC />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/users/date"
          element={
            <AdminRoute>
              <UsersDate />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/products"
          element={
            <AdminRoute>
              <ProductsABC />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/products/stock"
          element={
            <AdminRoute>
              <ProductsStock />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/products/modify/:productid"
          element={
            <AdminRoute>
              <ProductsModify />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/products/create"
          element={
            <AdminRoute>
              <ProductsCreate />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
