import Image from 'next/image'
import { Items, HomeContainer } from '../styles/pages/home'
import camisa from 'src/assets/camisa.svg'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function Home() {
  return (
    <HomeContainer>
      <Splide
        options={{
          fixedHeight: '42rem',
          fixedWidth: '43.5rem',
          width: '100%',
          padding: '5rem',
          gap: '2rem',
          // perPage: 2,
          focus: 'center',
          perMove: 1,
          pagination: false,
          rewind: true,
          isNavigation: true
        }}
      >
        <SplideSlide>
          <Items>
            <Image src={camisa} width={480} height={520} alt="" />
            <footer>
              <strong>descrição</strong> <span>R$ 0,00</span>
            </footer>
          </Items>
        </SplideSlide>
        <SplideSlide>
          <Items>
            <Image src={camisa} width={480} height={520} alt="" />
            <footer>
              <strong>descrição</strong> <span>R$ 0,00</span>
            </footer>
          </Items>
        </SplideSlide>
        <SplideSlide>
          <Items>
            <Image src={camisa} width={480} height={520} alt="" />
            <footer>
              <strong>descrição</strong> <span>R$ 0,00</span>
            </footer>
          </Items>
        </SplideSlide>
        <SplideSlide>
          <Items>
            <Image src={camisa} width={480} height={520} alt="" />
            <footer>
              <strong>descrição</strong> <span>R$ 0,00</span>
            </footer>
          </Items>
        </SplideSlide>
      </Splide>
    </HomeContainer>
  )
}
