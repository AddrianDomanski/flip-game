import { useState } from "react";
import classes from "../styles/Card.module.css";
import { useEffect } from "react";
import { randomNumber } from "../utils/randomNumber";

function Card({ card, onClicked, index }) {
  const [firstRender, setFirsRender] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => setFirsRender(false), 1000);
  }, []);

  const handleClick = () => {
    if (!card.isCompleted) {
      setIsClicked(true);
      !card.isCompleted && onClicked(card);
      setTimeout(() => {
        setIsClicked(false);
      }, 1000);
    }
  };

  return (
    <div
      className={`${classes.card} ${isClicked ? classes.cardFlip : ""} ${
        firstRender ? classes["card-appearance"] : ""
      } ${card.isCompleted ? classes.completed : ""}`}
      style={{ "--i": index * randomNumber(1, 2) }}
      onClick={handleClick}
    >
      <div className={classes.front}></div>
      <div className={classes.back}>
        <img src={card.imageSrc} alt="x"  draggable="false"/>
      </div>
    </div>
  );
}

export default Card;
