import React from 'react';
import projectLogo from './logo/projects.png';

const projects = [
  {
    id: 1,
    image: '/projectImages/WIP.jpg',
    title: 'Task and Furious',
    description:
      'Keep track of your tasks and live your life a quarter mile at a time',
    liveLink: 'https://task-and-furious.vercel.app/',
    repoLink: 'https://github.com/hannibal1631/Task-And-Furious',
  },
  {
    id: 2,
    image: '/projectImages/volt-landing-page.png',
    title: 'VOLT Landing Page',
    description: 'Drink VOLT and feel the thunder in your veins',
    liveLink: 'https://volt-landing-page-black.vercel.app/',
    repoLink: 'https://github.com/hannibal1631/VOLT-landing-page',
  },
  {
    id: 3,
    image: '/projectImages/pick-your-absolute-cinema.png',
    title: 'Pick Your Absolute Cinema',
    description: 'Search for recommendation of Absolute Cinemas',
    liveLink: 'https://pick-your-absolute-cinema.vercel.app/',
    repoLink: 'https://github.com/hannibal1631/absolute-cinema-picker',
  },
  {
    id: 4,
    image: '/projectImages/find-your-fit.png',
    title: 'Find Your Fit',
    description: 'An online store to find your fit and show off your drip',
    liveLink: 'https://find-your-fit-sand.vercel.app/',
    repoLink: 'https://github.com/hannibal1631/find-your-fit',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div
      id='projects'
      className='bg-[#1a2b1e] uppercase flex flex-col md:flex-row items-center justify-between w-full min-h-screen p-6 border-b-1 border-green-700'
    >
      {/* Left Image */}
      <div className='flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0'>
        <img
          src={projectLogo}
          alt='projects logo'
          className='max-w-xs md:max-w-135'
        />
        <h2 className='text-2xl md:text-3xl font-bold text-lime-400 text-center my-4 md:my-6 tracking-wide'>
          Projects
        </h2>
      </div>

      {/* Project Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:w-1/2 w-full max-w-3xl'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='shadow-lg border border-lime-400/35 p-3 md:p-4 w-full max-w-xs mx-auto md:max-w-none opacity-65 hover:opacity-100 hover:border-lime-400 hover:bg-lime-400/10 transition-all duration-200 cursor-pointer'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-36 md:h-40 object-cover border border-lime-400'
            />
            <h3 className='text-lg md:text-xl font-semibold mt-4 text-lime-400'>
              {project.title}
            </h3>
            <p className='text-lime-400/90 mt-2 text-sm md:text-base'>
              {project.description}
            </p>
            <div className='flex flex-col gap-2 mt-4'>
              <a
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full text-center py-2 bg-lime-500 text-black border border-lime-400 hover:bg-lime-400'
              >
                Live Page
              </a>
              <a
                href={project.repoLink}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full text-center py-2 transition-all text-lime-400/60 hover:text-lime-400 hover:bg-lime-400/10 border border-lime-400'
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
