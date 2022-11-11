import styled from 'styled-components'

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  .nav {
    width: 100%;
    margin: 0 auto;
    padding: 0 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 6.5rem;
    max-width: 90rem;

    width: 100vw;
    background-color: ${props => props.theme.colors.background};
  }

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

  .iconCart {
    position: relative;
  }

  .amountIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -17px;
    top: -17px;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.3;

    color: ${props => props.theme.colors.base_card};
    background-color: ${props => props.theme.colors.yellow_dark};
  }
  .amountIcon:empty {
    display: none;
  }
`
