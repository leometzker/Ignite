import 'styled-components'
import { DefaultTheme } from './themes/Default'

type TTheme = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
