import { styled } from '../../styles/Styles'

export const Overlay = styled('div', {
  height: '100%',
  width: '100%',
  backgroundColor: '$gray100',
  background: 'transparent',

  position: 'fixed',
  display: 'flex',
  justifyContent: 'flex-end',

  zIndex: 50
})

export const CartContainer = styled('div', {
  // transition: 'margin-right 2s, color 1s',
  width: '40rem',
  height: '100%',
  backgroundColor: '$green300',
  padding: '1rem',
  boxShadow: '-5px 0  5px rgba(0, 50, 0, 0.5)'
})
