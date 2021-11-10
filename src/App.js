import styled from "styled-components";
import {
  badCards,
  goodCards,
  improvementCards,
  sprintStarCards,
} from "./cards/cards";
import "./index.css";

import { useState } from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

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
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  background: ${({ type = "good" }) =>
    type === "good"
      ? "#ffff"
      : type === "bad"
      ? "#000"
      : type === "star"
      ? "#ffe566"
      : "#d1b2e0"};
  color: ${({ type }) => (type === "bad" ? "#fff" : "#000")};
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

const Footnote = styled.p`
  font-size: 10px;
`;

const decks = [];
decks.push(goodCards, badCards, improvementCards, sprintStarCards);
const deck = decks.flat();
shuffleArray(deck);

function App() {
  const [card, setCard] = useState({
    content: "Retros Against Humanity.",
  });

  function drawCard() {
    const newCard = deck.pop();
    setCard(newCard);
  }

  function footnote(card) {
    if (card.type === "good") {
      return "Retros Against Humanity | Good cards.";
    }
    if (card.type === "bad") {
      return "Retros Against Humanity | Bad cards.";
    }
    if (card.type === "improvement") {
      return "Retros Against Humanity | Improvement cards.";
    } else {
      return "Retros Against Humanity | Sprint Star cards.";
    }
  }

  return (
    <MainContainer>
      <CardWrapper>
        <h1>Retros Against Humanity</h1>
        {card ? (
          <Card type={card.type}>
            <p>{card.content}</p>
            <Footnote>{footnote(card)}</Footnote>
          </Card>
        ) : (
          window.location.reload(true)
        )}
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
