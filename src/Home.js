import React from 'react'
import Image from './Images/home.jpg'

const Home = () => {
  return (
    <div className='container my-5 ' > 
        <img src={Image} width='100%' className='rounded-2' alt="log" />
    </div>
  )
}

export default Home