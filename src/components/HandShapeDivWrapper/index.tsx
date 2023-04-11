import * as Styles from "./styles";

import PaperImg from "../../assets/images/icon-paper.svg";
import ScissorsImg from "../../assets/images/icon-scissors.svg";
import RockImg from "../../assets/images/icon-rock.svg";
import { Dispatch, SetStateAction } from "react";

interface ShapeOptions {
  [key: string]: {
    src: string;
    alt: string;
  };
}

interface ComponentProps {
  setHandShapeSelected: Dispatch<SetStateAction<string>>;
  iconShape: string;
  isLarge: boolean;
}

const shapeProperties: ShapeOptions = {
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

export function HandShapeDivWrapper(props: ComponentProps) {
  const { setHandShapeSelected, iconShape, isLarge } = props;

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const iconshape = event.currentTarget.dataset.iconshape;
    setHandShapeSelected(iconshape ? iconshape : "");
  }

  return (
    <Styles.HandShapeDivWrapper
      onClick={handleClick}
      data-iconshape={iconShape}
      className={iconShape}
      isLarge={isLarge}
    >
      <Styles.HandShapeDiv isLarge={isLarge}>
        <Styles.HandShapeImg
          src={shapeProperties[iconShape].src}
          alt={shapeProperties[iconShape].alt}
        />
      </Styles.HandShapeDiv>
    </Styles.HandShapeDivWrapper>
  );
}
