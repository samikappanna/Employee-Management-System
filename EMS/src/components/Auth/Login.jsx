import React, { useState } from 'react';

const Login = ({handleLogin}) => {
console.log(handleLogin)
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
    const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    console.log("Logging in...");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black autocomplete='off'">
      <form onSubmit={submitHandler} className="bg-gray-50 p-6 rounded shadow-md w-full max-w-sm" >
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-black" 
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-black
            \" 
            required 
          />
        </div>
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="w-1/2 bg-emerald-400 text-white py-2 rounded-lg hover:bg-emerald-500 transition duration-300"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
