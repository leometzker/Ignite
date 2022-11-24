import styled from 'styled-components'

export const HomeStyled = styled.div`
  main {
    margin-top: 4.5rem;

    .infoMain {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.6;
      color: ${props => props.theme.colors.span};

      h2 {
        color: ${props => props.theme.colors.subtitle};
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.6;
      }
    }

    .cardsContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 3rem;
      width: 100%;
    }
  }
`
