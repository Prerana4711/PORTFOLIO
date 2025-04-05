import React from 'react'
import css from './css.png'
import html from './html.png'
import react from './react.png'
import javascript from './javascript.png'
import node from './node.png'
import mongodb from './mongodb.png'
import bootstrap from './bootstrap.jpeg'
import tailwind from './tailwind.jpeg'
import typescript from './typescript.jpeg'
import leetcode from './leetcode.jpeg'
import git from './git.jpg'
import github from './github.jpg'
import sql from './sql.jpg'



  const pura=[
    {
      name:"HTML",
      pic:html,
    },
    {
      name:"CSS",
      pic:css,
    },
    {
      name:"Tailwind CSS",
      pic:tailwind,
    },
    {
      name:"Bootstrap",
      pic:bootstrap,
    },
    {
      name:"JavaScript",
      pic:javascript,
    },
    {
      name:"TypeScript",
      pic:typescript,
    },
    {
      name:"React js",
      pic:react,
    },
    {
      name:"Node.js",
      pic:node,
    },
    {
      name:"MongoDB",
      pic:mongodb,
    },
    {
      name:"SQL",
      pic:sql,
    },
    {
      name:"Git",
      pic:git,
    },
    {
      name:"Github",
      pic:github,
    },
    {
      name:"Problem Solving",
      title:"DSA,C++,Python",
      pic:leetcode,
      link:" https://leetcode.com/u/prerana4711/"
     
    },


  ]

const Skills = () => {
  return (<>
    <div className='abc ' id="skills1">
      <h1 className='mt-20 ml-40 font-bold text-2xl underline  hover:text-3xl transition-all  duration-500 ski-heading'
        >SKILLS</h1>
      <div className=' skills flex justify-self-center mt-12  justify-center  h-auto w-2/3 flex-wrap p-4'
       >
    {
      pura.map((data)=>{
        return(
        <div className='item w-56 border-4 border-yellow-400   font-bold text-2xl  bg-black h-60 border-3 rounded-t-3xl rounded-l-3xl  m-8' 
        data-aos="flip-left"
        data-aos-duration="1000">
          <a href={data.link} target="_blank">
          <div >
         <img className=' h-20 w-20 ' src={data.pic} alt="sorry"/>
         <h1>{data.name}</h1>
         <h1>{data.title}</h1>
        
        
         </div>
         </a>
        
         
         </div>
        )
      })
    }
    </div>
    </div>
    </>
  )
}

export default Skills
