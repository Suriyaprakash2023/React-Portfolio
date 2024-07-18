import { ThemeProvider } from "styled-components";
import { useState } from "react";
// import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './components/utils/Themes'
import Navbar from "./components/Navbar/Index";
// import React from 'react';
import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection/index";
import About from "./components/About/Index";
import Skills from "./components/Skills/index";
import Projects from "./components/Projects/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";
import Experience from "./components/Experience/index";
import Education from "./components/Education/index";
import ProjectDetails from "./components/ProjectDetails/index";
import styled from "styled-components";



const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)

  return (
    <div>
     
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </ThemeProvider> 

   
    </div>
  )
}

export default App
