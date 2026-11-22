import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, ExternalLink, Terminal } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../constants';

export default function Navbar() {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050816]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20">
            <div className="w-full h-full bg-[#050816] rounded-xl flex items-center justify-center font-bold text-lg text-white">
              {PERSONAL_INFO.initial}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[16px] font-bold tracking-tight group-hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-cyan-400/90 tracking-wider uppercase">
              {PERSONAL_INFO.role}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="list-none hidden lg:flex flex-row items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-cyan-400 font-semibold' : 'text-[#aaa6c3]'
              } hover:text-white text-[14px] font-medium transition-colors cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          {/* Resume Link Button */}
          <li>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium text-xs tracking-wide shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <FileText size={14} />
              <span>Resume</span>
              <ExternalLink size={12} className="opacity-75" />
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-medium"
          >
            <FileText size={13} />
            <span>CV</span>
          </a>

          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 rounded-lg bg-[#100d25] border border-white/10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
          >
            {toggle ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Mobile Dropdown Menu */}
          {toggle && (
            <div className="p-6 bg-[#0c0926]/95 backdrop-blur-xl absolute top-20 right-4 left-4 rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-4 z-50">
              <ul className="list-none flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? 'text-cyan-400 font-bold' : 'text-[#aaa6c3]'
                    } text-[15px] font-medium cursor-pointer hover:text-white transition-colors`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`} className="block py-1">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-black font-semibold text-xs"
                >
                  <FileText size={14} />
                  <span>View Resume</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
