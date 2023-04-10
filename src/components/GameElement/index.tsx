import { Dispatch, SetStateAction, useState } from "react";
import { GameElementResult } from "../GameElementResult";
import { HandShapeDivWrapper } from "../HandShapeDivWrapper";
import * as Styles from "./styles";

interface gameElementProps {
  score: string;
  setScore: Dispatch<SetStateAction<string>>;
  isDefaultGameSelected: boolean;
}

export function GameElement(props: gameElementProps) {
  const { setScore, score, isDefaultGameSelected } = props;
  const [HandShapeSelected, setHandShapeSelected] = useState<string>("");

  return HandShapeSelected ? (
    <GameElementResult
      setHandShapeSelected={setHandShapeSelected}
      HandShapeSelected={HandShapeSelected}
      setScore={setScore}
      score={score}
    />
  ) : isDefaultGameSelected ? (
    <Styles.RPSGameElement>
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="paper"
        isLarge={false}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="scissors"
        isLarge={false}
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="rock"
        isLarge={false}
      />
    </Styles.RPSGameElement>
  ) : (
    <Styles.RPSLSGameElemente>"That's all folks!!!"</Styles.RPSLSGameElemente>
  );
}
