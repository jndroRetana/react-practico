import React from "react";
import "../assets/styles/components/Carrusel.scss";

export const Carrusel = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container">{children}</div>
  </section>
);
