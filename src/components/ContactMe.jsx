import React from 'react';
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGithubSquare,
} from 'react-icons/fa';
import { FaXTwitter, FaDiscord } from 'react-icons/fa6';
import { SiFrontendmentor } from 'react-icons/si';
import pipboy from './logo/pipboy.png';

export default function ContactMe() {
  return (
    <div
      id='contact'
      className='bg-[#1a2b1e] flex flex-col md:flex-row items-center min-h-80 gap-8 p-6 text-green-500'
    >
      {/* Image Section */}
      <div className='w-full md:w-1/3 flex flex-col justify-center items-center'>
        <img src={pipboy} alt='Contact' className='w-40 h-40' />
        <h2 className='text-2xl md:text-3xl font-bold uppercase text-green-400 text-center my-4 md:my-6'>
          Contact Me
        </h2>
      </div>

      {/* Contact Grid */}
      <div className='w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <ContactCard
          icon={<FaLinkedin />}
          label='LinkedIn'
          link='https://www.linkedin.com/in/rupak-mukherjee-725ba322b/'
        />
        <ContactCard
          icon={<FaXTwitter />}
          label='X (Twitter)'
          link='https://www.twitter.com/@hannibal1631'
        />
        <ContactCard
          icon={<FaGithubSquare />}
          label='GitHub'
          link='https://github.com/hannibal1631'
        />
        <ContactCard
          icon={<FaDiscord />}
          label='Discord'
          link='https://discord.com/users/hannibal_lecter1631'
        />
        <ContactCard
          icon={<SiFrontendmentor />}
          label='FrontendMentor'
          link='https://www.frontendmentor.io/profile/hannibal1631'
        />
        <ContactCard
          icon={<FaEnvelope />}
          label='Email'
          link='mailto:mukherjeerupak860@gmail.com'
        />
        <ContactCard
          icon={<FaPhone />}
          label='Phone'
          link='tel:+91-7047604214'
        />
        {/* Placeholder for future links */}
        <div className='hidden sm:block'></div>
        <div className='hidden sm:block'></div>
      </div>
    </div>
  );
}

function ContactCard({ icon, label, link }) {
  let hoverText = label; // Default hover text

  if (link.startsWith('mailto:')) {
    hoverText = 'Send an Email';
  } else if (link.startsWith('tel:')) {
    hoverText = 'Call Now';
  } else if (link.startsWith('https://')) {
    hoverText = 'Visit Profile';
  }

  return (
    <a
      href={link}
      className='flex items-center gap-4 p-4 rounded-md bg-green-900 bg-opacity-20 border border-green-500 transition duration-300 hover:bg-[#1a2b1e] hover:bg-opacity-30 relative'
      target='_blank'
      rel='noopener noreferrer'
    >
      <span className='text-2xl'>{icon}</span>
      <span className='text-lg'>{label}</span>
      <span className='absolute inset-0 flex items-center justify-center rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 bg-[#1a2b1e]/50 bg-opacity-40 backdrop-blur-md text-green-500 text-lg p-2'>
        {hoverText}
      </span>
    </a>
  );
}
