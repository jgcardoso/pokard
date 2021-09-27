import React from 'react'
import Image from 'next/image'

import cardStyles from '../styles/Cards.module.css'

function Card({ card }) {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.image}>
        <Image src={card.images.small ? card.images.small : card.images.large} width="245" height="342" />
      </div>
      <div className={cardStyles.name}>
        <p>{card.name}</p>
      </div>
    </div>
  )
}

export default Card
