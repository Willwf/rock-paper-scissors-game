import * as Styles from "./styles";
import RPSlogo from "../../assets/images/logo.svg";
import RPSLSlogo from "../../assets/images/logo-bonus.svg";
import { Dispatch, SetStateAction, useState } from "react";

interface HeaderProps {
  score: string;
  isDefaultGameSelected: boolean;
  setIsDefaultGameSelected: Dispatch<SetStateAction<boolean>>;
}

export function Header(props: HeaderProps) {
  const { score, isDefaultGameSelected, setIsDefaultGameSelected } = props;

  const [openGameOptions, setOpenGameOptions] = useState(false);

  function toggleOptions() {
    setOpenGameOptions(!openGameOptions);
  }

  return (
    <Styles.Header>
      <Styles.GameSelectorDiv onClick={toggleOptions}>
        <Styles.GameLogoDiv>
          <Styles.Logo
            src={isDefaultGameSelected ? RPSlogo : RPSLSlogo}
            alt="Logo written Rock, Paper, Scissors"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Chevron Down</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M112 184l144 144 144-144"
            />
          </svg>
        </Styles.GameLogoDiv>
        <Styles.GameLogoDiv
          className={`secondOption ${openGameOptions ? "" : "hidden"}`}
        >
          <Styles.Logo
            src={isDefaultGameSelected ? RPSLSlogo : RPSlogo}
            alt="Logo written Rock, Paper, Scissors"
          />
        </Styles.GameLogoDiv>
      </Styles.GameSelectorDiv>
      <Styles.ScoreDiv>
        <Styles.ScoreText>SCORE</Styles.ScoreText>
        <Styles.ScoreNumber>{score}</Styles.ScoreNumber>
      </Styles.ScoreDiv>
    </Styles.Header>
  );
}
