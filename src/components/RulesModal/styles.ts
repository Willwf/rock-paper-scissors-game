import styled from 'styled-components';
import * as colors from "../../styles/variables"

export const RulesButton = styled.button`
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1.6rem;
  color: white;
  letter-spacing: .2rem;
  
  background: transparent;
  border: .3rem solid ${colors.headerOutline};
  border-radius: 1rem;
  padding: 1rem 4rem;
  margin-bottom: 4rem;

  cursor: pointer;

  &:hover {
    background: white;
    color: ${colors.darkText}
  }

  &:active {
    background: #ffffff91;
  }

  @media (min-width: 40em) {
    font-size: 1.3rem;

    padding: 0.8rem 3rem;
    margin-bottom: 0;

    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
`

export const RulesDiv = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background: white;

  position: absolute;

  &.hidden {
    display: none;
  }

  @media (min-width: 40em) {
    align-items: center;

    background: #00000070;
  }
`

export const RulesInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;


  @media (min-width: 40em) {
    background: white;
    
    width: 40vw;
    height: 40vw;
    border-radius: .5rem;

    display: grid;
    justify-items: center;
    grid-template:
      "rulesTitle closeButton" 1fr
      "rulesImage rulesImage" 5fr
      / 1fr 1fr
  }

  @media (min-width: 65em) {
    width: 30vw;
    height: 30vw;
  }
`

export const RulesTitle = styled.h1`
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 3rem;

  @media (min-width: 40em) {
    grid-area: rulesTitle;
    margin-left: 2rem;
    justify-self: start;
    align-self: end;

    font-size: 2.5rem;
  }

  @media (min-width: 65em) {
    font-size: 3rem;
  }
`

export const RulesImg = styled.img`
  width: 80%;

  @media (min-width: 40em) {
    width: 80%;
    
    grid-area: rulesImage;
  }
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  &:active {
    opacity: 75%;
  }

  @media (min-width: 40em) {
    grid-area: closeButton;
    margin-right: 2rem;
    justify-self: end;
    align-self: end;

    & img {
      width: 1.5rem;
    }
  }

  @media (min-width: 65em) {
    & img {
      width: 2rem;
    }
  }
`