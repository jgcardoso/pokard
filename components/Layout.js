import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

import pokemon from 'pokemontcgsdk'


pokemon.configure({apiKey: 'd0ba1780-c71e-4d51-b328-e0c6b97891ea'})

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Pokard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <main>
          <div className="page">
            <div className="container">
              {children}
            </div>
          </div>
        </main>
      <Footer />
    </>
  )
}