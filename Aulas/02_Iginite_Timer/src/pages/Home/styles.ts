import styled from 'styled-components'

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
