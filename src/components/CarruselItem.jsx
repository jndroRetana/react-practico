import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/CarruselItem.scss";
import play from "../assets/static/play-icon.png";
import plus from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";
import { setFavorite, deleteFavorite } from "../actions";

const CarruselItem = (props) => {
  const { id, title, year, contentRating, duration, cover, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      title,
      year,
      contentRating,
      duration,
      cover,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
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
            {isList ? (
              <img
                className="carousel-item__details--img"
                src={removeIcon}
                alt="Delete Icon"
                onClick={() => handleDeleteFavorite(id)}
              />
            ) : (
              <img
                className="carousel-item__details--img"
                src={plus}
                alt="Plus Icon"
                onClick={handleSetFavorite}
              />
            )}
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            `${year} ${contentRating} ${duration}`
          </p>
        </div>
      </div>
    </>
  );
};

const mapDispachToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispachToProps)(CarruselItem);
