import { HeaderContainer } from "./styles";

import { Timer, Scroll } from 'phosphor-react'
import logo from './../../assets/logo.svg'
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <NavLink 
          to="/" 
          title="Timer" end>
            <Timer size={25} />
        </NavLink>
        <NavLink 
          to="/history" 
          title="Histórico">
            <Scroll size={25} />
        </NavLink>      
      </nav>
    </HeaderContainer>
  )
}