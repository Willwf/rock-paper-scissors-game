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
    />
  ) : isDefaultGameSelected ? (
    <Styles.RPSGameElement>
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="paper"
        isLarge={false}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="scissors"
        isLarge={false}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="rock"
        isLarge={false}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
    </Styles.RPSGameElement>
  ) : (
    <Styles.RPSLSGameElemente>
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="paper"
        isLarge={false}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="scissors"
        isLarge={false}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="rock"
        isLarge={false}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="lizard"
        isLarge={false}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="spock"
        isLarge={false}
        gameSelected={isDefaultGameSelected ? "RPS" : "RPSLS"}
      />
    </Styles.RPSLSGameElemente>
  );
}
