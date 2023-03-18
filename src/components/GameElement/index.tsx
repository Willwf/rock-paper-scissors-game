import { useState } from "react";
import { HandShapeDivWrapper } from "../HandShapeDivWrapper";
import * as Styles from "./styles";

export function GameElement() {
  const [HandShapeSelected, setHandShapeSelected] = useState("rock");

  return HandShapeSelected ? (
    <Styles.GameElementResult>
      <Styles.HandShapeSelectedDiv className="playerPick">
        <HandShapeDivWrapper shape={HandShapeSelected} />
        <Styles.HandShapeSubtitle>YOU PICKED</Styles.HandShapeSubtitle>
      </Styles.HandShapeSelectedDiv>
      <Styles.HandShapeSelectedDiv className="housePick">
        <Styles.HandShapeLoading />
        <Styles.HandShapeSubtitle>THE HOUSE PICKED</Styles.HandShapeSubtitle>
      </Styles.HandShapeSelectedDiv>
      <Styles.ResultDiv>
        <Styles.ResultText>YOU WIN</Styles.ResultText>
        <Styles.PlayAgainButton>PLAY AGAIN</Styles.PlayAgainButton>
      </Styles.ResultDiv>
    </Styles.GameElementResult>
  ) : (
    <Styles.GameElement>
      <HandShapeDivWrapper shape="paper" />
      <HandShapeDivWrapper shape="scissors" />
      <HandShapeDivWrapper shape="rock" />
    </Styles.GameElement>
  );
}
