import React, { useEffect, useState }  from 'react'
import BookCard from './BookCard'
// import data from '../data/books'
// import data from '../data/booksdata'
import axios from 'axios'

const Novels = () => {const [bookList, setBookList]=useState();
  const getBooks= async()=>{
    const {data}=await axios.get("http://localhost:5000/api/v1/books")
    // console.log(data.books);
    setBookList(data.books);
  }

  useEffect(()=>async()=>{
    getBooks();
  }, [])
  return (
    <div className='bestseller dark-background content'>
        <div className='bestseller-2'>
            {bookList && bookList.map((book, index)=>
                book.category==="novel" ? <BookCard key={index} coverimage={book.coverpage} bookname={book.name} author={book.author} edition={book.edition} booklink={book.link}  /> : null
            )}
        </div>
    </div>
  )
}

export default Novels