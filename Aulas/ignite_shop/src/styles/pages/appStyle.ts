import { styled } from '../Styles'

export const LayoutConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto 0',
  marginLeft: '8.5rem',
  height: '100vh',
  position: 'relative'
})

export const Header = styled('header', {
  height: '7.75rem',
  width: '100%',
  maxWidth: 1180,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})
