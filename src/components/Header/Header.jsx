import React from 'react'
import profile from '../../assets/images/profile.png'
// above import code shows how to import image from a file . Here profile is an alias
const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
        <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
        <img src={profile} alt="" srcset="" />
    </header>
  )
}

export default Header