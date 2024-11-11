import React,{useState} from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({data}) => {
  const [username, setUsername] = useState('')

  // if(!data)
  // {
  //   setUsername('Admin')
  // }
  // else
  // {
  //   setUsername(data.firstName)
  // }

  const logOut=()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
  return (
    <div className='flex items-end justify-between p-5'>
        <h1 className='text-2xl font-medium top-10'>Hello <br /> <span className='text-3xl'>Username 👋</span></h1>
        <button className='bg-red-600 rounded-sm text-white px-3 py-1' onClick={logOut}>Log out</button>
    </div>
  )
}

export default Header