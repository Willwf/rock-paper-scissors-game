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
`
