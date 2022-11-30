import { styled } from '../Styles'
import Link from 'next/link'

export const HomeContainer = styled('main', {
  width: '100%',
  minHeight: '42rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  '.splide__slide': {
    opacity: 0.4
  },

  '.splide__slide.is-active': {
    opacity: 1,
    border: 0,
    outline: 0,

    footer: {
      transform: 'translateY(0%)',
      opacity: 100,
      transition: 'all 0.2s ease-in-out'
    }
  }
})

export const Items = styled(Link, {
  // minWidth: '43.5rem',
  height: '41rem',
  borderRadius: 10,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

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
  }

  // '&:hover': {
  //   footer: {
  //     transform: 'translateY(0%)',
  //     opacity: 100,
  //     transition: 'all 0.2s ease-in-out'
  //   }
  // }
})
