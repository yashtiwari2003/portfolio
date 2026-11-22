import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, ArrowDown, Sparkles, TrendingUp, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import DataGlobeCanvas from './canvas/DataGlobeCanvas';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen mx-auto flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-6rem)]">
        
        {/* Left Column: Intro & Info */}
        <div className="lg:col-span-7 flex flex-row items-start gap-5 z-10">
          {/* Vertical Glowing Guide Line */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#00f2fe]" />
            <div className="w-1 sm:h-80 h-44 bg-gradient-to-b from-cyan-400 via-indigo-600 to-transparent" />
          </div>

          <div className="flex-1">
            {/* Live Telemetry Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#100d25] border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <Cpu size={13} className="text-cyan-400" />
              <span>AI Analytics & Diagnostics Engine</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-extrabold text-white text-4xl sm:text-6xl lg:text-7xl leading-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-[#915eff]">{PERSONAL_INFO.name}</span>
            </motion.h1>

            {/* Subtitle / Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-2 text-xl sm:text-2xl font-semibold text-gray-200 flex items-center gap-2.5 flex-wrap"
            >
              <span className="text-cyan-400 font-mono">▸</span>
              <span>{PERSONAL_INFO.role}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 font-normal">
                B.Tech AIML '26
              </span>
            </motion.div>

            {/* Descriptive Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-[#aaa6c3] text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Specializing in <span className="text-white font-medium">Power BI, Python, and SQL</span> to uncover hidden business patterns, automate root-cause diagnostics, and engineer decision intelligence that drives measurable ROI.
            </motion.p>

            {/* Key Micro-Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#100d25]/90 border border-white/5 text-xs text-gray-300">
                <TrendingUp size={14} className="text-emerald-400" />
                <span><strong className="text-white">100K+</strong> E-Com Orders Analyzed</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#100d25]/90 border border-white/5 text-xs text-gray-300">
                <Sparkles size={14} className="text-cyan-400" />
                <span><strong className="text-white">98%</strong> AI SQL Audit Accuracy</span>
              </div>
            </motion.div>

            {/* CTA Buttons & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>View Analytics Projects</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#100d25] hover:bg-[#151030] border border-cyan-500/30 hover:border-cyan-400 text-white font-medium text-sm transition-all hover:scale-105 flex items-center gap-2"
              >
                <FileText size={16} className="text-cyan-400" />
                <span>Resume (PDF)</span>
              </a>

              <div className="flex items-center gap-2.5 ml-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-xl bg-[#100d25] border border-white/10 hover:border-cyan-400 flex items-center justify-center text-gray-300 hover:text-white transition-all hover:scale-110"
                >
                  <Github size={18} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-xl bg-[#100d25] border border-white/10 hover:border-indigo-400 flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Send direct email"
                  className="w-11 h-11 rounded-xl bg-[#100d25] border border-white/10 hover:border-purple-400 flex items-center justify-center text-gray-300 hover:text-purple-400 transition-all hover:scale-110"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: 3D Data Analytics Canvas */}
        <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[580px] w-full relative z-10 flex items-center justify-center">
          <DataGlobeCanvas />
        </div>
      </div>

      {/* Bouncing Scroll Down Indicator */}
      <div className="absolute xs:bottom-8 bottom-4 w-full flex justify-center items-center pointer-events-auto">
        <a href="#about" aria-label="Scroll to Overview">
          <div className="w-[32px] h-[58px] rounded-3xl border-2 border-cyan-400/40 flex justify-center items-start p-2 hover:border-cyan-400 transition-colors bg-[#050816]/50 backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, 22, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f2fe]"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
