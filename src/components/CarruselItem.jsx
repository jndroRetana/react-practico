import React from "react";
import "../assets/styles/components/CarruselItem.scss";
import play from "../assets/static/play-icon.png";
import plus from "../assets/static/plus-icon.png";

export const CarruselItem = ({
  title,
  year,
  contentRating,
  duration,
  cover,
}) => (
  <>
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={play}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={plus}
            alt="Plus Icon"
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          `${year} ${contentRating} ${duration}`
        </p>
      </div>
    </div>
  </>
);
