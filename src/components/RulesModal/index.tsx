import * as Styles from "./styles";
import rulesImg from "../../assets/images/image-rules.svg";
import closeIcon from "../../assets/images/icon-close.svg";

export function RulesModal() {
  return (
    <>
      <Styles.RulesButton>RULES</Styles.RulesButton>
      <Styles.RulesDiv>
        <Styles.RulesTitle>RULES</Styles.RulesTitle>
        <Styles.RulesImg
          src={rulesImg}
          alt="Image explaining the rules of the game. Scissors beats paper, paper beats rock, rock beats scissors."
        ></Styles.RulesImg>
        <Styles.CloseButton>
          <img src={closeIcon} alt="X icon to close the rules modal" />
        </Styles.CloseButton>
      </Styles.RulesDiv>
    </>
  );
}
