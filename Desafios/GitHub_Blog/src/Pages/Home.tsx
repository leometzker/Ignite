import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { HomeStyled } from './styles/HomeStyled'

export const Home = () => {
  return (
    <HomeStyled>
      <Header />

      <main>
        <div className="infoMain">
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>

        <SearchBar />

        <div className="cardsContainer">
          <div className="card">
            <h3>titulo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae
              fugiat eligendi laboriosam repudiandae, est totam voluptatem
              praesentium labore esse libero dicta voluptatum rerum velit odio
              assumenda dolorem excepturi doloremque!
            </p>
          </div>
          <div className="card">
            <h3>titulo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae
              fugiat eligendi laboriosam repudiandae, est totam voluptatem
              praesentium labore esse libero dicta voluptatum rerum velit odio
              assumenda dolorem excepturi doloremque!
            </p>
          </div>
          <div className="card">
            <h3>titulo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae
              fugiat eligendi laboriosam repudiandae, est totam voluptatem
              praesentium labore esse libero dicta voluptatum rerum velit odio
              assumenda dolorem excepturi doloremque!
            </p>
          </div>
        </div>
      </main>
    </HomeStyled>
  )
}
