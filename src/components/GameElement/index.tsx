import { Dispatch, SetStateAction, useState } from "react";
import { GameElementResult } from "../GameElementResult";
import { HandShapeDivWrapper } from "../HandShapeDivWrapper";
import * as Styles from "./styles";

interface gameElementProps {
  score: string;
  setScore: Dispatch<SetStateAction<string>>;
}

export function GameElement(props: gameElementProps) {
  const { setScore, score } = props;
  const [HandShapeSelected, setHandShapeSelected] = useState<string>("");

  return HandShapeSelected ? (
    <GameElementResult
      setHandShapeSelected={setHandShapeSelected}
      HandShapeSelected={HandShapeSelected}
      setScore={setScore}
      score={score}
    />
  ) : (
    <Styles.GameElement>
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="paper"
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="scissors"
      />
      <HandShapeDivWrapper
        setHandShapeSelected={setHandShapeSelected}
        iconShape="rock"
      />
    </Styles.GameElement>
  );
}
