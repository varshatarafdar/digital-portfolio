import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans">
        <Navbar />
        <main className="flex flex-row px-8 py-4 gap-8">
          <section className="flex-1 space-y-20">
            <Home />
            <About />
            <Projects />
          </section>
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-start gap-12">
            <img
              src="/profile.jpg"
              alt="Varsha Tarafdar"
              className="w-[300px] h-[300px] object-cover rounded-2xl shadow-xl"
            />
            <Contact />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;