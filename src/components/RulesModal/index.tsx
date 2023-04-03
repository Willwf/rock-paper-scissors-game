import * as Styles from "./styles";
import rulesImg from "../../assets/images/image-rules.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import { useState } from "react";

export function RulesModal() {
  const [hidden, setHidden] = useState(true);

  function toggleModal() {
    setHidden(!hidden);
  }

  return (
    <>
      <Styles.RulesButton onClick={toggleModal}>RULES</Styles.RulesButton>
      <Styles.RulesDiv className={hidden ? "hidden" : ""}>
        <Styles.RulesInnerDiv>
          <Styles.RulesTitle>RULES</Styles.RulesTitle>
          <Styles.RulesImg
            src={rulesImg}
            alt="Image explaining the rules of the game. Scissors beats paper, paper beats rock, rock beats scissors."
          ></Styles.RulesImg>
          <Styles.CloseButton onClick={toggleModal}>
            <img src={closeIcon} alt="X icon to close the rules modal" />
          </Styles.CloseButton>
        </Styles.RulesInnerDiv>
      </Styles.RulesDiv>
    </>
  );
}
