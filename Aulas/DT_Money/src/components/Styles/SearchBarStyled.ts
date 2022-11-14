import styled from 'styled-components'

export const SearchBarStyled = styled.div`
  margin-top: 4rem;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    input {
      display: flex;
      padding: 1rem;
      flex: 1;

      border-radius: 6px;
      border: 0;

      font-size: 1rem;
      line-height: 1.4;
      background-color: ${props => props.theme.color['gray-800']};
      color: ${props => props.theme.color['gray-300']};
    }

    button {
      width: 9.19rem;
      height: 3.375rem;
      font-weight: 700;
      color: ${props => props.theme.color['green-500']};
      background-color: ${props => props.theme.color['gray-600']};

      &:hover {
        color: ${props => props.theme.color.white};
        background-color: ${props => props.theme.color['green-500']};
      }
    }
  }
`
