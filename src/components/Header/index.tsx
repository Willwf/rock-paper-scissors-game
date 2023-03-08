import * as Styles from "./styles";
import logo from "../../assets/images/logo.svg";

export function Header() {
  return (
    <Styles.Header>
      <Styles.Logo src={logo} alt="Logo written Rock, Paper, Scissors" />
      <Styles.ScoreDiv>
        <Styles.ScoreText>SCORE</Styles.ScoreText>
        <Styles.ScoreNumber>12</Styles.ScoreNumber>
      </Styles.ScoreDiv>
    </Styles.Header>
  );
}
