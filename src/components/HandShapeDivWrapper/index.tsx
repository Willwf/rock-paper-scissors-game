import * as Styles from "./styles";

import PaperImg from "../../assets/images/icon-paper.svg";
import ScissorsImg from "../../assets/images/icon-scissors.svg";
import RockImg from "../../assets/images/icon-rock.svg";

interface shapeOptions {
  [key: string]: {
    src: string;
    alt: string;
  };
}

export function HandShapeDivWrapper({ shape }: { shape: string }) {
  const shapeProperties: shapeOptions = {
    paper: {
      src: PaperImg,
      alt: "Shape of an open hand symbolizing paper",
    },
    scissors: {
      src: ScissorsImg,
      alt: "Shape of a hand with two fingers raised symbolizing scissors",
    },
    rock: {
      src: RockImg,
      alt: "Shape of a closed hand symbolizing rock",
    },
  };

  return (
    <Styles.HandShapeDivWrapper className={shape}>
      <Styles.HandShapeDiv>
        <Styles.HandShapeImg
          src={shapeProperties[shape].src}
          alt={shapeProperties[shape].alt}
        />
      </Styles.HandShapeDiv>
    </Styles.HandShapeDivWrapper>
  );
}
