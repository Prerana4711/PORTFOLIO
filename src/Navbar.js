import React from 'react'

const Navbar = () => {
  return (
   <div className=' justify-self-center w-5/6 h-20  m-4 elem-div'
   data-aos="fade-down"
   data-aos-duration="1000">
    <div className='flex justify-between font-bold p-2  text-2xl element'>
           <div className=' portfolio item-nav pl-6 underline  hover:text-3xl transition-all  duration-500'>
               Portfolio
           </div>
           <div className=' '>
               <a className='item-nav  p-6   hover:text-3xl transition-all  underline duration-500' href="#home1">Home</a>
               <a className=' item-nav p-6   hover:text-3xl transition-all  underline duration-500' href="#Experience1">Experience</a>
               <a className='item-nav p-6  hover:text-3xl transition-all  underline duration-500' href="#skills1">Skills</a>
               <a className=' item-nav p-6   hover:text-3xl transition-all  underline duration-500' href="#project1">Projects</a>
               <a className=' item-nav p-6   hover:text-3xl transition-all  underline duration-500' href="#course1">Course</a>
               <a className=' item-nav p-6   hover:text-3xl transition-all  underline duration-500' href="#contact1">Contact Me</a>
           </div>
           </div>
   </div>
  )
}

export default Navbar
