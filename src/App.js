/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav'
// import Gallery from './components/Portfolio'
import About from './components/About'
import Header from './components/Header'
// import Footer from './components/Footer'
// import Resume from './components/Resume'
// import Contact from './components/Contact'


function App() {

  const [nav] = useState([
    'About Me',
    'Portfolio',
    'Contact',
    'Resume'
   ]);
   

   const [option, setOption] = useState(nav[0]);

   useEffect(() => {
     document.title = `Guled - ${option}`;
   })
   
   const navOption = (page) => setOption(page)
 
   useState(() => {
     navOption('About')
   })
  

  return (
    <>
    <Nav navOption={navOption} option={option} setOption={setOption}>
      option={option}
      </Nav>
      <Header />
{option === 'About' && (<About />)}
{/* {option === 'Portfolio' && (<Portfolio />)}
{option === 'Contact Me' && (<Contact />)} */}
{/* {option === 'Resume' && (<Resume />)} */}
{/* <Footer /> */}
</>
);
}

export default App;