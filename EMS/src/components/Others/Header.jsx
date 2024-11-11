import React from 'react'

const Header = ({data}) => {
  console.log(data)
  return (
    <div className='flex items-end justify-between p-5'>
        <h1 className='text-2xl font-medium top-10'>Hello <br /> <span className='text-3xl'>{data.firstName} 👋</span></h1>
        <button className='bg-red-600 rounded-sm text-white px-3 py-1'>Log out</button>
    </div>
  )
}

export default Header