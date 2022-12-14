import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import { Product } from '../../styles/pages/product'

interface IProductsProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Produto({ product }: IProductsProps) {
  const { isFallback } = useRouter()

  async function handleByProduct() {
    try {
      console.log(product.defaultPriceId)
      // return
      const res = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = res.data

      window.location.href = checkoutUrl // rota externa

      // se fosse usar uma rota internal
      //  const router = useRouter()
      // router.push('/checkout')
    } catch (error) {
      alert('Falha ao redirecionar ao checkout')
    }
  }

  if (isFallback) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    )
  } else {
    return (
      <>
        <Head>
          <title>{product.name} | Ignite Shop</title>
        </Head>

        <Product>
          <div className="showProduct">
            <Image
              src={product.imageUrl}
              width={480}
              height={520}
              alt=""
              quality={50}
              priority={false}
            />
          </div>
          <div className="info">
            <h1> {product.name}</h1>
            <span className="price">{product.price}</span>
            <p className="description">{product.description}</p>
            <button onClick={handleByProduct} className="byButton">
              Comprar agora
            </button>
          </div>
        </Product>
      </>
    )
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      // {
      //   params: { id: 'prod_MsQmmJPEXoZ8KC' }  // pode ser colocado aqui os parametros dos produtos mais acessados ou que se deseja apresentar inicialmente
      // }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params
}) => {
  if (!params) {
    return {
      notFound: true
    }
  }

  const productId = params?.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          currency: 'BRL',
          style: 'currency'
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id
      },
      revalidate: 60 * 60 * 1 // uma hora
    }
  }
}
