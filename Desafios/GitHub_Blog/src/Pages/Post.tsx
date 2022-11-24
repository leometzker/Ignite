import ReactMarkdown from 'react-markdown'
import { NavLink } from 'react-router-dom'
import { useApi } from '../contexts/ApiContext'
import { PostStyled } from './styles/PostStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow, parseISO } from 'date-fns'

export const Post = () => {
  const { selectedPost, user } = useApi()

  return (
    <PostStyled>
      <div className="postContainer">
        <header>
          <nav>
            <NavLink to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              VOLTAR
            </NavLink>
            <a target={'_blank'} href={selectedPost?.html_url}>
              VER NO GITHUB
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </nav>
          <h1 className="postTitle">{selectedPost?.title}</h1>
          <div className="info">
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formatDistanceToNow(
                parseISO(selectedPost ? selectedPost.created_at : ''),
                {
                  addSuffix: true,
                  locale: ptBR
                }
              )}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              {`${selectedPost?.comments} comentarios`}
            </span>
          </div>
        </header>

        <main>
          <div className="markContent">
            <ReactMarkdown>
              {selectedPost ? selectedPost.body : 'conteúdo não encontrado'}
            </ReactMarkdown>
          </div>
        </main>
      </div>
    </PostStyled>
  )
}
