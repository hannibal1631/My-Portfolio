import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNpm,
  FaGitAlt,
  FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss, SiReactrouter, SiCanva } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { motion } from 'framer-motion';
import skillPng from './logo/skills.png';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className='text-lime-400 text-5xl' /> },
  { name: 'CSS', icon: <FaCss3Alt className='text-lime-400 text-5xl' /> },
  { name: 'JavaScript', icon: <FaJs className='text-lime-400 text-5xl' /> },
  { name: 'ReactJS', icon: <FaReact className='text-lime-400 text-5xl' /> },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className='text-lime-400 text-5xl' />,
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap className='text-lime-400 text-5xl' />,
  },
  {
    name: 'React Router',
    icon: <SiReactrouter className='text-lime-400 text-5xl' />,
  },
  {
    name: 'React Native',
    icon: <TbBrandReactNative className='text-lime-400 text-5xl' />,
  },
  {
    name: 'NPM',
    icon: <FaNpm className='text-lime-400 text-5xl' />,
  },
  {
    name: 'GIT',
    icon: <FaGitAlt className='text-lime-400 text-5xl' />,
  },
  {
    name: 'Figma',
    icon: <FaFigma className='text-lime-400 text-5xl' />,
  },
  {
    name: 'Canva',
    icon: <SiCanva className='text-lime-400 text-5xl' />,
  },
];

const Skills = () => {
  return (
    <section
      id='skills'
      className='bg-[#1a2b1e] flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-screen p-6 border-b-1 border-green-700'
    >
      {/* Skills Section */}
      <motion.div
        className='grid place-items-center grid-cols-2 md:grid-cols-4 gap-6 md:gap-x-0 md:w-1/2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center border-2 border-lime-400/35 rounded-xl p-4 w-25 h-25 lg:w-35 lg:h-35 transition-all duration-300 opacity-65 hover:opacity-100 hover:border-lime-400 hover:bg-lime-400/10 cursor-pointer'
          >
            {skill.icon}
            <p className='text-lime-400 mt-2 text-sm line-clamp-1'>
              {skill.name}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Image Section */}
      <motion.div
        className='md:w-1/2 flex flex-col items-center justify-center mt-6 md:mt-0'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={skillPng}
          alt='Skills'
          className='w-[400px] h-[350px] lg:w-[600px] lg:h-[500px]'
        />
        <h2 className='text-2xl md:text-3xl font-bold uppercase text-lime-400 text-center my-4 md:my-6 tracking-wide'>
          Skills
        </h2>
      </motion.div>
    </section>
  );
};

export default Skills;
