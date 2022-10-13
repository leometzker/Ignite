import { ThemeProvider } from 'styled-components'

import { ButtonContainer } from './Button.style'

import { defaultTheme } from './../styles/themes/default';
import { GlobalStyle } from './../styles/global';


export function Button (){
return(
  <ThemeProvider theme={defaultTheme} >
    
    <ButtonContainer>Enviar</ButtonContainer>
    {/* <GlobalStyle /> */}
  </ThemeProvider>
)
}