import React from 'react'
import './card.css'

const Card = ({ img, title, author }) => {
  const log = console.log
  // basic events handling

  // articleHandler
  const articleHandler = (e) => {
    log(e.target)
  }
  //imgHandler
  const imgHandler = () => {
    log(img)
  }
  //titleHandler
  const titleHandler = () => {
    log(title)
  }
  //authorHandler
  const authorHandler = () => {
    log(author)
  }
  // FOR TESTING PURPOSE
  // const alldata = (function () {
  //   console.log(img, title, author, name)
  // })()

  return (
    <article className='card_article' onClick={articleHandler}>
      <img className='card_img' src={img} alt={title} onClick={imgHandler} />
      <h3 className='card_title' onClick={titleHandler}>
        {title}
      </h3>
      <p className='card_author' onClick={authorHandler}>
        {author}
      </p>
    </article>
  )
}

export default Card
