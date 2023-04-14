import styled from 'styled-components';
import * as colors from "../../styles/variables"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;
  padding: 1rem 1rem 1rem 2rem;
  border: .3rem solid ${colors.headerOutline};
  border-radius: .5rem;
  min-height: 10vh;
  min-width: 85%;

  @media (min-width: 40em) {
    margin-top: 0;
    border-radius: 1rem;
    min-height: 15vh;
    min-width: 60%;
  }

  @media (min-width: 65em) {
    padding: 1.5rem;
  }
`

export const GameSelectorDiv = styled.div`
  position: relative;
`

export const GameLogoDiv = styled.div`
  display: flex;
  gap: 1rem;
  
  border-radius: .5rem;
  padding: .5rem;

  svg {
    width: 1rem;
    color: white;
  }

  &.secondOption {
    position: absolute;

    background-color: #8087a6ad;
    width: 100%;
  }

  &.secondOption.hidden {
    display: none;
  }

  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
`

export const Logo = styled.img`
  max-width: 25vw;
  max-height: 20vw;
  height: fit-content;

  @media (min-width: 40em) {
    max-width: 100%;
    max-height: 10vw;
  }
`
export const ScoreDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 22vw;
  height: 20vw;
  background: white;
  border-radius: .5rem;

  @media (min-width: 40em) {
    width: 12vw;
    height: 10vw;
  }
`
export const ScoreText = styled.p`
  font-size: 1.2rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  color: ${colors.scoreText};

  @media (min-width: 65em) {
    font-size: 1.6rem;
    letter-spacing: .2rem;
  }
`

export const ScoreNumber = styled.p`
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Barlow Semi Condensed', sans-serif;
  color: ${colors.darkText};

  @media (min-width: 65em) {
    font-size: 6rem;
    line-height: 6rem;
  }
`