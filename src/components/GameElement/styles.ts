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
    "handPaper handScissors"
    "handRock handRock";
  justify-items: center;
`

export const GameElementResult = styled.div`
  min-width: 85%;
  height: 42.5%;

  display: flex;
  justify-content: space-between;
`

export const HandShapeSelectedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HandShapeLoading = styled.div`
  width: 13rem;
  height: 13rem;

  background-color: #0000001f;
  border-radius: 50%;
`


export const HandShapeSubtitle = styled.p`
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1.5rem;
  color: white;
  letter-spacing: .2rem;

  margin-top: 2rem;
`