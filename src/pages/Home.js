import React, { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import Header from "../components/Header";

const Home = () => {
  const [ isCardOpen, setCardOpen ] = useState(true)

  return (
    <>
      <Header />
      <WeatherCard isOpen={isCardOpen} closeCard={() => setCardOpen(false)}>
        <WeatherCard.Overline>Niterói, RJ - Brasil</WeatherCard.Overline>
        <WeatherCard.MainInfo climate="Nublado" temperature="20" />
      </WeatherCard>
    </>
  );
};

export default Home;
