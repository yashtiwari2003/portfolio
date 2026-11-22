import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, BarChart3, Database, Cpu, ArrowUpRight } from 'lucide-react';
import { HIGHLIGHT_CARDS } from '../constants';

const iconMap = {
  BrainCircuit: BrainCircuit,
  BarChart3: BarChart3,
  Database: Database,
  Cpu: Cpu
};

const Card = ({ card, index }) => {
  const IconComponent = iconMap[card.icon] || BarChart3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="w-full p-[1px] rounded-2xl bg-gradient-to-b from-white/15 via-white/5 to-transparent hover:from-cyan-500/50 hover:to-purple-500/50 transition-all duration-300 shadow-xl group"
    >
      <div className="bg-[#100d25] rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden backdrop-blur-xl border border-white/5">
        {/* Glow backdrop on hover */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />

        <div>
          {/* Card Top: Icon & Category */}
          <div className="flex items-center justify-between mb-5">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${card.accent} p-[1.5px] shadow-lg`}>
              <div className="w-full h-full bg-[#0d0a21] rounded-xl flex items-center justify-center text-cyan-300">
                <IconComponent size={26} />
              </div>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded-full">
              Pillar {index + 1}
            </span>
          </div>

          <h3 className="text-white text-xl font-bold tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
            {card.title}
          </h3>
          <p className="text-xs font-mono text-[#915eff] mb-3 font-semibold">
            {card.subtitle}
          </p>

          <p className="text-[#aaa6c3] text-sm leading-relaxed">
            {card.description}
          </p>
        </div>

        <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
          <span>Production Ready</span>
          <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-cyan-400" />
        </div>
      </div>
    </motion.div>
  );
};

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          INTRODUCTION
        </p>
        <h2 className="text-white font-extrabold text-3xl sm:text-5xl mt-1 tracking-tight">
          Overview<span className="text-cyan-400">.</span>
        </h2>
      </motion.div>

      {/* Main Bio Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-[#aaa6c3] text-base sm:text-lg leading-relaxed max-w-4xl"
      >
        <p>
          I am an <strong className="text-white">AI-Powered Data Analyst</strong> with a solid foundation in Artificial Intelligence and Machine Learning from Gyan Ganga Institute of Technology and Sciences. My passion lies at the intersection of <span className="text-cyan-400 font-medium">statistical rigor, machine learning diagnostics, and human-centric data storytelling</span>.
        </p>
        <p className="mt-4">
          Rather than just compiling charts, I build intelligent analytics systems: cleaning and standardizing tens of thousands of records, isolating root causes with <span className="text-white">STL decomposition and MAD z-scores</span>, and building high-trust AI verifiers that audit generated metrics with 98% precision. Whether building executive Power BI dashboards with DAX or deploying Python & SQL pipelines, I turn fragmented numbers into decisive business leverage.
        </p>
      </motion.div>

      {/* 4 Feature Pillar Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {HIGHLIGHT_CARDS.map((card, index) => (
          <Card key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
