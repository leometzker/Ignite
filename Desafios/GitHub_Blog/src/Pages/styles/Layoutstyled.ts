import styled from 'styled-components'

export const Layoutstyled = styled.div`
  position: relative;
  padding: 0 5rem;
  max-width: 90rem;
  margin: 0 auto;

  .fundo {
    margin: 0;
    top: 0;
    left: 0;
    width: 100vw;
    height: 18.5rem;
    position: fixed;
    z-index: -1;
  }

  .logoContainer {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 13rem;
    justify-content: center;
    align-items: center;

    .logo {
      height: 6.125rem;
      margin-top: 4rem;
      margin-bottom: 2.87rem;
    }
  }
`
