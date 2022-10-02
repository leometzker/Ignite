import styles from "./Post.module.css"

import { format, formatDistanceToNow } from "date-fns";
import ptbr from "date-fns/locale/pt-BR"

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { ChangeEvent, FormEvent, useState } from 'react';


interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: string;
}

export function Post({ author, content, publishedAt }: PostProps) {

  
  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptbr })
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptbr, addSuffix: true })
  
  const [comments, setComment] = useState([""])

  const [newCommentText, setNewCommentText] = useState("")

  function handleCreateComment(event: FormEvent) {
    event.preventDefault();
    setComment([...comments, newCommentText])
    setNewCommentText("")
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string){
    const commentsWithoutDeleted = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComment(commentsWithoutDeleted);
  }

  function handleCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo é obrigatorio!")
  }

  const isNewCommentEmpyt = newCommentText.length === 0;

  return (
    <article className={styles.Post}>
      <header>
        <Avatar src={author.avatarUrl} />
        <div className={styles.infoPost}>
          <div className={styles.infoUser}>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
          <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </div>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type == "link") {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.feedbackForm}>
        <strong>Deixe seu feedback</strong>
        <textarea name="comment" className={styles.feedback}
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleCommentInvalid}
          required
        />
        <div className={styles.footer}>
          <button 
            type="submit"
            disabled={isNewCommentEmpyt}>
            Publicar
          </button>
        </div>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}