import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}/`

  console.log(req.body)
  const { priceId } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Motodo não encontrado!' })
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Preço não encontrado!' })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',

    cancel_url: cancelUrl,
    success_url: successUrl,

    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ]
  })
  return res.status(201).json({ checkoutUrl: checkoutSession.url })
}
