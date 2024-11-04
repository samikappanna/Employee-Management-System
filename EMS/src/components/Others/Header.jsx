import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium top-10'>Hello <br /> <span className='text-3xl'>Samik 👋</span></h1>
        <button className='bg-red-600 rounded-sm text-white px-3 py-1'>Log out</button>
    </div>
  )
}

export default Header