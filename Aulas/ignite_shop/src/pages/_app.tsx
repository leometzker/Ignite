import type { AppProps } from 'next/app'
import { Global } from './../styles/globals'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import { Header, LayoutConteiner } from './../styles/pages/appStyle'

Global()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutConteiner>
      <Header>
        <Image src={logo} alt="Landscape picture" width={130} height={50} />
      </Header>

      <Component {...pageProps} />
    </LayoutConteiner>
  )
}
