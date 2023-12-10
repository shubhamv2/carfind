import React, { useState } from 'react'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  function handleSubmit(e){
    e.preventDefault();
    setEmail("");
    setName("")
    setPhone("")
    setQuery("");
  }
  return (
    <div className='flex w-full max-w-7xl'>
      <div className='w-1/2 rounded-md overflow-hidden'>
        <img src="/contact.jpg" alt="" className='w-full object-cover h-full'/>
      </div>
      <div className='w-1/2'>
        <form onSubmit={handleSubmit} className='w-full px-10'>
          <h1 className='text-3xl font-bold text-center pt-5'>Contact us</h1>
          <div className='flex flex-col'>
            <label htmlFor="clientName" className='text-xl mt-3'>Your Name</label>
            <input id='clientName' type="text" placeholder='Enter your name' className='outline-none border-none p-2 ring-1 rounded-md text-lg mt-2' value={name} onChange={(e)=>{
              setName(e.target.value);
            }}/>
          </div>
          <div  className='flex flex-col'>
            <label htmlFor="clientEmail" className='mt-3 text-xl'>Your Email</label>
            <input id='clientEmail' type="email" placeholder='Enter your email' className='outline-none border-none p-2 ring-1 rounded-md text-lg mt-2' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="clientPhone" className='mt-3 text-xl'>Your Phone</label>
            <input type="phone" id='clientPhone' placeholder='Enter your phone' className='outline-none border-none p-2 ring-1 rounded-md text-lg mt-2' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="clientQuery" className='text-xl mt-3'>Your Query</label>
            <textarea id="clientQuery" className='border-2  resize-none outline-none border-none p-2 ring-1 rounded-md text-lg mt-2 h-32' name="" placeholder='Write you query here...' value={query} onChange={(e)=>{setQuery(e.target.value)}}></textarea>
          </div>
          <button className='text-xl text-white bg-black p-3 rounded-md mt-4 mb-3 w-full hover:bg-slate-900 active:bg-slate-700' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact