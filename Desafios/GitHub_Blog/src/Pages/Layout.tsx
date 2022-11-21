import { Layoutstyled } from './styles/Layoutstyled'
import { Outlet } from 'react-router-dom'
import back from '../assets/Cover.png'
import logo from '../assets/Logo.svg'

export const Layout = () => {
  return (
    <Layoutstyled>
      <img src={back} className="fundo" />

      <div className="logoContainer">
        <img src={logo} className="logo" />
      </div>
      <Outlet />
    </Layoutstyled>
  )
}
