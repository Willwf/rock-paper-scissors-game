import { Dispatch, SetStateAction, useState } from "react";
import { HandShapeDivWrapper } from "../HandShapeDivWrapper";
import * as Styles from "./styles";

interface ComponentProps {
  setHandShapeSelected: Dispatch<SetStateAction<string>>;
  HandShapeSelected: string;
}

export function GameElementResult(props: ComponentProps) {
  const { setHandShapeSelected, HandShapeSelected } = props;

  function handleClick() {
    setHandShapeSelected("");
  }

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
        <Styles.HandShapeLoading />
        <Styles.HandShapeSubtitle>THE HOUSE PICKED</Styles.HandShapeSubtitle>
      </Styles.HandShapeSelectedDiv>
      <Styles.ResultDiv>
        <Styles.ResultText>YOU WIN</Styles.ResultText>
        <Styles.PlayAgainButton onClick={handleClick}>
          PLAY AGAIN
        </Styles.PlayAgainButton>
      </Styles.ResultDiv>
    </Styles.GameElementResult>
  );
}
