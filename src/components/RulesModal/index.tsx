import * as Styles from "./styles";
import RPSrulesImg from "../../assets/images/image-rules.svg";
import RPSLSrulesImg from "../../assets/images/image-rules-bonus.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import { useState } from "react";

interface RulesModalProps {
  isDefaultGameSelected: boolean;
}

interface RulesImgOptions {
  [key: string]: {
    src: string;
    alt: string;
  };
}

const rulesImg: RulesImgOptions = {
  RPS: {
    src: RPSrulesImg,
    alt: "Image explaining the rules of the game. Scissors beats paper, paper beats rock, rock beats scissors.",
  },
  RPSLS: {
    src: RPSLSrulesImg,
    alt: "Image explaining the rules of the game. Scissors beats Paper, Paper beats Rock, Rock beats Lizard, Lizard beats Spock, Spock beats Scissors, Scissors beats Lizard, Paper beats Spock, Rock beats Scissors, Lizard beats Paper, Spock beats Rock.",
  },
};

export function RulesModal(props: RulesModalProps) {
  const { isDefaultGameSelected } = props;
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
          {isDefaultGameSelected ? (
            <Styles.RulesImg
              src={rulesImg.RPS.src}
              alt={rulesImg.RPS.alt}
            ></Styles.RulesImg>
          ) : (
            <Styles.RulesImg
              src={rulesImg.RPSLS.src}
              alt={rulesImg.RPSLS.alt}
            ></Styles.RulesImg>
          )}
          <Styles.CloseButton onClick={toggleModal}>
            <img src={closeIcon} alt="X icon to close the rules modal" />
          </Styles.CloseButton>
        </Styles.RulesInnerDiv>
      </Styles.RulesDiv>
    </>
  );
}
