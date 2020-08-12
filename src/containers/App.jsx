import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Categories } from "../components/Categories";
import { Carrusel } from "../components/Carrusel";
import { CarruselItem } from "../components/CarruselItem";
import { Footer } from "../components/Footer";
import { useInitialState } from "../hooks/useInitialState";

import "../assets/styles/App.scss";

export const App = () => {
  const API = "http://localhost:3000/initalState";

  const videos = useInitialState(API);

  console.log(videos.trends);

  return (
    <>
      <Header />
      <Search />
      <Categories title="Mi lista">
        <Carrusel>
          <CarruselItem />;
        </Carrusel>
      </Categories>

      <Categories title="Tendencias">
        <Carrusel>
          <CarruselItem />
        </Carrusel>
      </Categories>

      <Categories title="Originales">
        <Carrusel>
          <CarruselItem />
          <CarruselItem />
        </Carrusel>
      </Categories>

      <Footer />
    </>
  );
};
