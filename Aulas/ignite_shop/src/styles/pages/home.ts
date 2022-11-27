import { styled } from '../Styles'

export const HomeContainer = styled('main', {
  width: '100%',
  minHeight: '42rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start'
})

export const ItemsContainer = styled('div', {
  width: '43.5rem',
  height: '41rem',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 10,

  display: 'flex',
  alignItems: 'space-between'
})

export const Items = styled('a', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',
  overflow: 'hidden',

  img: {
    objectFit: 'cover'
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    height: '6.125rem',
    width: 'calc(100% - 8px)',
    backgroundColor: '$gray800',
    borderRadius: 8,

    position: 'absolute',
    bottom: 0,
    marginBottom: 4,

    strong: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      color: '$gray100'
    },

    span: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: '$green300'
    },

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out'
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 100,
      transition: 'all 0.2s ease-in-out'
    }
  }
})
