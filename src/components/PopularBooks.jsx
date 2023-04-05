import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import HomePoster from './HomePoster'
import axios from 'axios'

const PopularBooks = () => {
  const [bookList, setBookList]=useState();
  const getBooks= async()=>{
    const {data}=await axios.get(`${process.env.REACT_APP_BACKEND_URL}`)

    setBookList(data.books);
  }

  useEffect(()=>async()=>{
    getBooks();
  }, [])
return (
  <div className='main-content'>
    <HomePoster />
    <div className='bestseller'>
      <div className='bestseller-1' id='popular-books'>Popular Books</div>
      <div className='bestseller-2'>
        {bookList && bookList.map((book, index) =>
          <BookCard key={index} coverimage={book.coverpage} bookname={book.name} author={book.author} edition={book.edition} booklink={book.link} />
        )}
      </div>
    </div>
  </div>
)
}

export default PopularBooks