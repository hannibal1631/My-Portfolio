import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import vaultTec from './logo/vault-tec.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact Me', href: '#contact' },
];

export default function Header() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(link.name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='bg-[#1a2b1e]/60 backdrop-blur-md shadow-lg p-4 border-b-2 border-lime-400 fixed w-full top-0 z-50'>
      <div className='w-full px-4 mx-auto flex justify-between items-center'>
        {/* Logo */}
        <img
          src={vaultTec}
          alt='vault-tec'
          className='w-25 cursor-pointer'
          onClick={() =>
            document
              .querySelector('#home')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        />

        {/* Hamburger Menu - Mobile */}
        <button
          className='lg:hidden text-lime-400 focus:outline-none'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Navigation */}
        <nav
          className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-[#1a2b1e] lg:bg-transparent transition-all duration-300 ${
            menuOpen ? 'block' : 'hidden lg:flex'
          }`}
        >
          <ul className='lg:flex lg:space-x-8 text-center'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(link.name);
                    setMenuOpen(false);
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block px-2 py-2 lg:py-0 text-xl uppercase font-semibold transition-all hover:bg-lime-400 hover:opacity-80 hover:text-black tracking-wide ${
                    active === link.name
                      ? 'bg-lime-400 text-black'
                      : 'text-lime-400'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
