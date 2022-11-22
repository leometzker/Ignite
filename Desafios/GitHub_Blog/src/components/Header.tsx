import { useApi } from '../contexts/ApiContext'
import { HeaderStyled } from './Styles/HeaderStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Header = () => {
  const { user } = useApi()

  return (
    <HeaderStyled>
      <div className="headerContainer">
        <img src={user.avatar_url} alt="" className="avatar" />

        <div className="info">
          <strong className="title">{user.name}</strong>
          <span className="bio">{user.bio}</span>

          <div className="bar">
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {user.company}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {`${user.followers} seguidores`}
            </span>
          </div>
        </div>
      </div>

      <a href={user.html_url} className="linkGH" target={'_blank'}>
        GITHUB
        <FontAwesomeIcon icon={faUpRightFromSquare} />
      </a>
    </HeaderStyled>
  )
}
