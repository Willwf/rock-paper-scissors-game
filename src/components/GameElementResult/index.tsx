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
  const [resultString, setResultString] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [HandShapeSelected]);

  function handlePlayAgainButton() {
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
  ): string {
    if (HandShapeSelected === houseHandShape) {
      return "DRAW";
    } else if (
      (HandShapeSelected === "rock" && houseHandShape === "scissors") ||
      (HandShapeSelected === "scissors" && houseHandShape === "paper") ||
      (HandShapeSelected === "paper" && houseHandShape === "rock")
    ) {
      const actualScore = Number(score) + 1;
      setScore(actualScore.toString());
      localStorage.setItem("score", actualScore.toString());
      return "YOU WIN";
    } else {
      return "YOU LOSE";
    }
  }

  useEffect(() => {
    const result = getGameResult(HandShapeSelected, houseHandShape);
    setResultString(result);
  }, [HandShapeSelected]);

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
          <Styles.PlayAgainButton onClick={handlePlayAgainButton}>
            PLAY AGAIN
          </Styles.PlayAgainButton>
        </Styles.ResultDiv>
      )}
    </Styles.GameElementResult>
  );
}
