import { HandShapeDivWrapper } from "../HandShapeDivWrapper";
import * as Styles from "./styles";

export function GameElement() {
  return (
    <Styles.GameElement>
      <HandShapeDivWrapper shape="paper" />
      <HandShapeDivWrapper shape="scissors" />
      <HandShapeDivWrapper shape="rock" />
    </Styles.GameElement>
  );
}
