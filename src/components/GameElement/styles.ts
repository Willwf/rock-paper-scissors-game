import styled from 'styled-components';
import triangleBg from "../../assets/images/bg-triangle.svg"

export const GameElement = styled.div`
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
