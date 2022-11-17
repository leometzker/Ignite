import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  color: ${props => props.theme.color['gray-300']};
  background-color: ${props => props.theme.color['gray-700']}
}


button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  
  background-color: ${props => props.theme.color['green-500']};
  color: ${props => props.theme.color.white};
  padding: 0.875rem;
  
  border: solid 1px ${props => props.theme.color['green-500']};
  border-radius: 8px;
  
  font-family: 'Roboto', sans-serif;
  font-weight: 700;  
  
  cursor: pointer;
  
  &:not(:disabled):hover{
    color: ${props => props.theme.color['gray-100']};
    background-color: ${props => props.theme.color['green-700']};
    
  }
}

`
