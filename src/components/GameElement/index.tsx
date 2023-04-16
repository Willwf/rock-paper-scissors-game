import { Dispatch, SetStateAction, useState } from "react";
import { GameElementResult } from "../GameElementResult";
import { HandShapeDivWrapper } from "../HandShapeDivWrapper";
import * as Styles from "./styles";

interface gameElementProps {
  score: string;
  setScore: Dispatch<SetStateAction<string>>;
  isDefaultGameSelected: boolean;
  handShapeSelected: string;
  setHandShapeSelected: Dispatch<SetStateAction<string>>;
}

export function GameElement(props: gameElementProps) {
  const {
    setScore,
    score,
    isDefaultGameSelected,
    handShapeSelected,
    setHandShapeSelected,
  } = props;

  return handShapeSelected ? (
    <GameElementResult
      setHandShapeSelected={setHandShapeSelected}
      handShapeSelected={handShapeSelected}
      setScore={setScore}
      score={score}
      gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
    />
  ) : isDefaultGameSelected ? (
    <Styles.RPSGameElement>
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="paper"
        size={"medium"}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="scissors"
        size={"medium"}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="rock"
        size={"medium"}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
    </Styles.RPSGameElement>
  ) : (
    <Styles.RPSLSGameElemente>
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="paper"
        size={"small"}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="scissors"
        size={"small"}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="rock"
        size={"small"}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="lizard"
        size={"small"}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="spock"
        size={"small"}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
    </Styles.RPSLSGameElemente>
  );
}
