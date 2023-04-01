import React from 'react'

const BookCard = ({coverimage, bookname, author, edition, booklink}) => {
  const coverlink = coverimage!==""? coverimage : `${process.env.REACT_APP_DEFAULT_COVERPAGE}` ;
  return (
    <div className='book-card'>
        <img src={coverlink} alt="coverimage" />
        <div className='book-info'>
            <h2>{bookname}</h2>
            <p>Edition: {edition}</p>
            <p>Author: {author}</p>
        </div>
        <a href={booklink}><button>Download</button></a>
    </div>
  )
}

export default BookCard