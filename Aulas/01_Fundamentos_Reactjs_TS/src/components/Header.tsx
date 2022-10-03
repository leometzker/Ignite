import styles from "./Header.module.css"
// import logo from "..vite.svg"

export function Header(){
  return(
    <header className={styles.header}>
      {/* <img src={logo}alt="logo" /> */}
      <strong>Ignite Feed</strong>
    </header>
  )
}