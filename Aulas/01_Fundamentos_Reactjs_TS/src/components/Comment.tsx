import styles from "./Comment.module.css"

import { Avatar } from "./Avatar"
import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"


interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({content, onDeleteComment}:CommentProps){
  
  function handleDeleteComment(){
    onDeleteComment(content)
  }

  const [likeCount, setLikeCount] = useState(0);

  function handleLike (){
    setLikeCount( (count) => {
      return count + 1
    });
  }

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
            <button onClick={handleDeleteComment} title="Apagar comentário" >
              <Trash size={24}/>             
            </button>            
          </header>

          <p>{content}</p>

        </div>
        <footer>
          <button onClick={handleLike}>
            <ThumbsUp size={24}/>
             Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}