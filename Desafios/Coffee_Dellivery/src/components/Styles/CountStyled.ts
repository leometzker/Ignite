import styled from 'styled-components'

export const CountStyled = styled.div`
  .count {
    background-color: ${props => props.theme.colors.base_button};
    border-radius: 8px;
    height: 2rem;
    width: 4.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    #visor {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;
      caret-color: transparent;
    }

    .inc_dec {
      cursor: pointer;
      margin: 0 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      color: ${props => props.theme.colors.purple_dark};

      &:hover {
        color: ${props => props.theme.colors.purple};
      }
    }
  }
`
