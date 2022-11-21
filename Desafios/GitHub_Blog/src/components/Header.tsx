import { useApi } from '../database/api'
import { HeaderStyled } from './Styles/HeaderStyled'

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
              {/* <FontAwesomeIcon icon={brands('github')} /> */}
              {user.login}
            </span>
            <span>
              {/* <FontAwesomeIcon icon={faBuilding} /> */}
              {user.company}
            </span>
            <span>
              {/* <FontAwesomeIcon icon={faUserGroup} /> */}
              {`${user.followers} seguidores`}
            </span>
          </div>
        </div>
      </div>

      <a href={user.html_url} className="linkGH">
        GITHUB
        {/* <FontAwesomeIcon icon={regular('coffee')} /> */}
        {/* <FontAwesomeIcon icon={faSquareArrowUpRight} /> */}
      </a>
    </HeaderStyled>
  )
}
