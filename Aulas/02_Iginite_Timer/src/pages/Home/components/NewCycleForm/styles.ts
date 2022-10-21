import styled from 'styled-components'

const BaseInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${props => props.theme['gray-500']};
  /* height: 2.5rem; */
  font-weight: bold;
  font-size: 1rem;
  padding: 0 0.5rem;
  color: ${props => props.theme['gray-100']};

  &:focus {
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
