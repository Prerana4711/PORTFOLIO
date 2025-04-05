import React from 'react'
import exp from './Exp.json'
import zummit from './zummit.jpeg'

const Experience = () => {
  return (
    <div id="Experience1">
     <h1 className='  text-2xl mt-20 font-bold ml-40 underline  hover:text-3xl transition-all exp-heading duration-500'>EXPERIENCE</h1>
            <div className='exp flex mt-12 justify-self-center justify-center w-1/3 m-4 p-4 border-4  border-yellow-400 rounded-t-full bg-stone-700 rounded-l-full'
              data-aos="zoom-in"
              data-aos-duration="1000">
            
         <div className='p-4  '>
          <img className='h-12 w-12 image rounded-full border-4 border-yellow-300' src={zummit} alt="image"/>
         </div>
         <div >
          <h1 className='font-bold text-xl exp-role'>{exp.role}</h1>
          <h3>{exp.startDate + " " + "," +" " + exp.endDate}</h3>
          <h5>{exp.Organization}</h5>
          <h5>{exp.location}</h5>
          <h5>{exp.exper}</h5>
          
         
         </div>
         </div>
  
      





      </div>
   
  )
}

export default Experience
