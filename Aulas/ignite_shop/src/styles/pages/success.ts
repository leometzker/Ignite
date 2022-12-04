import { styled } from '../Styles'

export const SuccessStyled = styled('main', {
  height: '80%',
  maxWidth: 1180,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: '$gray100',

  h1: {
    marginTop: '3.5rem',
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.4
  },

  '.image': {
    width: 'auto',
    height: 'auto',
    padding: '0.2rem',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

    marginTop: '4rem',
    img: {
      width: '100%',
      objectFit: 'cover'
    }
  },

  p: {
    marginTop: '2rem',
    maxWidth: 590,

    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: 1.4
  },

  a: {
    textDecoration: 'none',
    marginTop: '5.5rem',
    color: '$green500',

    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.6,

    '&:hover': {
      color: '$green300'
    }
  },

  strong: {
    fontWeight: 700
  }
})
