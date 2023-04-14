import styled from 'styled-components';
import * as colors from "../../styles/variables"

interface HandShapeDivWrapperProps {
  size: "small" | "medium" | "large";
}

const remSizes = {
  small: 9.5,
  medium: 13,
  large: 18.5,
}

export const HandShapeDivWrapper = styled.div<HandShapeDivWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => remSizes[props.size]}rem;
  height: ${props => remSizes[props.size]}rem;

  border-radius: 50%;
  border-bottom: 0.5rem solid #00000040;

  &:hover {
    cursor: pointer;
  }

  &.paper {
    grid-area: firstElement;

    background: linear-gradient(${colors.paperGradientFinal}, ${colors.paperGradientInitial});

    &.RPS {
      justify-self: start;
    }

    &.RPSLS {
      grid-column: 6 / 9;
      grid-row: 1 / 8;
    }
  }

  &.scissors {
    grid-area: secondElement;
    
    background: linear-gradient(${colors.scissorsGradientFinal}, ${colors.scissorsGradientInitial});

    &.RPS {
      justify-self: end;
    }
    
    &.RPSLS {
      grid-column: 1 / 9;
      grid-row: 1 / 3;
    }
  }

  &.rock {
    grid-area: thirdElement;
    
    background: linear-gradient(${colors.rockGradientFinal}, ${colors.rockGradientInitial});
    
    &.RPSLS {
      grid-column: 4 / 9;
      grid-row: 6 / 9;
    }
  }

  &.lizard {
    grid-area: fourthElement;
    
    background: linear-gradient(${colors.lizardGradientFinal}, ${colors.lizardGradientInitial});
    
    &.RPSLS {
      grid-column: 1 / 6;
      grid-row: 6 / 9;
    }
  }

  &.spock {
    grid-area: fifthElement;
    
    background: linear-gradient(${colors.cyanGradientFinal}, ${colors.cyanGradientInitial});
    
    &.RPSLS {
      grid-column: 1 / 4;
      grid-row: 1 / 8;
    }
  }

  @media (min-width: 40em) {
    width: ${remSizes["medium"]}rem;
    height: ${remSizes["medium"]}rem;

    border-bottom: 0.8rem solid #00000040;
  }

  @media (min-width: 65em) {
    width: ${props => remSizes[props.size] + 3.5}rem;
    height: ${props => remSizes[props.size] + 3.5}rem;
  }
`

export const HandShapeDiv = styled.div<HandShapeDivWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => remSizes[props.size] - 3}rem;
  height: ${props => remSizes[props.size] - 3}rem;

  background-color: white;
  border-radius: 50%;
  border-top: 0.5rem solid #00000029;

  &:hover {
    background-color: #c8c8c8;
  }

  @media (min-width: 40em) {
    width: ${remSizes["medium"] - 3}rem;
    height: ${remSizes["medium"] - 3}rem;

    border-top: .8rem solid #00000029;
  }

  @media (min-width: 65em) {
    width: ${props => remSizes[props.size] - 1}rem;
    height: ${props => remSizes[props.size] - 1}rem;
  }
`
export const HandShapeImg = styled.img`
  width: 40%;

  @media (min-width: 40em) {
    width: 45%;
  }
`