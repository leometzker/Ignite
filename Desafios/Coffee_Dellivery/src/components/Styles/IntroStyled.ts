import styled from 'styled-components'

export const IntroStyled = styled.article`
  width: 90rem;
  height: 34rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5.75rem 10rem;
  gap: 3.5rem;
  overflow: hidden;

  background-color: ${props => props.theme.colors.background};

  .introInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    strong {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 3rem;
      line-height: 1.3;
      align-self: stretch;
      color: ${props => props.theme.colors.base_title};
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 1.3;
      font-size: 1.25rem;
      color: ${props => props.theme.colors.base_subtitle};
      margin-top: 1rem;
      margin-bottom: 4.125rem;
    }

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

    .introImage {
      img {
        flex-shrink: 0;
        height: 22.5rem;
      }
    }
  }
`
