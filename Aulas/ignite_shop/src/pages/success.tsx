import Link from 'next/link'
import { SuccessStyled } from './../styles/pages/success'

export default function Success() {
  return (
    <SuccessStyled>
      <h1>Compra efetuada!</h1>
      <div className="image"></div>
      <p>
        Uhuul <strong> Diego Fernandes</strong>, sua{' '}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.{' '}
      </p>
      <Link href={'/'} prefetch={false}>
        Voltar ao catálogo
      </Link>
    </SuccessStyled>
  )
}
