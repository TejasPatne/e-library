import React from 'react'
import BookCard from './BookCard'
// import data from '../data/books'
import data from '../data/booksdata'

const PopularBooks = () => {
  return (
    <div className='bestseller'>
        <div className='bestseller-1'>Popular Books</div>
        <div className='bestseller-2'>
            {data.map((book, index)=>
                <BookCard key={index} coverimage={book.coverpage} bookname={book.bookname} author={book.author} edition={book.edition} booklink={book.link}  />
            )}
        </div>
    </div>
  )
}

export default PopularBooks