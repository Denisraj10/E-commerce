
import React, { useEffect, useState } from 'react';

const Login = () => {
  return (
<div>
    <form className='bg-gray-600 p-9 rounded-2xl'>

        <h1 className='font-bold text-4xl text-cyan-500 text-center mb-6'>Login</h1>

     <div>
        <label className='text-red-400 text-3xl font-medium' >user name </label>
        <input
        type='text'
        holder='user name'
        className='w-full  font-mono p-3 rounded-lg bg-gray-500 text-yellow-50 border-2 border-cyan-500 mb-4'
        />
     </div>
    

      <div>
        <label className='text-red-400 text-3xl font-medium ' >pass word </label>
        <input
        type='password'
        holder='pass word'
        className='w-full  font-mono p-3 rounded-lg bg-gray-500 text-yellow-50 border-2 border-cyan-500 mb-4'
        />
     </div>
        <button className='text-green-200  mb-5'>Submit</button>
    </form>

</div>
  )
}

export default Login