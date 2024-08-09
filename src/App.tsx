import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import './App.css'


import { Home } from '../Home.tsx';
import { About } from '../About.tsx';
import { Projects } from '../Projects';
import { Github } from '../Github.tsx';
import { Linkedin } from  '../Linkedin';
import { Contact } from '../Contact';




function App(): React.ReactElement {
  return (
    <Router>
      <div className={cn('min-h-screen flex flex-col')}>
        {/* Header/Navigation */}
        <header className={cn('bg-primary text-primary-foreground py-4 px-6 shadow-md')}>
          <nav className={cn('flex justify-between items-center')}>
            <Link to="/" className={cn('font-bold text-xl')}>
              My Portfolio
            </Link>
            <ul className={cn('flex space-x-4')}>
              <li>
                <Link to="/home" className={cn('hover:text-primary')}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={cn('hover:text-primary')}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className={cn('hover:text-primary')}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className={cn('hover:text-primary')}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className={cn('flex-1 py-8 px-6')}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Linkedin" element={<Linkedin />} />
            <Route path="/Github" element={<Github />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className={cn('bg-primary text-primary-foreground py-4 px-6 mt-auto')}>
          <p className={cn('text-center')}>© 2023 Your Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;