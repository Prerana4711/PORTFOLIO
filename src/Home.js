import React , {useRef , useEffect}  from 'react'
import Photo from './profile.jpg'
import  Typed from 'typed.js'




const Home = () => {
  useEffect(()=>{
    const typed = new Typed("#typed-text",{
      strings:["Hey , I am Prerana Gupta " ,
        "A Front-End developer",
        "You can download my resume  here "
      ],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    });
    return()=>{
      typed.destroy()
    }
  },[])

  return ( <div className='mt-40 ' id="home1">
            <h1 className='mt-20 ml-40 project1 font-bold text-2xl   underline hover:text-3xl transition-all  duration-500 '
              >HOME</h1>
         <div className='w-5/6 mt-4 home-center  justify-self-center flex justify-between'>
      
         
          <div className='left-home text-center   ml-12   mt-20 justify-self-center py-4 justify-center w-2/5  border-4 h-40 border-yellow-400 rounded-t-full bg-blue-900 rounded-l-full'
         >
           <div className='text-2xl  l-h mt-2 text-amber-200 pt-2'>
              <span className='text-2xl font-bold' id="typed-text"></span>
          </div>
        
          <a className='font-bold l-h text-2xl my-4 underline text-yellow-600' href='/'>Download Resume</a>
            
          </div>
        
        <div className='right-home mr-12 h-80 w-80 border-4  border-yellow-400 rounded-full ' > 
            <img src={Photo} className='right-home-image h-80 w-80 border-4 border-yellow-4 rounded-full '></img>
            </div>
      
        </div>
        </div>
      
  )
}

export default Home
