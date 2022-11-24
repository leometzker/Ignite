import styled from 'styled-components'

export const CardStyled = styled.div`
  width: calc(50% - 1rem);
  border: 2px solid transparent;

  background-color: ${props => props.theme.colors.post};

  height: 16.25rem;
  border-radius: 6px;
  padding: 2rem;
  overflow: hidden;

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

  &:hover {
    border: 2px solid ${props => props.theme.colors.label};
  }

  .cardContent {
    max-height: 7.2rem;

    * {
      max-width: 100%;
    }

    img {
      width: 30%;
    }

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
`
