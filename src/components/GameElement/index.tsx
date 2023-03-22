import { useState } from "react";
import { GameElementResult } from "../GameElementResult";
import { HandShapeDivWrapper } from "../HandShapeDivWrapper";
import * as Styles from "./styles";

export function GameElement() {
  const [HandShapeSelected, setHandShapeSelected] = useState<string>("");

  return HandShapeSelected ? (
    <GameElementResult
      setHandShapeSelected={setHandShapeSelected}
      HandShapeSelected={HandShapeSelected}
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
