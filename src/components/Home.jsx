import React from 'react';
import pip from './logo/thumbsUp.png';

function Home() {
  return (
    <div
      id='home'
      className='bg-[#1a2b1e] w-full h-screen flex flex-col lg:flex-row justify-evenly items-center border-b-1 border-green-700 px-6 lg:px-20'
    >
      {/* Left Section: Text */}
      <div className='text-center uppercase lg:text-left max-w-xl'>
        <h3 className='text-green-600 text-lg lg:text-2xl font-semibold tracking-wider'>
          Hey, I'm
        </h3>
        <h1 className='text-green-800 text-3xl lg:text-6xl font-bold mt-2'>
          Rupak Mukherjee
        </h1>
        <p className='text-green-500 text-sm lg:text-xl mt-4 leading-relaxed'>
          A Front-End Developer crafting seamless & responsive web experiences.
        </p>
      </div>

      {/* Right Section: Image */}
      <img
        className='w-[175px] h-[200px] lg:w-[450px] lg:h-[550px]'
        src={pip}
        alt='ookie dookie'
      />
    </div>
  );
}

export default Home;
