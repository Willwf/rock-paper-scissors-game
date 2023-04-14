import * as Styles from "./styles";

import PaperImg from "../../assets/images/icon-paper.svg";
import ScissorsImg from "../../assets/images/icon-scissors.svg";
import RockImg from "../../assets/images/icon-rock.svg";
import LizardImg from "../../assets/images/icon-lizard.svg";
import SpockImg from "../../assets/images/icon-spock.svg";
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
  size: "small" | "medium" | "large";
  gameSelected: string;
}

const shapeProperties: ShapeOptions = {
  paper: {
    src: PaperImg,
    alt: "Shape of an open hand symbolizing paper",
  },
  scissors: {
    src: ScissorsImg,
    alt: "Shape of a closed fist with the middle and index fingers extended symbolizing scissors",
  },
  rock: {
    src: RockImg,
    alt: "Shape of a closed fist symbolizing rock",
  },
  lizard: {
    src: LizardImg,
    alt: "Shape of the animal lizard symbolizing lizard",
  },
  spock: {
    src: SpockImg,
    alt: "Shape of a hand with the thumb extended, while the fingers are parted between the middle and ring finger. It's the vulcan salute from Star Trek symbolizing spock.",
  },
};

export function HandShapeDivWrapper(props: ComponentProps) {
  const { setHandShapeSelected, iconShape, size, gameSelected } = props;

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const iconshape = event.currentTarget.dataset.iconshape;
    setHandShapeSelected(iconshape ? iconshape : "");
  }

  return (
    <Styles.HandShapeDivWrapper
      onClick={handleClick}
      data-iconshape={iconShape}
      className={`${iconShape} ${gameSelected}`}
      size={size}
    >
      <Styles.HandShapeDiv className={gameSelected} size={size}>
        <Styles.HandShapeImg
          src={shapeProperties[iconShape].src}
          alt={shapeProperties[iconShape].alt}
        />
      </Styles.HandShapeDiv>
    </Styles.HandShapeDivWrapper>
  );
}
