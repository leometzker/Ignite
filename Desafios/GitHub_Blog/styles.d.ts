import 'styled-components'
import { DefaultTheme } from './src/themes/Default'

type TTheme = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
