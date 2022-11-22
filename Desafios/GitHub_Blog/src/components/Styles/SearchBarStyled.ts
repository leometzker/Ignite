import styled from 'styled-components'

export const SearchBarStyled = styled.form`
  margin-top: 0.75rem;

  input {
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.label};

    width: 100%;
    padding: 0.5rem 1rem;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;

    color: ${props => props.theme.colors.label};
    background-color: ${props => props.theme.colors.input};

    &:focus {
      color: ${props => props.theme.colors.text};
      background-color: ${props => props.theme.colors.input};
      border: 1px solid ${props => props.theme.colors.blue};
    }
  }
`
