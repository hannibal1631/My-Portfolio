import React from 'react';
import certificateLogo from './logo/certificates.png';
import resWebCert from './certificates/res-web.jpg';
import gitFun from './certificates/git-hub-lab.jpg';
import reactBasics from './certificates/react-basics.jpg';
import advReact from './certificates/advanced-react.jpg';

const certificates = [
  { id: 1, name: 'React Basics by Coursera', image: reactBasics },
  {
    id: 2,
    name: 'Advanced React by Coursera',
    image: advReact,
  },
  { id: 3, name: 'Responsive Web Design by FreeCodeCamp', image: resWebCert },
  { id: 4, name: 'Git, GitHub and Gitlab Fundamentals', image: gitFun },
];

const Certificates = () => {
  return (
    <div
      id='certificates'
      className='bg-[#1a2b1e] flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-screen p-6 border-b-1 border-green-700'
    >
      {/* Certificate Grid */}
      <div className='grid grid-cols-1 place-items-center md:grid-cols-2 gap-4 flex-1 px-10'>
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className='bg-[#1a2b1e] border border-green-400 w-fit rounded-lg p-2'
          >
            <img
              src={cert.image}
              alt={cert.name}
              className='w-full rounded-lg max-w-xs md:max-w-sm lg:max-w-md mx-auto'
            />
            <h3 className='text-lg text-center text-green-500 mt-2'>
              {cert.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Image on Right */}
      <div className='flex flex-col items-center justify-center w-64 lg:w-1/2 mb-6 md:mb-0'>
        <img
          src={certificateLogo}
          alt='Certificates'
          className='w-full lg:w-130'
        />
        <h2 className='text-2xl md:text-3xl font-bold uppercase text-green-400 text-center my-4 md:my-6'>
          Certificates
        </h2>
      </div>
    </div>
  );
};

export default Certificates;
