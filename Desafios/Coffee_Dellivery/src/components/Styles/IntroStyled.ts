import styled from 'styled-components'

export const IntroStyled = styled.article`
  width: 100%;
  height: 34rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  background-color: ${props => props.theme.colors.background};

  .introInfo {
    min-width: 24rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    table {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      tr {
        height: 2.625rem;
        display: flex;
        align-items: center;

        td {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: nowrap;
          gap: 0.75rem;
          font-size: 1rem;
          line-height: 1.3;
          flex: 1;
        }

        td svg {
          color: ${props => props.theme.colors.white};
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 32px;
          height: 32px;
        }

        .cart {
          background-color: ${props => props.theme.colors.yellow_dark};
        }

        .pack {
          background-color: ${props => props.theme.colors.base_text};
        }

        .coffee {
          background-color: ${props => props.theme.colors.purple};
        }

        .timer {
          background-color: ${props => props.theme.colors.yellow};
        }
      }
    }
  }

  .titleIntro {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${props => props.theme.colors.base_title};
  }

  .pInfo {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.base_subtitle};
    margin-top: 1rem;
    margin-bottom: 4.125rem;
  }

  .introImage {
    img {
      width: 29rem;
    }
  }
`
