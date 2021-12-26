import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../core/admin/dashboard.core";
import { UsersABC } from "../core/admin/users.core";
import { UsersDate } from "../core/admin/usersDate.core";
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
        <Route path="/product" exact element={<Product />} />
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
