import React from 'react'
import BookCard from './BookCard'
// import data from '../data/books'
import data from '../data/booksdata'

const Comics = () => {
  return (
    <div className='bestseller dark-background content'>
        <div className='bestseller-2'>
            {data.map((book, index)=>
                book.type==="comic" ? <BookCard key={index} coverimage={book.coverpage} bookname={book.bookname} author={book.author} edition={book.edition} booklink={book.link}  /> : null
            )}
        </div>
    </div>
  )
}

export default Comics