import classes from "../styles/Annoucement.module.css"

function Annoucement({ gameState }) {
  return (
    <>
      <div className={classes["game-state"]}> <h1>{gameState}</h1></div>
    </>
  );
}

export default Annoucement;
