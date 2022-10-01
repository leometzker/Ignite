import styles from './Sidebar.module.css';
import {PencilLine} from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar(){
  return(
    <aside className={styles.sidebar}> 
      <img src="https://images.unsplash.com/photo-1664142315040-69e24a9c2356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=50" /> 

      <div className={styles.profile}>
        <Avatar src="https://github.com/leometzker.png"/>
        <strong>nome do ususario</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}