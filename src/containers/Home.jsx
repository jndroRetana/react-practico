import React, { useState, useEffect } from "react";
import { Search } from "../components/Search";
import { Categories } from "../components/Categories";
import { Carrusel } from "../components/Carrusel";
import { CarruselItem } from "../components/CarruselItem";
import { useInitialState } from "../hooks/useInitialState";
import { initalState } from "../../initialState.json";

import "../assets/styles/App.scss";

export const Home = () => {
  //const API = "http://localhost:3000/initalState";

  console.log(initalState); //useInitialState(API);

  return (
    <>
      <Search />

      <Categories title="Mi lista">
        <Carrusel>
          {initalState.mylist.length > 0 &&
            initalState.mylist.map((item) => <CarruselItem key={item.id} />)}
        </Carrusel>
      </Categories>

      <Categories title="Tendencias">
        <Carrusel>
          {initalState.trends.map((item) => (
            <CarruselItem key={item.id} {...item} />
          ))}
        </Carrusel>
      </Categories>

      <Categories title="Originales">
        <Carrusel>
          {initalState.originals.map((item) => (
            <CarruselItem key={item.id} {...item} />
          ))}
        </Carrusel>
      </Categories>
    </>
  );
};
