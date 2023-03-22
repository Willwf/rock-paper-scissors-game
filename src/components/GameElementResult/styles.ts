import styled from 'styled-components';
import * as colors from "../../styles/variables"

export const GameElementResult = styled.div`
  min-width: 85%;
  height: 42.5%;

  display: flex;
  justify-content: space-between;

  display: grid;
  grid-template-areas:
    "firstElement secondElement"
    "thirdElement thirdElement";
  justify-items: center;
`

export const HandShapeSelectedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &.playerPick {
    grid-area: firstElement;
    justify-self: start;
  }

  &.housePick {
    grid-area: secondElement;
    justify-self: end;
  }
`

export const HandShapeSubtitle = styled.p`
font-family: 'Barlow Semi Condensed', sans-serif;
font-size: 1.5rem;
color: white;
letter-spacing: .2rem;

margin-top: 2rem;
`

export const HandShapeLoading = styled.div`
  width: 13rem;
  height: 13rem;

  background-color: #0000001f;
  border-radius: 50%;
`

export const ResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  grid-area: thirdElement;
  padding-top: 6rem;
  width: 25rem;
`

export const ResultText = styled.p`
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 4.7rem;
  font-weight: bold;
  color: white;
  letter-spacing: .2rem;
`

export const PlayAgainButton = styled.button`
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1.6rem;
  color: ${colors.darkText};
  letter-spacing: .2rem;
  
  background: white;
  border: .3rem solid ${colors.headerOutline};
  border-radius: 1rem;
  padding: 1.3rem 5rem;
  margin-top: 1.5rem;

  cursor: pointer;

  &:hover {
    background: transparent;
    color: white;
  }

  &:active {
    background: #ffffff91;
  }
`