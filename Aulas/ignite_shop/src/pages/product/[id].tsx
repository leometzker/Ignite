import Image from 'next/image'
import { useRouter } from 'next/router'
import { Product } from '../../styles/pages/product'

export default function Produto() {
  const { query } = useRouter()
  return (
    <Product>
      <div className="showProduct">
        <Image
          src={
            'https://images.unsplash.com/photo-1668778426772-6a8fa7d5772b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          }
          width={480}
          height={520}
          alt=""
        />
      </div>
      <div className="info">
        <h1>Titulod do produto</h1>
        <span className="price">{'R$88,69'}</span>
        <p className="description">
          {JSON.stringify(query)}
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nisi
          ipsum, veniam et id incidunt est hic officiis quaerat neque aliquid
          culpa rem ex iusto ratione aspernatur harum ullam ducimus.
        </p>
        <button className="byButton">Comprar agora</button>
      </div>
    </Product>
  )
}
