import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#030612] border-t border-white/5 py-10 px-4 sm:px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-[#915eff] flex items-center justify-center font-bold text-xs text-white">
              {PERSONAL_INFO.initial}
            </div>
            <span className="text-white font-bold text-sm tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
              AI Data Analyst
            </span>
          </div>

          <p className="text-xs text-[#aaa6c3] mt-2 text-center md:text-left">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Engineered with React, Three.js & Tailwind CSS.
          </p>
        </div>

        {/* Telemetry Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#100d25] border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Status: Available for Full-Time Roles</span>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Mail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-[#100d25] hover:bg-[#151030] border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-all hover:scale-105"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
