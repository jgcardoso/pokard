import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import pokemon from 'pokemontcgsdk'

export default function Sets() {
  const [sets, setSets] = React.useState([]);

  React.useEffect(() => {
    getSets()
  }, [])

  async function getSets() {
    const response = await pokemon.set.all()
    setSets([...sets, ...response]);
  }

  return (
    <div>
      <Head>
        <title>Sets - Pokard</title>
      </Head>
      
      <div className="setsGrid">
        {sets && sets.map((set) => {
          return (
            <div key={set.id} className="set">
              <div className="setsImage">
                <img src={set.images.logo} />
              </div>

              <div className="setName">
                <p>
                  {set.name}
                </p>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
