import styled from 'styled-components'

export const LayoutStyled = styled.div`
  max-width: 90rem;
  padding: 0 2rem;
  margin: 0 auto 2rem;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;

    width: 100vw;
    height: 13.25rem;

    background-color: ${props => props.theme.color['gray-900']};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0;
  }

  .container {
    background-color: ${props => props.theme.color['green-500']};
  }
`
