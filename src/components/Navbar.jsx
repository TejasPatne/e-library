import React from 'react'
import '../App'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='nav-1'>
            <h1>Justbooks</h1>
        </div>
        <div className='nav-2'>
            <a href="home">Home</a>
            <a href="novels">Novels</a>
            <a href="study">Study</a>
            <a href="comics">Comics</a>
            <button>Login / SignUp</button>
        </div>
    </div>
  )
}

export default Navbar