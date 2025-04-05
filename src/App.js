import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import Navbar from './Navbar'
import Home from './Home'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import Project from './Project'
import Course from './Course'
import Aos from 'aos'
import "aos/dist/aos.css"

const App=()=>{
    useEffect(()=>{
        Aos.init();
    },[])
    return(<div className=' text-amber-100'>
        <Navbar/>
         <Home/>
         <Experience/>
         <Skills/>
         <Project/>
         <Course/>
         <Contact/>
    
       
       
      

        </div>
    );
}
   
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render( <App/>)
