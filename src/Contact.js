import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { SiRefinedgithub } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
const Contact = () => {
  return (
    <div className='contact 'id="contact1" >
      <h1 className='ml-40 font-bold  text-2xl underline justify-start hover:text-3xl transition-all con-heading duration-500'
       >CONTACT ME</h1>
      <div className='contact-item flex justify-self-center mt-16 justify-center flex-wrap  '>
      
        
        <a href="https://www.linkedin.com/in/prerana-gupta-909b21195" target="_blank" className="item-co h-16 w-16 bg-black rounded-full border-2 border-yellow-400  m-4  hover:bg-blue-600 shadow-md shadow-yellow-400    transition-all duration-500">
            <FaLinkedinIn className='m-6 text-yellow-400  ' />
        </a>
        <a href="tel:+7307207668" target="_blank"  className="item-co h-16 w-16 bg-black  rounded-full border-2 border-yellow-400  hover:bg-blue-600 shadow-md shadow-yellow-400    transition-all duration-500  m-4">
            <BsFillTelephoneFill className='m-6 text-yellow-400'/>
        </a>
        <a href="mailto:210004008@hbtu.ac.in"   className="item-co h-16 w-16 bg-black rounded-full border-2 border-yellow-400  m-4  hover:bg-blue-600 shadow-md shadow-yellow-400    transition-all duration-500">
            <TfiEmail className='m-6 text-yellow-400'/>
        </a>
        <a href="https://github.com/Prerana4711" target="_blank"  className="item-co h-16 w-16 bg-black rounded-full border-2 border-yellow-400  m-4  hover:bg-blue-600 shadow-md shadow-yellow-400    transition-all duration-500">
            <SiRefinedgithub className='m-6 text-yellow-400'/>
        </a>
        <a href="https://leetcode.com/prerana4711" target="_blank"  className="item-co h-16 w-16 bg-black rounded-full border-2 border-yellow-400  m-4  hover:bg-blue-600 shadow-md shadow-yellow-400    transition-all duration-500">
            <SiLeetcode className='m-6 text-yellow-400'/>
        </a>
        <a href="https://app.netlify.com/teams/aksr3956" target="_blank"  className="item-co h-16 w-16 bg-black rounded-full border-2 border-yellow-400  m-4  hover:bg-blue-600 shadow-md shadow-yellow-400    transition-all duration-500">
            < SiNetlify className='m-6 text-yellow-400'/>
        </a>
        
      </div>
    </div>
  )
}

export default Contact
