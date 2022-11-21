import styled from 'styled-components'

export const HomeStyled = styled.div`
  main {
    .cardsContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 3rem;

      .card {
        background-color: ${props => props.theme.colors.post};
        height: 16.25rem;
        width: calc(50% - 1rem);
        border-radius: 6px;
        padding: 2rem;
      }
    }

    .contentBase {
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
`
