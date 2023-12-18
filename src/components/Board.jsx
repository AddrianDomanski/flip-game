import classes from "../styles/Board.module.css";
import Card from "./Card";

function Board({ cards, onClicked, isLoading }) {
  return (
    
    <div className={`${classes.board} ${isLoading? classes.loading: ""} ${cards.length > 10 ? classes["resize-board-x"] : ""}`}>
      {isLoading ? (
        <div className={classes.loadingCard}>
          <div className={classes.loadingCardFront}></div>
          <div className={classes.loadingCardBack}></div>
        </div>
      ) : (
        ""
      )}
      {cards.map((card) => {
        return <Card key={card.id} onClicked={onClicked} card={card} />;
      })}
    </div>
  );
}
export default Board;
