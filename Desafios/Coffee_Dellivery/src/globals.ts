import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto',  serif;
    font-size: 1rem;
    font-weight: 400;

    background-color:  ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.base_text};
  }

  svg {
    color: ${props => props.theme.colors.purple};
  }

  button {
    border: 0;
     
  }

  @media screen {
    
  }


  /* font-family: 'Baloo 2', cursive; */
`
