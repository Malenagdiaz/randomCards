import React, { useState } from "react";
import { CardContainer } from "./components/cardContainer/CardContainer";
import { ButtonBall } from "./components/buttonBall/ButtonBall";

const footballPlayerNames = [
  "Messi",
  "Dibu",
  "Neymar",
  "Ronaldo",
  "Ramos",
  "Mbappe",
];

function App() {
  const [footballPlayerName, setFootballPlayerName] = useState("Messi");

  const handleShootFootball = () => {
    const randomIndex = Math.floor(Math.random() * footballPlayerNames.length);
    const randomFootballPlayerName = footballPlayerNames[randomIndex];
    setFootballPlayerName(randomFootballPlayerName);
  };

  return (
    <>
      <h1>Pulsa el botón y descubre qué futbolista eres!</h1>
      <ButtonBall
        footballPlayerName={footballPlayerName}
        handleShootFootball={handleShootFootball}
      />
      <CardContainer footballPlayerName={footballPlayerName} />
    </>
  );
}

export default App;
