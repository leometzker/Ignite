import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const NewTransactionModalStyled = styled.div``

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: hsla(100, 0%, 0%, 60%);

  position: fixed;
  inset: 0; //top, bottom, left, right
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const DialogContent = styled(Dialog.Content)`
  width: 33.5rem;
  height: 33rem;
  padding: 3rem;

  background-color: ${props => props.theme.color['gray-600']};
  border-radius: 8px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;

  /* centraliza o conteudo */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  .Title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${props => props.theme.color['gray-100']};
  }

  .Close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    width: 1.5rem;
    height: 1.5rem;

    background-color: transparent;
    line-height: 0;
    border: 0;
    padding: 0.2rem;
  }

  .NewTransactionForm {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.4s;
      padding: 1rem;
      border-radius: 6px;

      color: ${props => props.theme.color['gray-100']};
      background-color: ${props => props.theme.color['gray-800']};
    }
    .in-out {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      height: 3.63rem;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;

      input {
        display: none;
        &:checked + .income {
          background-color: ${props => props.theme.color['green-300']};

          svg {
            color: ${props => props.theme.color.white};
          }
        }

        display: none;
        &:checked + .outcome {
          background-color: ${props => props.theme.color['red-300']};
          svg {
            color: ${props => props.theme.color.white};
          }
        }
      }

      Label {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;
        text-align: center;
        padding: 1rem 2rem;
        border-radius: 6px;
        width: 50%;
        font-weight: 700;
        font-size: 1rem;
        transition: 0.2s;
        background-color: ${props => props.theme.color['gray-800']};
        color: ${props => props.theme.color.white};
      }

      .income svg {
        color: ${props => props.theme.color['green-300']};
      }

      .outcome svg {
        color: ${props => props.theme.color['red-300']};
      }
    }
  }

  button[type='submit'] {
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`
