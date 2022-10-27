import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { LayoutStyled } from './Styles/LayoutStyled'

export const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
    </LayoutStyled>
  )
}
