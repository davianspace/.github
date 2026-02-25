import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Philosophy from "./components/Philosophy";
import OpenSource from "./components/OpenSource";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Philosophy />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
