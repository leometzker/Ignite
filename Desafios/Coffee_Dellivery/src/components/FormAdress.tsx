import { FormAddressStyled } from './Styles/FormAdressStyled'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useShoppingCart } from '../context/ShoppingCartProvider/useShoppingCart'

const adressFormSchemaValidation = zod.object({
  bairro: zod.string(),
  cep: zod.string().length(8, 'Digite o CEP (somente caracteres)'),
  cidade: zod.string(),
  complemento: zod.string(),
  numero: zod.string(),
  rua: zod.string(),
  estado: zod.string()
})

export const FormAdress = () => {
  const { register, handleSubmit, reset } = useForm<TformrAddress>({
    resolver: zodResolver(adressFormSchemaValidation),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: 'Governador Valadares',
      estado: 'MG'
    }
  })

  type TformrAddress = zod.infer<typeof adressFormSchemaValidation>

  const shoppingCart = useShoppingCart()

  function handleNewAdress(dataAddress: TformrAddress) {
    shoppingCart.SetAddress(dataAddress)
    reset()
  }

  return (
    <FormAddressStyled
      id="addressForm"
      onSubmit={handleSubmit(handleNewAdress)}
    >
      <input type="text" placeholder="CEP" required {...register('cep')} />
      <input type="text" placeholder="Rua" required {...register('rua')} />
      <div>
        <input type="text" placeholder="Numero" {...register('numero')} />
        <input
          type="text"
          placeholder="Complemento"
          {...register('complemento')}
        />
      </div>
      <div>
        <input
          className="Bairro"
          type="text"
          placeholder="Bairro"
          required
          {...register('bairro')}
        />
        <input
          className="Cidade"
          type="text"
          placeholder="Cidade"
          required
          {...register('cidade')}
        />
        <input
          className="estado"
          type="text"
          placeholder="UF"
          required
          {...register('estado')}
        />
      </div>
    </FormAddressStyled>
  )
}
