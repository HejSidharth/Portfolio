import React from 'react'
import project1 from '../assets/sidharth.jpg'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <div className='mt-20 flex'>
      <div className="hero mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-3xl">
          <img src={project1} className="w-48 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Sidharth Hejamadi</h1>
            <p className="py-6">As a Computer Science + Statistics student at UIUC, I thrive at the intersection of technology and data-driven insights. Currently immersed in the vibrant community of Hack4Impact, I'm passionate about harnessing my skills in front-end development and UI design to create meaningful solutions that address real-world challenges.</p>
            <div className='flex gap-3'>
            <a href="https://github.com/HejSidharth" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sidharth-hejamadi/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:sh81@illinois.edu"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}