import styled from 'styled-components';
import * as colors from "../../styles/variables"

export const HandShapeDivWrapper = styled.div`
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
    grid-area: handPaper;
    justify-self: start;

    background: linear-gradient(${colors.paperGradientFinal}, ${colors.paperGradientInitial});
  }

  &.scissors {
    grid-area: handScissors;
    justify-self: end;
    
    background: linear-gradient(${colors.scissorsGradientFinal}, ${colors.scissorsGradientInitial});
  }

  &.rock {
    grid-area: handRock;
    
    background: linear-gradient(${colors.rockGradientFinal}, ${colors.rockGradientInitial});
  }
`

export const HandShapeDiv = styled.div`
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
`
export const HandShapeImg = styled.img`
  width: 40%;
`