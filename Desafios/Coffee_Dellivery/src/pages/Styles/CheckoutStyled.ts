import styled from 'styled-components'

export const CheckoutStyled = styled.div`
  display: flex;
  gap: 2rem;

  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.base_subtitle};

  svg {
    color: ${props => props.theme.colors.purple_dark};
  }

  .title {
    margin-top: 2.5rem;
    margin-bottom: 0.875rem;
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${props => props.theme.colors.base_subtitle};
  }

  .dataContainer {
    svg:first-of-type {
      color: ${props => props.theme.colors.yellow_dark};
    }
    width: 40rem;
    height: 23.25rem;
    padding: 2.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.base_card};
  }

  .paymentContainer {
    margin-top: 0.75rem;
    width: 40rem;
    height: 13rem;
    padding: 2.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.base_card};
  }

  .info {
    margin-top: 0;
    display: flex;
    gap: 0.5rem;
    height: 2.75rem;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.3;
      color: ${props => props.theme.colors.base_subtitle};
      strong {
        display: block;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.3;
      }
    }
  }

  .paymentChange {
    margin-top: 2rem;
    width: 100%;
    height: 3.1875rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      height: 3.1875rem;
      width: 11.2rem;

      display: flex;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 6px;

      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.6;
      color: ${props => props.theme.colors.base_subtitle};

      background-color: ${props => props.theme.colors.base_button};

      &:hover {
        background-color: ${props => props.theme.colors.base_hover};
      }

      &:checked {
        background-color: ${props => props.theme.colors.purple_light};
        border: 1px solid ${props => props.theme.colors.purple_dark};
      }
    }
  }

  .checkoutContaines {
  }
  .cartContainer {
    width: 28rem;
    padding: 2.5rem;
    border-radius: 6px;

    background-color: ${props => props.theme.colors.base_card};

    .cartList {
    }

    .totals {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.675rem;

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.3;
      color: ${props => props.theme.colors.base_text};

      p {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      strong {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 1.25rem;
        font-weight: 700;
      }
    }

    .confirm {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.5rem;
      width: 23rem;
      height: 2.87rem;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.6;
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.yellow};

      &:hover {
        background-color: ${props => props.theme.colors.yellow_dark};
      }
    }
  }
`
