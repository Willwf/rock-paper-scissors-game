import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HandShapeDivWrapper } from "../HandShapeDivWrapper";
import * as Styles from "./styles";

interface ComponentProps {
  setHandShapeSelected: Dispatch<SetStateAction<string>>;
  handShapeSelected: string;
  setScore: Dispatch<SetStateAction<string>>;
  score: string;
  gameSelected: string;
}

interface handShapes {
  [key: string]: string;
}

export function GameElementResult(props: ComponentProps) {
  const {
    setHandShapeSelected,
    handShapeSelected,
    setScore,
    score,
    gameSelected,
  } = props;

  const [loading, setLoading] = useState(true);
  const [resultString, setResultString] = useState<string>("");
  const [houseHandShape, setHouseHandShape] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [handShapeSelected]);

  function getRandomHandShape(gameSelected: string) {
    const handShapes: handShapes = {
      "1": "paper",
      "2": "scissors",
      "3": "rock",
      "4": "lizard",
      "5": "spock",
    };

    if (gameSelected === "RPS") {
      const randomNumber = (Math.floor(Math.random() * 3) + 1).toString();
      console.log(randomNumber);
      return handShapes[randomNumber];
    } else {
      const randomNumber = (Math.floor(Math.random() * 5) + 1).toString();
      console.log(randomNumber);
      return handShapes[randomNumber];
    }
  }

  function handlePlayAgainButton() {
    setHandShapeSelected("");
  }

  function getGameResult(
    handShapeSelected: string,
    houseHandShape: string
  ): string {
    if (handShapeSelected === houseHandShape) {
      return "DRAW";
    } else if (
      (handShapeSelected === "rock" &&
        (houseHandShape === "scissors" || houseHandShape === "lizard")) ||
      (handShapeSelected === "scissors" &&
        (houseHandShape === "paper" || houseHandShape === "lizard")) ||
      (handShapeSelected === "paper" &&
        (houseHandShape === "rock" || houseHandShape === "spock")) ||
      (handShapeSelected === "lizard" &&
        (houseHandShape === "paper" || houseHandShape === "spock")) ||
      (handShapeSelected === "spock" &&
        (houseHandShape === "rock" || houseHandShape === "scissors"))
    ) {
      const actualScore = Number(score) + 1;
      setScore(actualScore.toString());
      localStorage.setItem("RPSscore", actualScore.toString());
      return "YOU WIN";
    } else {
      const actualScore = Number(score) - 1;
      setScore(actualScore.toString());
      localStorage.setItem("RPSscore", actualScore.toString());
      return "YOU LOSE";
    }
  }

  useEffect(() => {
    const randomHouseHandShape = getRandomHandShape(gameSelected);
    const result = getGameResult(handShapeSelected, randomHouseHandShape);
    setResultString(result);
    setHouseHandShape(randomHouseHandShape);
  }, [handShapeSelected]);

  return (
    <Styles.GameElementResult>
      <Styles.HandShapeSelectedDiv className="playerPick">
        <HandShapeDivWrapper
          setHandShapeSelected={setHandShapeSelected}
          iconShape={handShapeSelected}
          size={"medium"}
          gameSelected={gameSelected}
        />
        <Styles.HandShapeSubtitle>YOU PICKED</Styles.HandShapeSubtitle>
      </Styles.HandShapeSelectedDiv>
      <Styles.HandShapeSelectedDiv className="housePick">
        {loading ? (
          <Styles.HandShapeLoading />
        ) : (
          <HandShapeDivWrapper
            setHandShapeSelected={setHandShapeSelected}
            iconShape={houseHandShape}
            size={"medium"}
            gameSelected={gameSelected}
          />
        )}
        <Styles.HandShapeSubtitle>THE HOUSE PICKED</Styles.HandShapeSubtitle>
      </Styles.HandShapeSelectedDiv>
      {loading ? (
        ""
      ) : (
        <Styles.ResultDiv>
          <Styles.ResultText>{resultString}</Styles.ResultText>
          <Styles.PlayAgainButton onClick={handlePlayAgainButton}>
            PLAY AGAIN
          </Styles.PlayAgainButton>
        </Styles.ResultDiv>
      )}
    </Styles.GameElementResult>
  );
}
