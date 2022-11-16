import styled, { css } from 'styled-components'

interface PriceHighLightProps {
  variant?: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${props =>
    props.variant === 'income'
      ? props.theme.color['green-300']
      : props.theme.color['red-300']};
`

export const ExtractStyled = styled.div`
  margin-top: 2rem;

  .Extract {
    width: 100%;
    max-height: 400px;
    color: ${props => props.theme.color['gray-300']};

    border-collapse: separate;
    border-spacing: 0 0.5rem;

    tbody {
      tr {
        background-color: ${props => props.theme.color['gray-600']};

        td {
          font-weight: 400;
          font-size: 1.2rem;

          line-height: 1.6;
          padding: 1.2rem 0.5rem;

          &:nth-child(2) {
            text-align: right;
            width: 12rem;
          }

          &:nth-child(4) {
            text-align: right;
            width: 2.5rem;
          }

          &:first-child {
            width: 45%;
            padding: 0 2rem;
            border-bottom-left-radius: 6px;
            border-top-left-radius: 6px;
          }
          &:last-child {
            padding: 0 2rem;
            border-bottom-right-radius: 6px;
            border-top-right-radius: 6px;
          }
        }
      }
    }
  }

  footer {
    .pages {
      padding: 1rem;
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
  }
`
