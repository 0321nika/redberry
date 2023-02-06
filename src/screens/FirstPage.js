import React from 'react'
import { Link } from 'react-router-dom'
import './FirstPage.css'

const FirstPage = () => {
  return (
    <div className='bg'>
            <header className='header'>
                <img className='logo' src='./images/Logo.png' alt='logo'/>
            </header>
            <div>
            <Link to="./SecondPage" className='btn'>რეზიუმეს დამატება</Link>
                <img src='./images/icon.png' alt='logo'/>
            </div>
    </div>
  )
}

export default FirstPage