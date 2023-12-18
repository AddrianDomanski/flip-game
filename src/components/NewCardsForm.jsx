import { useState } from "react";
import classes from "../styles/NewCardsForm.module.css";

function NewCardsForm({ onSubmit }) {
  const [cardsAmount, setCardsAmount] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setCardsAmount("");
    onSubmit(Number(cardsAmount));
  }

  //TODO: regex min&max
  return (
    <form className={classes["form-card-choice"]} onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        className={classes.input}
        value={cardsAmount}
        onChange={(e) => {
          const test = /^[0-9\b]+$/;
          if (
            (e.target.value === "" || test.test(e.target.value)) &&
            e.target.value <= 20
          )
            setCardsAmount(e.target.value);
        }}
      />
      <button className={classes.button}>Generate cards</button>
    </form>
  );
}

export default NewCardsForm;
