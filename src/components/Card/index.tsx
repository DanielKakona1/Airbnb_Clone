import React from 'react';
import './Card.css'

interface Props {
  house: {
  src:string ;
  title:string;
  description:string;
  price?: string ;
  }
}

const Card = ({house}: Props) => {
  return (
    <div className='card'>
      <img src={house.src} alt=""/>
      <div className="card__info">
        <h2>{house.title}</h2>
        <h4>{house.description}</h4>
        <h3>{house.price}</h3>
      </div>
    </div>
  )
}

export default Card
