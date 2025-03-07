import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ContactMe from './components/ContactMe';
import { Slide } from 'react-awesome-reveal';

function App() {
  useEffect(() => {
    // Force browser to not restore scroll
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className='mt-12'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
