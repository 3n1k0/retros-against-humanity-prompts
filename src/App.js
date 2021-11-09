import "./App.css";
import styled from "styled-components";
import {
  badCards,
  goodCards,
  improvementCards,
  sprintStarCards,
} from "./cards/cards";

import { useState } from "react";

const MainContainer = styled.div`
  display: grid;
  place-items: center;
`;

const Card = styled.div`
  display: grid;
  place-items: center;
  background: pink;
  width: 300px;
  height: 420px;
  border-radius: 20px;
`;

const decks = [];
decks.push(goodCards, badCards, improvementCards, sprintStarCards);

function App() {
  const [card, setCard] = useState();

  function drawCard() {
    let newCard =
      decks[Math.floor(Math.random() * 4)][
        Math.floor(Math.random() * decks.length + 1)
      ].content;
    setCard(newCard);
  }

  return (
    <MainContainer>
      <h1>Retros Against Humanity</h1>
      <Card>
        <p>{card}</p>
      </Card>
      <button
        onClick={() => {
          drawCard();
        }}
      >
        new card
      </button>
    </MainContainer>
  );
}

export default App;
