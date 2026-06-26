import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Differentials from './components/sections/Differentials';
import Pilot from './components/sections/Pilot';
import Equipment from './components/sections/Equipment';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div id="topo" className="site-parallax-bg min-h-screen overflow-x-hidden bg-neutral-950 text-white selection:bg-sky-300 selection:text-neutral-950">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Differentials />
        <Pilot />
        <Equipment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
