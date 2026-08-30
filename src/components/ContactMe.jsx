import { FaLinkedin, FaEnvelope, FaGithubSquare } from 'react-icons/fa';
import { FaXTwitter, FaDiscord } from 'react-icons/fa6';
import { SiFrontendmentor } from 'react-icons/si';
import pipboy from './logo/pipboy.png';

export default function ContactMe() {
  return (
    <div
      id='contact'
      className='bg-[#1a2b1e] w-full flex flex-col md:flex-row items-center gap-8 p-6 text-green-500'
    >
      {/* Image Section */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
        <img src={pipboy} alt='Contact' className='w-40 h-40 md:w-70 md:h-70' />
        <h2 className='text-2xl md:text-3xl font-bold uppercase text-lime-400 text-center my-4 md:my-6'>
          Contact Me
        </h2>
      </div>

      {/* Contact Grid */}
      <div className='w-full md:w-1/2 grid place-items-center grid-cols-2 gap-4 md:gap-x-0'>
        <ContactCard
          icon={<FaLinkedin />}
          label='LinkedIn'
          link='https://www.linkedin.com/in/rupak-mukherjee-fed/'
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
        {/* Placeholder for future links */}
        <div className='hidden sm:block'></div>
        <div className='hidden sm:block'></div>
      </div>
    </div>
  );
}

function ContactCard({ icon, label, link }) {
  return (
    <a
      href={link}
      className='flex flex-col items-center justify-center p-4 w-20 h-20 lg:w-30 lg:h-30 gap-4 border border-lime-400/65 transition-all duration-200 opacity-75 hover:opacity-100 hover:border-lime-400 hover:bg-lime-400/10 hover:underline hover:decoration-dashed cursor-pointer'
      target='_blank'
      rel='noopener noreferrer'
    >
      <span className='text-3xl md:text-5xl text-lime-400'>{icon}</span>
      <span className='hidden md:block md:text-sm line-clamp-1 text-lime-400'>{label}</span>
    </a>
  );
}
