import React from 'react';
import aboutMe from './logo/about-me.png';

function About() {
  return (
    <div
      id='about'
      className='bg-[#1a2b1e] w-full min-h-screen flex flex-col lg:flex-row justify-evenly items-center border-b-1 border-green-700 px-6 lg:px-20'
    >
      {/* Left Section: Image */}
      <div className='w-full lg:w-[40%] flex flex-col items-center justify-center mb-6 lg:mb-0'>
        <img
          className='w-[150px] h-[200px] lg:w-[300px] lg:h-[450px]'
          src={aboutMe}
          alt='Your Image'
        />
        <h2 className='text-2xl md:text-3xl font-bold uppercase text-lime-400 text-center my-4 md:my-6 tracking-wide'>
          About Me
        </h2>
      </div>

      {/* Right Section: About Me Text */}
      <div className='text-left uppercase max-w-2xl'>
        <p className='text-lime-400 text-lg lg:text-2xl'>
          I’m a self-taught
          <span className='text-amber-500 font-semibold'> Front-End Developer</span> with a
          deep passion for crafting seamless, responsive web experiences. What
          drives me is the challenge of turning creative designs into
          interactive, pixel-perfect websites that work flawlessly across all
          devices. From mastering <span className='text-amber-500 font-semibold'>HTML</span>,{' '}
          <span className='text-amber-500 font-semibold'>CSS</span>, and{' '}
          <span className='text-amber-500 font-semibold'>JavaScript</span> to exploring the
          latest in <span className='text-amber-500 font-semibold'>React.js</span> and{' '}
          <span className='text-amber-500 font-semibold'>Tailwind CSS</span>, I’m always
          pushing myself to grow.
        </p>
        <p className='text-lime-400 text-lg lg:text-2xl mt-4'>
          Though I don’t have a formal degree in computer science, my journey
          has been fueled by curiosity, hands-on learning, and the relentless
          pursuit of improvement. I’m always excited to take on new challenges
          and build something amazing from the ground up.
        </p>
      </div>
    </div>
  );
}

export default About;
