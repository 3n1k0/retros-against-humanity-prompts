import styled from "styled-components";
import {
  badCards,
  goodCards,
  improvementCards,
  sprintStarCards,
} from "./cards/cards";
import "./index.css";

import { useState } from "react";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: "Helvetica";
  font-weight: 700;

  h1 {
    font-size: 40px;
    color: white;
    padding-bottom: 50px;
  }
`;

const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: grid;
  place-items: start;
  background: ${({ type }) => (type === "good" ? "pink" : "blue")};
  width: 300px;
  min-height: 420px;
  border-radius: 15px;
  font-size: 30px;
  border: 1px solid black;
  box-shadow: 20px 10px 30px rgba(0, 0, 0, 0.3);
  p {
    padding: 25px;
    border-radius: 15px;
    background: transparent;
  }
`;

const DrawButton = styled.button`
  margin-top: 50px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 10px 40px;
  outline: 0;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 30px;
  text-transform: uppercase;

  &:active {
    box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.4);
  }
`;

const decks = [];
decks.push(goodCards, badCards, improvementCards, sprintStarCards);

function App() {
  const [card, setCard] = useState("Click the button to get started.");

  function drawCard() {
    let newCard =
      decks[Math.floor(Math.random() * 4)][
        Math.floor(Math.random() * decks.length + 1)
      ];
    setCard(newCard);
    console.log(newCard);
  }

  return (
    <MainContainer>
      <CardWrapper>
        <h1>Retros Against Humanity</h1>
        <Card type={card.type}>
          <p>{card.content}</p>
        </Card>
        <DrawButton
          onClick={() => {
            drawCard();
          }}
        >
          draw
        </DrawButton>
      </CardWrapper>
    </MainContainer>
  );
}

export default App;
