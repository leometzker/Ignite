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

      .card {
        border: 2px solid transparent;

        .cardInfo {
          height: 4rem;
          display: flex;
          justify-content: space-between;

          .cardTitle {
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 1.6;
            color: ${props => props.theme.colors.title};
          }

          .cardDate {
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.4;
            color: ${props => props.theme.colors.span};
          }
        }

        background-color: ${props => props.theme.colors.post};
        height: 16.25rem;
        width: calc(50% - 1rem);
        border-radius: 6px;
        padding: 2rem;

        &:hover {
          border: 2px solid ${props => props.theme.colors.label};
        }
      }
      .cardContent {
        margin-top: 1.25rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        color: ${props => props.theme.colors.text};

        overflow: hidden; // Removendo barra de rolagem
        text-overflow: ellipsis; // Adicionando "..." ao final
        display: -webkit-box;
        -webkit-line-clamp: 4; // Quantidade de linhas
        -webkit-box-orient: vertical;

        /* para uma linha
        max-width: 500px; // Limite maximo do texto
        white-space: nowrap; // Removendo quebra de linha
        overflow: hidden; // Removendo a barra de rolagem
        text-overflow: ellipsis; // Adicionando "..." ao final do texto
         */
      }
    }
  }
`
