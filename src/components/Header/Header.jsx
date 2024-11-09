import React from 'react'
import profile from '../../assets/images/profile.png'
// above import code shows how to import image from a file . Here profile is an alias
const Header = () => {
  return (
    <hea className='flex justify-between items-center p-4 mx-4 border-b-2'>
        <h1 className='text-[2.5rem] text-[#111111] font-bold'>Knowledge cafe</h1>
        <img className='w-14' src={profile} alt="" srcset="" />
    </hea>
  )
}

export default Header