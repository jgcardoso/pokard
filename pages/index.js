import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import cardStyles from '../styles/Cards.module.css'

import pokemon from 'pokemontcgsdk'

export default function Home() {
  const [page, setPage] = React.useState(1);
  const [cards, setCards] = React.useState([])
  const [loading, setLoading] = React.useState(true);
  const [loadingPage, setLoadingPage] = React.useState(true);

  React.useEffect(() => {
    getCards();
  }, [page])
  
  async function getCards() {
    setLoadingPage(true);

    const response = await pokemon.card.where({ 
      pageSize: 32, 
      page: page
    })
    setCards([...cards, ...response.data])
    setLoadingPage(false);
    setLoading(false);
  }

  if(loading) {
    return (
      <div className="page">
        <div className="container">
          <h1>Pokémon Trading Card Game</h1>
          <p>Loading...</p>
        </div>
      </div>
    )
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokard Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page">
        <div className="container">
          
          <h1>Pokémon Trading Card Game</h1>

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

          <div className="loadMore">
            <button onClick={() => setPage(page + 1)} disabled={loadingPage}>
              {loadingPage ? 'Loading...' : 'Load more cards'}
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}
