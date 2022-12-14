import styled from 'styled-components'

export const LayoutStyled = styled.div`
  max-width: 90rem;
  padding: 0 5rem;
  margin: 0 auto 2rem;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;

    width: 100vw;
    height: 13.25rem;

    background-color: ${props => props.theme.color['gray-800']};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0;
  }
`
