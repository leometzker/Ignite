import { globalCss } from './Styles'

export const Global = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100'
  },

  'body, input, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})
