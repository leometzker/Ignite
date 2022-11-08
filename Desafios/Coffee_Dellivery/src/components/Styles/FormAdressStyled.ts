import styled from 'styled-components'

export const FormAddressStyled = styled.form`
  width: 100%;
  margin-top: 2rem;
  gap: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
  input {
    width: 100%;
    height: 2.625rem;
    padding: 0.75rem;
    background-color: ${props => props.theme.colors.base_iput};

    outline: 0;
    border: none;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-size: 0.875rem;
    color: ${props => props.theme.colors.base_label};
    border-radius: 4px;

    &:focus {
      outline: solid 1px ${props => props.theme.colors.yellow_dark};
    }

    &:nth-child(1) {
      width: 12.5rem;
    }
  }

  .Numero {
    width: 12.5rem;
  }

  .Cidade {
    width: 17.25rem;
  }

  .UF {
    width: 3.75rem;
  }
`
