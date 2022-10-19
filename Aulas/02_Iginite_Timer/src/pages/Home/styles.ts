
import styled from 'styled-components';


export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }
`

const BaseInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${props => props.theme['gray-500']};
  /* height: 2.5rem; */
  font-weight: bold;
  font-size: 1rem;
  padding: 0 0.5rem;
  color: ${props => props.theme['gray-100']};
  
  &:focus{
    box-shadow: none;
    border-color: ${props => props.theme['green-500']};
  }

  &::placeholder {
    color: ${props => props.theme['gray-500']};
  }

`
export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  
  color: ${props => props.theme['gray-100']};
  font-size: 1rem;

  /* font-weight: bold; */
`

export const CountContainer = styled.div`
  font-family: 'Roboto-mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme['gray-100']};
  gap: 1rem;
  display: flex;

  span {
    background-color: ${props => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme['green-500']};
  width: 4rem;

  overflow: hidden;

  display: flex;
  justify-content: center;
`

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  gap: 8px;
  width: 100%;
  height: 3rem;
  color: ${props => props.theme['gray-100']};
  
  cursor: pointer; 

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  `

export const CountdownButton = styled(BaseButton)`
  background-color: ${props => props.theme['green-500']};
  
  &:not(:disabled):hover {
    background-color: ${props => props.theme['green-700']};
  }
`

export const StopButton = styled(BaseButton)`
  background-color: ${props => props.theme['red-500']};
  
  &:hover {
    background-color: ${props => props.theme['red-700']};
  }
`