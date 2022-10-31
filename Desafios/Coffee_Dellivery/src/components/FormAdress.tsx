import { FormAdressStyled } from './Styles/FormAdressStyled'

export const FormAdress = () => {
  return (
    <FormAdressStyled>
      <input type="text" placeholder="CEP" />
      <input type="text" placeholder="Rua" />
      <div>
        <input type="text" placeholder="Numero" />
        <input type="text" placeholder="Complemento" />
      </div>
      <div>
        <input className="Bairro" type="text" placeholder="Bairro" />
        <input className="Cidade" type="text" placeholder="Cidade" />
        <input className="UF" type="text" placeholder="UF" />
      </div>
    </FormAdressStyled>
  )
}
