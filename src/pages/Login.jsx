
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username,setUsername] =useState("");
  const [password,setPassword] =useState("");

  const [error,setError] =useState("");


  const navigate=useNavigate();

const handleLogin = (e) =>{
 
  e.preventDefault(); //use to prevent refresh page


  const emailpatten= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwardpatten = /^(?=.*[!@#$%^&*]).{8,}$/;

  if(!emailpatten.test(username)){
    setError("please enter correct email");
    return;
  }

  if(!passwardpatten.test(password)){
    setError("please enter correct 8 didit with special character passward");
    return;
  }

  setError("");

  navigate("/Home");//use to go next page
}


  return (
<div>
    <form onSubmit={handleLogin} className='bg-gray-600 p-9 rounded-2xl'>

        <h1 className='font-bold text-4xl text-cyan-500 text-center mb-6'>Login</h1>

     <div>
        <label className='text-red-400 text-3xl font-medium' >user name </label>
        <input
        type='text'
        holder='user name'
        value={username}
        className='w-full  font-mono p-3 rounded-lg bg-gray-500 text-yellow-50 border-2 border-cyan-500 mb-4'
       onChange={(e)=> setUsername(e.target.value)}
       />
     </div>
    

      <div>
        <label className='text-red-400 text-3xl font-medium ' >password </label>
        <input
        type='password'
        holder='pass word'
        value={password}
        className='w-full  font-mono p-3 rounded-lg bg-gray-500 text-yellow-50 border-2 border-cyan-500 mb-4'
        onChange={(e) => setPassword(e.target.value)}
        />
     </div>
    {error && <p className="text-gray-200">{error}</p>}

        <button className='text-green-200  mb-5' >Submit</button>
    </form>

</div>
  )
}

export default Login