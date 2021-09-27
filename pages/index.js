import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import cardStyles from '../styles/Cards.module.css'

import pokemon from 'pokemontcgsdk'

export default function Home() {
  const [cards, setCards] = React.useState([])
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    
    pokemon.card.where({ pageSize: 32, page: 1 })
    .then(result => {
      const data = result.data;
      setCards(data);
      console.log(data);
      setLoading(false);
    })

  }, [])

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
        <title>Pokárd Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page">
        <div className="container">
          
          <h1>Pokémon Trading Card Game</h1>

          <div className={cardStyles.grid}>
            {cards && cards.map(card => {
              return (
                <div key={card.id} className={cardStyles.card}>
                  <div className={cardStyles.image}>
                    <Image src={card.images.small} width="245" height="342" />
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
