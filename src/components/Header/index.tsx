import * as Styles from "./styles";
import logo from "../../assets/images/logo.svg";
import { Dispatch, SetStateAction, useEffect } from "react";

interface HeaderProps {
  score: string;
}

export function Header(props: HeaderProps) {
  const { score } = props;

  return (
    <Styles.Header>
      <Styles.Logo src={logo} alt="Logo written Rock, Paper, Scissors" />
      <Styles.ScoreDiv>
        <Styles.ScoreText>SCORE</Styles.ScoreText>
        <Styles.ScoreNumber>{score}</Styles.ScoreNumber>
      </Styles.ScoreDiv>
    </Styles.Header>
  );
}
