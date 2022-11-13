import 'styled-components'
import { DefaultTheme } from './themes/defaultTheme'

type ThemeType = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
