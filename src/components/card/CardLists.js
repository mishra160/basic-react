import React from 'react'
import Card from './Card'
import { books } from './books'
import './card.css'

const CardLists = () => {
  //cardlists using IIFE
  const cardlists = (function () {
    return books.map((book) => {
      //using spread operator
      return <Card key={book.id} {...book} />
    })
  })()

  return <section className='card_list'>{cardlists}</section>
}

export default CardLists
