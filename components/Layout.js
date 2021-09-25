
import Header from './Header'
import Footer from './Footer'
import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: 'd0ba1780-c71e-4d51-b328-e0c6b97891ea'})

export default function Layout({ children }) {

  pokemon.card.where({ pageSize: 10, page: 1 })
  .then(result => {
      console.log(result.data)
  })


  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}