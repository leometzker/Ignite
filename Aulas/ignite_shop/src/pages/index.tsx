import Image from 'next/image'
import { Items, HomeContainer } from '../styles/pages/home'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { stripe } from '../lib/stripe'
import { GetServerSideProps, GetStaticProps } from 'next'
import Stripe from 'stripe'

interface IProducts {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: IProducts) {
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
        {products.map(product => {
          return (
            <SplideSlide key={product.id}>
              <Items>
                <Image src={product.imageUrl} width={480} height={520} alt="" />
                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Items>
            </SplideSlide>
          )
        })}
      </Splide>
    </HomeContainer>
  )
}

// export const getServerSideProps: GetServerSideProps = async () =>
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: { products },
    revalidate: 5000
  }
}
