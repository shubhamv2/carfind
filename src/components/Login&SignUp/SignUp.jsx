import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/", { replace: true });
    }
    return (
        <div className='w-full min-h-screen relative'>
            <div className='w-1/3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-md shadow-md  border pb-5'>
                <form onSubmit={handleSubmit} className='w-full px-6'>
                    <h1 className='text-3xl font-bold text-center pt-5'>Login</h1>
                    <div className='flex flex-col'>
                        <label htmlFor="clientName" className='text-md mt-3'>Your Name</label>
                        <input id='clientName' type="text" placeholder='Enter your name' className='outline-none border-none p-2 ring-1 rounded-md text-lg mt-2' value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="clientEmail" className='mt-3 text-md'>Your Email</label>
                        <input id='clientEmail' type="email" placeholder='Enter your email' className='outline-none border-none p-2 ring-1 rounded-md text-lg mt-2' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="clientPhone" className='mt-3 text-md'>Your Phone</label>
                        <input type="phone" id='clientPhone' placeholder='Enter your phone' className='outline-none border-none p-2 ring-1 rounded-md text-lg mt-2' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="clientPassword" className='mt-3 text-md'>Your Password</label>
                        <input type="password" id='clientPhone' placeholder='Enter your phone' className='outline-none border-none p-2 ring-1 rounded-md text-lg mt-2' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className='mt-2 '>
                        <Link to="/user/signup" className='text-blue-400'>Don't have account?</Link>
                    </div>
                    <button className='text-xl text-white bg-black p-3 rounded-md mt-2 mb-3 w-full hover:bg-slate-900 active:bg-slate-700' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;