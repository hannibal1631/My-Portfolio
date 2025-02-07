import React from 'react';
import projectLogo from './logo/projects.png';

const projects = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300', // Replace with actual screenshot URL
    title: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    title: 'Project Two',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300',
    title: 'Project Two',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300',
    title: 'Project Two',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    liveLink: '#',
    repoLink: '#',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div
      id='projects'
      className='bg-[#1a2b1e] flex flex-col md:flex-row items-center justify-between w-full min-h-screen p-6 border-b-1 border-green-700'
    >
      {/* Left Image */}
      <div className='flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0'>
        <img
          src={projectLogo}
          alt='projects logo'
          className='max-w-xs md:max-w-135'
        />
        <h2 className='text-2xl md:text-3xl font-bold uppercase text-green-400 text-center my-4 md:my-6'>
          Projects
        </h2>
      </div>

      {/* Project Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:w-1/2 w-full max-w-3xl'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='shadow-lg rounded-2xl bg-green-800 border border-green-600 p-3 md:p-4 w-full max-w-xs mx-auto md:max-w-none'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-36 md:h-40 object-cover rounded-lg border-2 border-green-600'
            />
            <h3 className='text-lg md:text-xl font-semibold mt-4 text-green-300'>
              {project.title}
            </h3>
            <p className='text-green-400 mt-2 text-sm md:text-base'>
              {project.description}
            </p>
            <div className='flex flex-col gap-2 mt-4'>
              <a
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full text-center py-2 bg-green-700 hover:bg-green-600 text-green-200 border border-green-500 rounded-md'
              >
                Live Page
              </a>
              <a
                href={project.repoLink}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full text-center py-2 bg-green-900 hover:bg-green-800 text-green-300 border border-green-600 rounded-md'
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
