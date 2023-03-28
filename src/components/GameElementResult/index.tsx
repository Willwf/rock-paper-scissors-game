import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HandShapeDivWrapper } from "../HandShapeDivWrapper";
import * as Styles from "./styles";

interface ComponentProps {
  setHandShapeSelected: Dispatch<SetStateAction<string>>;
  HandShapeSelected: string;
  setScore: Dispatch<SetStateAction<string>>;
  score: string;
}

interface handShapes {
  [key: string]: string;
}

export function GameElementResult(props: ComponentProps) {
  const { setHandShapeSelected, HandShapeSelected, setScore, score } = props;
  const [loading, setLoading] = useState(true);
  const [resultString, setResultString] = useState<string | undefined>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [HandShapeSelected]);

  function handleClick() {
    setHandShapeSelected("");
  }

  function getRandomHandShape() {
    const handShapes: handShapes = {
      "1": "paper",
      "2": "scissors",
      "3": "rock",
    };

    const randomNumber = (Math.floor(Math.random() * 3) + 1).toString();

    return handShapes[randomNumber];
  }

  const houseHandShape = getRandomHandShape();

  function getGameResult(
    HandShapeSelected: string,
    houseHandShape: string
  ): string | undefined {
    let gameResultString;

    if (HandShapeSelected === "paper" && houseHandShape === "paper")
      gameResultString = "DRAW";
    if (HandShapeSelected === "paper" && houseHandShape === "scissors")
      gameResultString = "YOU LOSE";
    if (HandShapeSelected === "paper" && houseHandShape === "rock")
      gameResultString = "YOU WIN";
    if (HandShapeSelected === "rock" && houseHandShape === "paper")
      gameResultString = "YOU LOSE";
    if (HandShapeSelected === "rock" && houseHandShape === "scissors")
      gameResultString = "YOU WIN";
    if (HandShapeSelected === "rock" && houseHandShape === "rock")
      gameResultString = "DRAW";
    if (HandShapeSelected === "scissors" && houseHandShape === "paper")
      gameResultString = "YOU WIN";
    if (HandShapeSelected === "scissors" && houseHandShape === "scissors")
      gameResultString = "DRAW";
    if (HandShapeSelected === "scissors" && houseHandShape === "rock")
      gameResultString = "YOU LOSE";

    if (gameResultString === "YOU WIN") {
      const actualScore = Number(score) + 1;
      setScore(actualScore.toString());
      localStorage.setItem("score", score);
    }

    return gameResultString;
  }

  useEffect(() => {
    const result = getGameResult(HandShapeSelected, houseHandShape);
    setResultString(result);
  }, []);

  return (
    <Styles.GameElementResult>
      <Styles.HandShapeSelectedDiv className="playerPick">
        <HandShapeDivWrapper
          setHandShapeSelected={setHandShapeSelected}
          iconShape={HandShapeSelected}
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
          />
        )}
        <Styles.HandShapeSubtitle>THE HOUSE PICKED</Styles.HandShapeSubtitle>
      </Styles.HandShapeSelectedDiv>
      {loading ? (
        ""
      ) : (
        <Styles.ResultDiv>
          <Styles.ResultText>{resultString}</Styles.ResultText>
          <Styles.PlayAgainButton onClick={handleClick}>
            PLAY AGAIN
          </Styles.PlayAgainButton>
        </Styles.ResultDiv>
      )}
    </Styles.GameElementResult>
  );
}
