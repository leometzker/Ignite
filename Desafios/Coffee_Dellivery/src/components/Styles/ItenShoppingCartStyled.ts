import styled from 'styled-components'

export const ItenShoppingCartStyled = styled.div`
  .itenContainer {
    width: 23rem;
    border-radius: 6px;
    padding: 0.5rem 0.2rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3.125rem;
    background-color: ${props => props.theme.colors.base_card};

    .item {
      width: 15.9rem;
      display: flex;
      gap: 1.25rem;

      img {
        width: 4rem;
      }

      .title {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.3;
        color: ${props => props.theme.colors.base_subtitle};
      }

      .quantidade {
        margin-top: 0.5rem;
        width: 100%;
        display: flex;
        gap: 0.5rem;

        .remove {
          width: 5.8rem;
          height: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 0.5rem;
          border-radius: 6px;
          gap: 0.5rem;

          font-family: 'Roboto', sans-serif;
          font-size: 0.7rem;
          font-weight: 400;
          line-height: 1.6;

          background-color: ${props => props.theme.colors.base_button};
        }
        .price {
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.3;
        }
      }
    }
    .price::before {
      content: 'R$ ';
      font-size: 0.75rem;
    }
  }
`
