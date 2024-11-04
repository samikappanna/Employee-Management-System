import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const AuthData=useContext(AuthContext)

  
  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123')
    {
      setUser('admin')
    }
    else if(AuthData && AuthData.employees.find((e)=>email == e.email && password==e.password))
    {
      setUser('employee')
    }
    else
    {
      alert("Invalid credentials")
    }
  }



  return (
    <>
    {!user?<Login handleLogin={handleLogin}/>:''}
    {user=='admin'?<AdminDashboard />:<EmployeeDashboard />}
    </>
  )
}

export default App