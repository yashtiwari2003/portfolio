import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import InteractiveDataDashboard from './components/InteractiveDataDashboard';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsCanvas from './components/canvas/StarsCanvas';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ThreeJS / Canvas error handled:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <div className="relative z-0 bg-[#050816] min-h-screen text-white overflow-hidden">
      {/* Background 3D Stars Canvas */}
      <ErrorBoundary>
        <StarsCanvas />
      </ErrorBoundary>

      {/* Main Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <InteractiveDataDashboard />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        
        {/* Contact with background starfield depth */}
        <div className="relative z-0">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
