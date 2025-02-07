import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <>
      <Header />
      <main className='pt-12'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <ContactMe />
      </main>
    </>
  );
}

export default App;
