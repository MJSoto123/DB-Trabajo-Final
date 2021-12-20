import React from "react";

export const Categories = () => {
  return (
    <div>
      <h2 className="product-category">Cañas de Pescar</h2>
      <div className="products-container">
        <div className="product">
          <img
            className="product-img"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
          />
          <p className="product-title">ATF 2473 / 20g</p>
          <p className="product-price">S/.728</p>
        </div>
        <div className="product">
          <img
            className="product-img"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
          />
          <p className="product-title">MIPOSHKA / 120T</p>
          <p className="product-price">S/.123</p>
        </div>
        <div className="product">
          <img
            className="product-img"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
          />
          <p className="product-title">SHODINGER C-2473 / 20kg</p>
          <p className="product-price">S/.28</p>
        </div>
      </div>
    </div>
  )
}