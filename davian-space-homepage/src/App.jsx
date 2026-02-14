import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-all duration-700 animate-pageReveal">
        <Navbar />
        <main>
          <Hero />
          <Projects />
        </main>
        <Footer />
      </div>
      <style>{`
        @keyframes pageReveal {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-pageReveal {
          animation: pageReveal 0.6s ease-out;
        }
      `}</style>
    </ThemeProvider>
  );
}

export default App;
