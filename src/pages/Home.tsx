import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="hero bg-base-100 flex flex-col items-center justify-start mt-20 overflow-hidden">
      <div className="text-center m-10 mt-20 justify-center mb-20">
        <h1 className="text-6xl font-bold mt-20">Hi, I am Sidharth Hejamadi</h1>
        <p className="text-xl mt-3 font-light ">A Computer Scientist from Champaign</p>
        <Link to="/about">
        <button className='btn btn-neutral mt-3'>Learn More</button>
        </Link>
      </div>
    </div>
  );
}