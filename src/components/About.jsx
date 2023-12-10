import React from 'react'

function About() {
  return (
    <div className='w-full rounded-md overflow-hidden flex mt-5 flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='px-5 pt-3 w-full md:w-1/2'>
        <h1 className='text-2xl font-semibold text-center mb-3'>About Us</h1>
        <div>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit dolore magni. Porro ea corrupti molestiae repellat soluta autem reprehenderit facilis dolorum at laborum quas ipsum esse, labore inventore ipsa molestias ipsam enim consequatur harum saepe assumenda velit eaque! Commodi omnis dolore nemo itaque quo reprehenderit ea veniam inventore iure.</p>
        </div>
        <button className='bg-black text-white p-3 rounded-sm font-semibold mt-3'>Learn more</button>
      </div>
    </div> 
  )
}

export default About