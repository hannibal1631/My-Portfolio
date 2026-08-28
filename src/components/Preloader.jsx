import { useState } from 'react';
import preloader from '/videos/preloader.webm'

const Preloader = ({ onComplete }) => {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleVideoEnd = () => {
    setIsLeaving(true);

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
        transition-opacity duration-500 ease-out
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
          max-w-[1100px]
          h-auto
          object-contain
          md:w-[85vw]
          lg:w-[75vw]
          drop-shadow-[0_0_15px_rgba(0,255,100,0.25)]
        '
      >
        <source
          src={preloader}
          type='video/webm'
        />
      </video>
    </div>
  );
};

export default Preloader;
