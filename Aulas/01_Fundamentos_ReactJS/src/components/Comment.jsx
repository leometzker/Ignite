import styles from "./Comment.module.css"

import { Avatar } from "./Avatar"
import { ThumbsUp, Trash } from "phosphor-react"

export function Comment({content}){
  return (
    <div className={styles.Comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.infoComment}>
              <strong>user post</strong>
              <time title="29 de setembro de 2022" dateTime="2022-09-29 02:00:00" >Cerca de 1h</time>
            </div>
            <button title="Apagar comentário" >
              <Trash size={24}/>             
            </button>            
          </header>

          <p>{content}</p>

        </div>
        <footer>
          <button>
            <ThumbsUp size={24}/>
             Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}