import * as Styles from "./styles";

import PaperImg from "../../assets/images/icon-paper.svg";
import ScissorsImg from "../../assets/images/icon-scissors.svg";
import RockImg from "../../assets/images/icon-rock.svg";

export function GameElement() {
  return (
    <Styles.GameElement>
      <Styles.HandShapeDiv>
        <Styles.HandShapeImg
          src={PaperImg}
          alt={"Shape of an open hand symbolizing paper"}
        />
      </Styles.HandShapeDiv>
      <Styles.HandShapeDiv>
        <Styles.HandShapeImg
          src={ScissorsImg}
          alt={"Shape of a hand with two fingers raised symbolizing scissors"}
        />
      </Styles.HandShapeDiv>
      <Styles.HandShapeDiv>
        <Styles.HandShapeImg
          src={RockImg}
          alt={"Shape of a closed hand symbolizing rock"}
        />
      </Styles.HandShapeDiv>
    </Styles.GameElement>
  );
}
