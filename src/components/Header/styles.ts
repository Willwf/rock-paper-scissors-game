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
`
export const Logo = styled.img`
  width: 25vw;
  height: fit-content;
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
`
export const ScoreText = styled.p`
  font-size: 1.2rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  color: ${colors.scoreText}
`

export const ScoreNumber = styled.p`
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Barlow Semi Condensed', sans-serif;
  color: ${colors.darkText}

`