import { styled } from '@stitches/react'

export const Product = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 1180,
  padding: '0.5rem',

  '.showProduct': {
    width: '50%',
    padding: '0.5rem',
    borderRadius: 10,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

    img: {
      width: '100%',
      objectFit: 'cover'
    }
  },

  '.info': {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: '4.5rem',

    h1: {
      marginTop: '1.8rem',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.4,
      color: '$green100'
    },

    '.price': {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: '$green300',
      marginTop: '2rem'
    },

    '.description': {
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      color: '$gray300',
      marginTop: '2.5rem'
    },
    '.byButton': {
      borderRadius: 8,
      marginTop: 'auto',
      padding: '20px 32px',

      backgroundColor: '$green500',
      color: '$green100',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.6,

      '&:hover': {
        backgroundColor: '$green300'
      }
    }
  }
})
