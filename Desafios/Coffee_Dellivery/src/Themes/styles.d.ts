import 'styled-components'
import { DefaultTheme } from './defaultThema'

type ThemeType = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
