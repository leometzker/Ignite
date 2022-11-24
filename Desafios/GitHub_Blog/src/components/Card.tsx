import { formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import { NavLink } from 'react-router-dom'
import { ICard, useApi } from '../contexts/ApiContext'
import { CardStyled } from './Styles/CardStyled'

type CardProps = {
  card: ICard
}
export const Card = ({ card }: CardProps) => {
  let { setPost } = useApi()

  function setPostId() {
    setPost(card)
  }

  return (
    <CardStyled>
      <NavLink onClick={setPostId} to="/post">
        <div className="cardInfo">
          <h3 className="cardTitle">{card.title}</h3>
          <span className="cardDate">
            {formatDistanceToNow(parseISO(card.created_at), {
              addSuffix: true,
              locale: ptBR
            })}
          </span>
        </div>
        <div className="cardContent">
          <ReactMarkdown>{card.body}</ReactMarkdown>
        </div>
      </NavLink>
    </CardStyled>
  )
}
