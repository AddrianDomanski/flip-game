import { useState } from "react";
import classes from "../styles/Card.module.css";
import { useEffect } from "react";

function Card({ card, onClicked }) {
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
      onClick={handleClick}
    >
      <div className={classes.front}></div>
      <div className={classes.back}>
        <img src={card.imageSrc} alt="x" />
      </div>
    </div>
  );
}

export default Card;
