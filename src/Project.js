import React from 'react'

import taskimage from './tasktrack.jpg'
import foodieeimage from './foodieee.jpg'
import ganaimage from './ganaimage.jpg'
import cryptax from './desktop.png'
  

const data1 =
[
  {  id:1,
    title:"FOODIEE",
    description:"Foodiee app lets users explore delicious recipes & track their favorite dishes easily.",
    
    demoLink:"https://drive.google.com/file/d/1gdldN31aoMaq0K7_foltn6g4GA6mL-69/view?usp=sharing",
    codeLink:"https://github.com/Prerana4711/Foodieeeee",
    image:foodieeimage
},
{  id:2,
    title:"TASK-TRACKER",
    description:"Task Tracker is a minimal app to create, manage, and track daily tasks with ease.",
    demoLink:"https://gleaming-bonbon-169507.netlify.app/",
    codeLink:"https://github.com/Prerana4711/Task-Tracker1",
    image:taskimage
},
{  id:3,
    title:"GANA-APP",
    description:"Gana App is a simple music streaming app to play and manage your favorite songs anytime.",
    demoLink:"https://nimble-dango-f0f90b.netlify.app/",
    codeLink:"https://github.com/Prerana4711/GANA-APP",
    image:ganaimage
},
{  id:4,
    title:"CRYPTEX",
    description:"Cryptex is a project , I built  to enhance my  skills in web design and CSS.",
    demoLink:"https://incomparable-boba-2409b2.netlify.app/",
    codeLink:"https://github.com/Prerana4711/CRYPTEX",
    image:cryptax
},

]



const Project = () => {
    return (<div className='abcd' id="project1">
        <h1 className='mt-20 ml-40 project1 font-bold text-2xl  underline hover:text-3xl transition-all  duration-500 '
         >PROJECTS</h1>
        <div className='  flex justify-self-center mt-4  justify-center h-auto w-2/3 flex-wrap    p-4' >
          {
            
            data1.map((data)=>{
                
                return(
                <div className='h-auto pb-2 w-64 m-8 mt-12  border-4 project pro-div justify-self-center justify-center text-center border-yellow-400 rounded-t-3xl rounded-l-3xl bg-stone-700'
                data-aos="zoom-in"
                data-aos-duration="1000">
                    <img className='h-40 w-56 justify-self-center mt-3 rounded-2xl f border-4 border-gray-700' src={data.image}/>
                    <h1 className='font-bold text-2xl text-yellow-400 underline'>{data.title}</h1>
                    <h3>{data.description}</h3>
                    <div className='flex justify-evenly justify-items-center font-bold  mt-2'>
                        <div className='bg-yellow-400  h-10 pt-1 w-16 rounded-xl border-4 border-yellow-600 '> 
                            <a  href={data.demoLink} target='_blank'>Demo</a>
                        </div>
                        <div className='bg-blue-600 h-10  pt-1 w-16 rounded-xl border-4 border-blue-900'>
                            <a  href={data.codeLink} target="_blank">Code</a>
                        </div>
                    </div>
                   
                    </div>
                   
                )   
            })
           
          }
     </div>
     </div>
    );
  };
  
  export default Project;
