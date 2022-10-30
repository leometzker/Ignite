import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background-color: ${props => props.theme.colors.background};
  height: 6.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.5rem;
  }
  span {
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.3;
    gap: 0.25rem;
    padding: 0.5rem;
    background-color: ${props => props.theme.colors.purple_light};
    color: ${props => props.theme.colors.purple};
    border-radius: 8px;

    svg {
      color: ${props => props.theme.colors.purple};
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .shoppingCart {
    background-color: ${props => props.theme.colors.yellow_light};
    padding: 0.5rem;
    border-radius: 8px;
    line-height: 0;
    svg {
      color: ${props => props.theme.colors.yellow_dark};
    }

    &:hover {
      background-color: ${props => props.theme.colors.purple_dark};

      svg {
        color: ${props => props.theme.colors.base_card};
      }
    }
  }
`
