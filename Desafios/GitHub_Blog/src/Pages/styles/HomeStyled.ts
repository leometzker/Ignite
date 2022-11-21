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
  }
`
