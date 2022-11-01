import styled from 'styled-components'

export const ConfirmationStyled = styled.div`
  display: flex;
  flex-direction: column;

  .titleConfirmed {
    margin-top: 5rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${props => props.theme.colors.yellow};
  }

  .subTC {
    margin-top: 0.25rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.base_subtitle};
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2.5rem;
    gap: 6.375rem;

    .info {
      display: flex;
      width: 32.875rem;
      height: 16.875rem;
      padding: 2.5rem;
      border-radius: 0.5rem 2rem;
      position: relative;
      background-color: ${props => props.theme.colors.background};

      table {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.3;
        font-size: 1rem;
        color: ${props => props.theme.colors.base_subtitle};

        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 2.2rem;
        tr {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          td {
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

          .locale {
            background-color: ${props => props.theme.colors.purple};
          }

          .timer {
            background-color: ${props => props.theme.colors.yellow};
          }

          .paymenttype {
            background-color: ${props => props.theme.colors.yellow_dark};
          }
        }
      }
    }

    .info::before {
      border-radius: 0.5rem 2rem;
      content: '';
      background-image: linear-gradient(
        to bottom right,
        #dbac2c 0%,
        #8047f8 100%
      );
      top: -1.5px;
      left: -1.5px;
      bottom: -1.5px;
      right: -1.5px;
      position: absolute;
      z-index: -1;
    }

    img {
      width: 30.75rem;
    }
  }
`
