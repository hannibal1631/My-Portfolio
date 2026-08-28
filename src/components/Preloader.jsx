import { useState } from 'react';
import preloader from '/videos/preloader.webm';

const Preloader = ({ onComplete }) => {
  const [isLeaving, setIsLeaving] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  const handleVideoEnd = () => {
    // starts the flash animation and stays visible for a moment
    setShowFlash(true);

    setTimeout(() => {
      setIsLeaving(true);
    }, 120);

    // preloader finishes and portfolio is revealed
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-hidden
        bg-[#020b04]
        transition-opacity duration-150
        ${isLeaving ? 'opacity-0' : 'opacity-100'}
      `}
    >
      <video
        autoPlay
        muted
        playsInline
        preload='auto'
        onEnded={handleVideoEnd}
        className='
          w-[95vw]
          h-auto
          object-contain
            
          md:w-screen
          md:h-screen
          md:object-cover
        '
      >
        <source src={preloader} type='video/webm' />
      </video>

      {/* crt boot flash */}
      <div
        className={`
    pointer-events-none
    absolute inset-0
    flex items-center
    transition-opacity duration-75
    ${showFlash ? 'opacity-100' : 'opacity-0'}
  `}
      >
        <div className='h-[2px] w-full bg-[#b6ffb0]' />

        <div className='absolute inset-0 bg-[#b6ffb0]/70' />
      </div>
    </div>
  );
};

export default Preloader;
