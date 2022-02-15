import React, { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const Home = () => {
  const [ isCardOpen, setCardOpen ] = useState(true)

  return (
    <>
      <Header />
      <Card isOpen={isCardOpen} closeCard={() => setCardOpen(false)}>
        <Card.Overline>Niterói, RJ - Brasil</Card.Overline>
        <Card.MainInfo climate="Nublado" temperature="20" />
      </Card>
    </>
  );
};

export default Home;
