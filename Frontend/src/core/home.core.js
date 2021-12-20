import React from "react";
import { Carousel } from "../components/carousel.component";
import { Categories } from "../components/categories.component";
import { Header } from "../components/header.component";

export const Home = () => {
  return (
    <div>
      <Header />
      <Carousel>
        <div className="carousel-container">
          <img
            className="carousel-img"
            src="https://i.pinimg.com/564x/36/96/8c/36968c6cce7610f295d01bb38bbf213b.jpg"
            alt="new"
          />
        </div>
        <div className="carousel-container">
        <img
            className="carousel-1"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
          />
        </div>
        <div className="carousel-container"> Oferton 3 </div>
        <div className="carousel-container"> Oferton 4 </div>
        <div className="carousel-container"> Oferton 5 </div>
      </Carousel>
      <Categories />
      <Categories />
      <Categories />
    </div>
  )
}