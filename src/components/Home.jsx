import pip from './logo/thumbsUp.png';
import resume from '../assets/resume.pdf';

function Home() {
  return (
    <div
      id='home'
      className='bg-[#1a2b1e] w-full min-h-screen flex flex-col lg:flex-row justify-evenly items-center border-b-1 border-green-700 px-6 lg:px-20'
    >
      {/* Left Section: Text */}
      <div className='text-center uppercase lg:text-left max-w-xl'>
        <h4 className='text-lime-500 text-sm font-semibold animate-pulse mb-6'>&gt; Initializing fallout protocol...</h4>
        <h3 className='text-lime-500 text-lg lg:text-2xl font-semibold tracking-wider mb-2'>
          Hey, I'm
        </h3>
        <h1 className='text-green-400 text-3xl lg:text-6xl font-bold mb-4'>
          Rupak Mukherjee
        </h1>
        <p className='text-lime-500 text-sm lg:text-xl leading-relaxed mb-3'>
          A Front-End Developer crafting seamless & responsive web experiences.
        </p>
        <button className='inline-flex items-center justify-center transition-all text-lime-400/60 px-3 py-2 border-dashed border-2 text-sm md:text-xl uppercase cursor-pointer hover:text-lime-400 hover:bg-lime-400/10'>
          <a href={resume} download={resume.pdf} target='_blank'>
            Download Resume
          </a>
        </button>
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
