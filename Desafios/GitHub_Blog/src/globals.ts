import { createGlobalStyle } from 'styled-components'

export const Globals = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
    color: ${props => props.theme.colors.blue};
  }
  
  body {

    
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
  } 




`
