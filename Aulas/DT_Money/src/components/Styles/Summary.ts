import styled from 'styled-components'

export const SummaryStyled = styled.div`
  min-width: 25rem;
  height: 8.56rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-weight: 700;
    font-size: 2rem;
    /* text-align: center; */

    gap: 1.5rem;
    height: 8.56rem;
    width: 22rem;
    padding: 1.5rem;
    border-radius: 6px;

    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color['gray-600']};

    span {
      font-weight: 400;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .card.income {
    svg {
      color: ${props => props.theme.color['green-300']};
    }
  }

  .card.outcome {
    svg {
      color: ${props => props.theme.color['red-300']};
    }
  }

  .card.total {
    background-color: ${props => props.theme.color['green-700']};
    svg {
      color: ${props => props.theme.color.white};
    }
  }
`
