import styled from 'styled-components'

export const HeaderStyled = styled.header`
  height: 13.25rem;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  position: relative;

  background-color: ${props => props.theme.colors.profile};

  .headerContainer {
    display: flex;
    gap: 2rem;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;

    .title {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.3;
      color: ${props => props.theme.colors.title};
    }

    .bio {
      margin-top: 0.5rem;
      height: 3.5rem;

      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6;
      color: ${props => props.theme.colors.text};

      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      display: -webkit-box;
      -webkit-line-clamp: 2; // Quantidade de linhas
      -webkit-box-orient: vertical;
    }

    .bar {
      margin-top: 1.5rem;
      display: flex;
      gap: 1.5rem;
      color: ${props => props.theme.colors.text};

      span {
        svg {
          width: 18px;
          height: 18px;
          color: ${props => props.theme.colors.label};
        }
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }

  .avatar {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-weight: 700;
    color: ${props => props.theme.colors.blue};
  }

  .linkGH {
    position: absolute;
    right: 2rem;
    top: 2.5rem;
  }
`
