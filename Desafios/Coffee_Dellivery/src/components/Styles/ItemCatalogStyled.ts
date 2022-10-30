import styled from 'styled-components'

export const ItemCatalogStyled = styled.div`
  .ItemCatalog {
    img {
      width: 7.5rem;
      height: 7.5rem;
      margin-top: -1.25rem;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 6px;
    border-top-right-radius: 2.25rem;
    border-bottom-left-radius: 2.25rem;

    margin-top: 70px;
    width: 16rem;
    height: 19.375rem;
    background-color: ${props => props.theme.colors.base_card};

    .coffeeStyle {
      width: 5rem;
      height: 1.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Roboto', sans-serif;
      font-size: 0.625rem;
      font-weight: 700;
      line-height: 1.3;
      border-radius: 8px;
      margin-top: 0.75rem;
      color: ${props => props.theme.colors.yellow_dark};
      background-color: ${props => props.theme.colors.yellow_light};
    }

    .title {
      margin-top: 1rem;
      width: 13.25rem;
      height: 1.625rem;
      font-family: 'Baloo 2', cursive;
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.3;
      text-align: center;
      color: ${props => props.theme.colors.base_text};
    }

    .description {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      margin-top: 0.5rem;
      width: 13.25rem;
      height: 2.25rem;
      text-align: center;
      line-height: 1.3;
      color: ${props => props.theme.colors.base_label};
    }

    .price_qtde {
      margin-top: 2.06rem;
      width: 13rem;
      height: 2.375rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1.3;
      gap: 0.5rem;

      .price {
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
        font-weight: 800;
        margin-left: 0;
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }

      .price::before {
        content: 'R$';
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 700;
      }

      .count {
        background-color: ${props => props.theme.colors.base_button};
        border-radius: 8px;
        height: 2.375rem;
        width: 4.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;

        button {
          margin: 0.75rem 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          color: ${props => props.theme.colors.purple_dark};
        }
      }

      .shoppingCart {
        background-color: ${props => props.theme.colors.purple_dark};
        padding: 0.5rem;
        border-radius: 8px;
        line-height: 0;

        svg {
          color: ${props => props.theme.colors.base_card};
        }

        &:hover {
          background-color: ${props => props.theme.colors.purple};
        }
      }
    }
  }
`
