import React from 'react'
import dbms from './dbms.png'
import OS from './os.png'
import CN from './CN.jpg'



  const course=[
    {
      name:"Database Managenment System",
      pic:dbms,
    },
    {
      name:"Operatin System",
      pic:OS,
    },
    {
      name:"Computer Network",
      pic:CN,
    },
  ]

const Course = () => {
  return (<>
    <div className='cde' id="course1">
      <h1 className='mt-20 ml-40 font-bold text-2xl underline  hover:text-3xl transition-all  duration-500 ski-heading'
       >COURSE</h1>
      <div className=' skills flex justify-self-center mt-12  justify-center  h-auto w-2/3 flex-wrap p-4'
       >
    {
      course.map((data)=>{
        return(
        <div className='item w-56 border-4 border-yellow-400   font-bold text-2xl  bg-yellow-950 h-64 border-3 rounded-t-3xl rounded-l-3xl  m-8' 
        data-aos="flip-right"
        data-aos-duration="1000">  
          <div >
         <img className=' h-20 w-20 ml-14 rounded-lg border-4 border-yellow-500' src={data.pic} alt="sorry"/>
         <h1>{data.name}</h1>      
         </div>
         </div>
        )
      })
    }
    </div>
    </div>
    </>
  )
}

export default Course