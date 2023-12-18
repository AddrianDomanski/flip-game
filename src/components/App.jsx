import { useEffect, useState } from "react";
import "../styles/App.css";
import Board from "./Board";
import NewCardsForm from "./NewCardsForm";
import { useRef } from "react";
import ScoreBoard from "./ScoreBoard";
import Annoucement from "./Annoucement";
import { createCards } from "../utils/flipCardCreator";
import { setIds } from "../utils/setIds";

function App() {
  const [pairAmount, setPairAmount] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameState, setGameState] = useState("Let's play!");
  const [scores, setScores] = useState(() => {
    const savedScores = localStorage.getItem("SCORES");
    if (savedScores === null) return [];
    return JSON.parse(savedScores);
  });
  const startTime = useRef(null);

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.imageSrc === secondCard.imageSrc) {
        setCards((prevCards) =>
          prevCards.map((el) =>
            el.id === firstCard.id || el.id === secondCard.id
              ? { ...el, isCompleted: true }
              : el
          )
        );
        setFirstCard(null);
        setSecondCard(null);
      } else {
        setFirstCard(null);
        setSecondCard(null);
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (
      gameStarted &&
      cards.every((card) => card.isCompleted) &&
      cards.length > 0
    ) {
      let time = new Date().getTime() - startTime.current;
      addNewScore(pairAmount, time);
      setGameStarted(false);
    }
    cards.length === 0 && setGameStarted(false);
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("SCORES", JSON.stringify(scores));
  }, [scores]);

  const addNewScore = (cardPairAmount, time) => {
    if (scores.length === 0) {
      setScores([
        { pairAmount: cardPairAmount, time: time, result: "betterResult" },
      ]);
      setGameState("Nowy rekord!");
    } else {
      setScores((prevScores) => {
        const indexToUpdate = prevScores.findIndex(
          (sc) => sc.pairAmount === cardPairAmount
        );

        if (indexToUpdate !== -1) {
          return prevScores.map((score) => {
            if (score.pairAmount === cardPairAmount) {
              score.time > time
                ? setGameState("New record!")
                : setGameState("Oh, maybe next time...");
              return {
                ...score,
                time: score.time > time ? time : score.time,
                result: score.time > time ? "betterResult" : "worseResult",
              };
            } else return { ...score, result: "neutralResult" };
          });
        } else {
          setGameState("New record!");
          return [
            ...prevScores.map((prev) => {
              return { ...prev, result: "neutralResult" };
            }),
            { pairAmount: cardPairAmount, time: time, result: "betterResult" },
          ];
        }
      });
    }
  };
  async function showCards(cardPairAmount) {
    setGameState("Good Luck!");
    setCards([]);
    setIsLoading(true);
    createCards(cardPairAmount).then((data) => {
      const cards = data;
      setCards(setIds(cards));
      setFirstCard(null);
      setSecondCard(null);
      setPairAmount(cardPairAmount);
      setIsLoading(false);
    });
  }

  function handleCardClick(card) {
    if (!gameStarted) {
      setGameStarted(true);
      startTime.current = new Date();
    }

    setCards((prevCards) =>
      prevCards.map((el) =>
        el.id === card.id ? { ...el, isClicked: true } : el
      )
    );
    firstCard === null
      ? setFirstCard(card)
      : firstCard.id !== card.id && setSecondCard(card);
  }

  return (
    <div className="wrapper">
      <Annoucement gameState={gameState} />
      <Board cards={cards} onClicked={handleCardClick} isLoading={isLoading} />
      <NewCardsForm onSubmit={showCards} />
      <ScoreBoard scores={scores} />
    </div>
  );
}

export default App;
