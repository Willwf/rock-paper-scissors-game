import styled from 'styled-components';
import * as colors from "../../styles/variables"

interface HandShapeDivWrapperProps {
  isLarge: boolean;
}

export const HandShapeDivWrapper = styled.div<HandShapeDivWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 13rem;
  height: 13rem;

  border-radius: 50%;
  border-bottom: 0.5rem solid #00000040;

  &:hover {
    cursor: pointer;
  }

  &.paper {
    grid-area: firstElement;
    justify-self: start;

    background: linear-gradient(${colors.paperGradientFinal}, ${colors.paperGradientInitial});
  }

  &.scissors {
    grid-area: secondElement;
    justify-self: end;
    
    background: linear-gradient(${colors.scissorsGradientFinal}, ${colors.scissorsGradientInitial});
  }

  &.rock {
    grid-area: thirdElement;
    
    background: linear-gradient(${colors.rockGradientFinal}, ${colors.rockGradientInitial});
  }

  @media (min-width: 40em) {
    width: ${(props) => (props.isLarge ? "20rem" : "16rem")};
    height: ${(props) => (props.isLarge ? "20rem" : "16rem")};

    border-bottom: 0.8rem solid #00000040;
  }

  @media (min-width: 65em) {
    width: ${(props) => (props.isLarge ? "22rem" : "16rem")};
    height: ${(props) => (props.isLarge ? "22rem" : "16rem")};
  }
`

export const HandShapeDiv = styled.div<HandShapeDivWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 10rem;

  background-color: white;
  border-radius: 50%;
  border-top: 0.5rem solid #00000029;

  
  &:hover {
    background-color: #c8c8c8;
  }

  @media (min-width: 40em) {
    width: ${(props) => (props.isLarge ? "14rem" : "12rem")};
    height: ${(props) => (props.isLarge ? "14rem" : "12rem")};

    border-top: .8rem solid #00000029;
  }

  @media (min-width: 65em) {
    width: ${(props) => (props.isLarge ? "16rem" : "12rem")};
    height: ${(props) => (props.isLarge ? "16rem" : "12rem")};
  }
`
export const HandShapeImg = styled.img`
  width: 40%;

  @media (min-width: 40em) {
    width: 45%;
  }
`