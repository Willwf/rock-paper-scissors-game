import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HandShapeDivWrapper } from "../HandShapeDivWrapper";
import * as Styles from "./styles";

interface ComponentProps {
  setHandShapeSelected: Dispatch<SetStateAction<string>>;
  HandShapeSelected: string;
}

interface handShapes {
  [key: string]: string;
}

export function GameElementResult(props: ComponentProps) {
  const { setHandShapeSelected, HandShapeSelected } = props;
  const [loading, setLoading] = useState(true);

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
            iconShape={getRandomHandShape()}
          />
        )}
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
