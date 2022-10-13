import styled from "styled-components";


export const ButtonContainer = styled.button`
  width:  100px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  margin: 15px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
`