import Image from 'next/image'
import { Items, HomeContainer } from '../styles/pages/home'
import camisa from 'src/assets/camisa.svg'

export default function Home() {
  return (
    <HomeContainer>
      <Items>
        <Image src={camisa} width={480} height={520} alt="" />
        <footer>
          <strong>descrição</strong> <span>R$ 0,00</span>
        </footer>
      </Items>

      <Items>
        <Image src={camisa} width={480} height={520} alt="" />
        <footer>
          <strong>descrição</strong> <span>R$ 0,00</span>
        </footer>
      </Items>

      <Items>
        <Image src={camisa} width={480} height={520} alt="" />
        <footer>
          <strong>descrição</strong> <span>R$ 0,00</span>
        </footer>
      </Items>
    </HomeContainer>
  )
}
