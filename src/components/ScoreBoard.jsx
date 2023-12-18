import { useEffect, useState } from "react";
import classes from "../styles/ScoreBoard.module.css";
import CardButton from "./ui/CardButton";
import StopwatchButton from "./ui/StopwatchButton";

function getTime(msValue) {
  var ms = msValue % 1000;
  msValue = (msValue - ms) / 1000;
  var secs = msValue % 60;
  msValue = (msValue - secs) / 60;
  var mins = msValue % 60;
  var hrs = (msValue - mins) / 60;

  return hrs + ":" + mins + ":" + secs + "." + ms;
}

const sortScoresByPair = (array) => {
  return array.slice().sort((a, b) => a.pairAmount - b.pairAmount);
};

const sortScoresByTime = (array) => {
  return array.slice().sort((a, b) => a.time - b.time);
};

function ScoreBoard({ scores }) {
  const [sortedScores, setSortedScores] = useState(scores);
  const [sortingOption, setSortingOption] = useState("cards");

  useEffect(() => {
    setSortedScores(() => {
      if (sortingOption === "cards") return sortScoresByPair(scores);
      else return sortScoresByTime(scores);
    });
  }, [scores]);

  const onClickHandle = (variant) => {
    switch (variant) {
      case "cards":
        {
          setSortedScores(sortScoresByPair(scores));
          setSortingOption("cards");
        }
        break;
      case "time":
        {
          setSortedScores(sortScoresByTime(scores));
          setSortingOption("time");
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className={classes["score-board"]}>
      {console.log("Rendered")}
      <CardButton onClick={() => onClickHandle("cards")} />
      <StopwatchButton onClick={() => onClickHandle("time")} />
      {sortedScores.map((score) => {
        return (
          <div
            className={`${classes.score} ${
              score.result === "betterResult"
                ? classes["betterResult"]
                : score.result === "worseResult"
                ? classes["worseResult"]
                : classes["neutralResult"]
            }`}
            key={crypto.randomUUID()}
          >
            {score.pairAmount} : {getTime(score.time)}
          </div>
        );
      })}
    </div>
  );
}

export default ScoreBoard;
