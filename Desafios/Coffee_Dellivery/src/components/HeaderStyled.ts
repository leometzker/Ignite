import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background-color: ${props => props.theme.colors.background};
  height: 6.5rem;
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;

  img {
    height: 2.5rem;
  }
  span {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    gap: 0.25rem;
    padding: 0.5rem;
    background-color: ${props => props.theme.colors.purple_light};
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

  button {
    background-color: ${props => props.theme.colors.yellow_light};
    padding: 0.5rem;
    border-radius: 8px;
    line-height: 0;
    svg {
      color: ${props => props.theme.colors.yellow_dark};
    }
  }
`
