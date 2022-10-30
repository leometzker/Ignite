import { Intro } from '../components/Intro'
import { HomeStyled } from './Styles/HomeStyled'
import { Catalog } from './../components/Catalog'

export const Home = () => {
  return (
    <HomeStyled>
      <Intro />
      <Catalog />
    </HomeStyled>
  )
}
