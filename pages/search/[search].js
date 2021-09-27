import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'
import cardStyles from '../../styles/Cards.module.css'

import pokemon from 'pokemontcgsdk'

function Search() {
  const [cards, setCards] = React.useState([])
  const [notFound, setNotFound] = React.useState(false);

  const router = useRouter()
  const { search } = router.query

  React.useEffect(() => {
    getCards();
  }, [search])

  async function getCards() {
    setNotFound(false)
    const response = await pokemon.card.where({ q: `name:"${search}*"` })
    
    if(response.data.length === 0) {
      setNotFound(true);
      setCards([])
      return;
    }
    
    setNotFound('');
    setCards(response.data)
  }

  if(notFound) {
    return (
      <div className="page">
        <div className="container">
          <h1>Search</h1>
          <p>Not Found</p>
        </div>
      </div>
    )
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Search: {search} - Pokard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page">
        <div className="container">
          
          <h1>Search: {search}</h1>

          <div className={cardStyles.grid}>

            {cards && cards.map((card, index) => {
              return (
                <div key={card.id + index} className={cardStyles.card}>
                  <div className={cardStyles.image}>
                    <Image src={card.images.small ? card.images.small : card.images.large} width="245" height="342" />
                  </div>
                  <div className={cardStyles.name}>
                    <p>{card.name}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Search
