import styles from "./Header.module.css"
import logo from "../assets/react.svg"

export function Header(){
  return(
    <header className={styles.header}>
      <img src={logo}alt="logo" />
      {/* <strong>Ignite Feed</strong> */}
    </header>
  )
}