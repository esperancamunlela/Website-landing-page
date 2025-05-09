import type { DadosFooter } from '../types/footerInfo'

export const Footer = (props: DadosFooter) => {
  return (
    <div>
      <hr />
      <p>Contacto: {(props.contacto)}</p>
      <p>Email: {(props.email)}</p>
      <p>&copy;{new Date().getFullYear()} feito por {(props.nome)}</p>
      <br />
    </div>
  )
}
