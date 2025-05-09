import { Header } from './components/header'
import { Footer } from './components/footer'
import { Content } from './components/content'

export const App = () => {
  return (
    <>
      <Header />
      <Content nome="Esperança" />
      <Footer
        nome={'Esperança'}
        contacto={849006228}
        email={'Esperanca@gmail.com'}
        data={new Date}
      />
    </>
  )
}
