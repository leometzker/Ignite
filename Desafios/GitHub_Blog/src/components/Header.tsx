import { HeaderStyled } from './Styles/HeaderStyled'

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="headerContainer">
        <img src="" alt="" />
        <strong>Nome</strong>
        <span>Descrição</span>
        <div className="info">
          <span>git</span>
          <span>Rocketseat</span>
          <span>30 seguidores</span>
        </div>
      </div>

      <a href="/post">
        GITHUB <img src="" alt="" />
      </a>
    </HeaderStyled>
  )
}
