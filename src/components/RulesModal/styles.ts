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
  margin-bottom: 6rem;

  cursor: pointer;

  &:hover {
    background: #ffffff30;
  }

  &:active {
    background: #ffffff91;
  }
`
export const RulesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100vw;
  height: 100vh;
  background: white;

  position: absolute;

  &.hidden {
    display: none;
  }
`
export const RulesTitle = styled.h1`
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 3rem;
`
export const RulesImg = styled.img`
  width: 80%;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  &:active {
    opacity: 75%;
  }
`