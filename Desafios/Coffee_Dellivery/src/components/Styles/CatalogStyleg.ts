import styled from 'styled-components'

export const CatalogStyeled = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    margin-top: 2rem;
  }

  .catalogList {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 2rem;
    margin-bottom: 8rem;
    gap: 2rem;
  }
`
