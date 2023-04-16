import styled from 'styled-components';
import triangleBg from "../../assets/images/bg-triangle.svg"
import pentagonBg from "../../assets/images/bg-pentagon.svg"

export const RPSGameElement = styled.div`
  min-width: 85%;
  height: 42.5%;

  background-image: url(${triangleBg});
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center;

  display: grid;
  grid-template-areas:
    "firstElement secondElement"
    "thirdElement thirdElement";
  justify-items: center;

  @media (min-width: 40em) {
    min-width: 50%;
    height: 60%;
  }

  @media (min-width: 65em) {
    min-width: 35%;
  }
`

export const RPSLSGameElemente = styled.div`
  min-width: 85%;
  height: 42.5%;

  background-image: url(${pentagonBg});
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center;

  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  justify-items: center;

  @media (min-width: 40em) {
    min-width: 60%;
    min-height: 70%;

    background-size: 60%;
  }

  @media (min-width: 65em) {
    min-width: 50%;
    max-height: 60%;
  }
`