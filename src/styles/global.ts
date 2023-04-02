import { createGlobalStyle } from "styled-components"
import * as colors from "../styles/variables"

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif; 
  }
  
	#root {
    margin: 0 auto;
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position: relative;

    @media (min-width: 40em) {
      justify-content: space-evenly;
    }

  }

  body {
    background: linear-gradient(${colors.backgroundGradientInitial}, ${colors.backgroundGradientFinal})
  }
`