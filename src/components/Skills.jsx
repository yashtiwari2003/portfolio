import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Table,
  Binary,
  Database,
  Sigma,
  FileSpreadsheet,
  PieChart,
  Sheet,
  LayoutDashboard,
  Presentation,
  TrendingUp,
  SearchCheck,
  Activity,
  Sliders,
  Bot,
  ShieldCheck,
  Network,
  DatabaseZap,
  Zap,
  Server,
  Layers,
  GitBranch,
  Container,
  Send,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const skillIcons = {
  Code2,
  Table,
  Binary,
  Database,
  Sigma,
  FileSpreadsheet,
  PieChart,
  Sheet,
  LayoutDashboard,
  Presentation,
  TrendingUp,
  SearchCheck,
  Activity,
  Sliders,
  Bot,
  ShieldCheck,
  Network,
  DatabaseZap,
  Zap,
  Server,
  Layers,
  GitBranch,
  Container,
  Send
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          MY EXPERTISE & STACK
        </p>
        <h2 className="text-white font-extrabold text-3xl sm:text-5xl mt-1 tracking-tight">
          Technical Arsenal<span className="text-[#915eff]">.</span>
        </h2>
        <p className="mt-3 text-[#aaa6c3] text-sm sm:text-base max-w-2xl">
          Core technologies, statistical libraries, and business intelligence suites deployed across end-to-end data workflows.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <div className="mt-10 flex flex-wrap gap-2.5 border-b border-white/10 pb-4">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.title}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
              activeTab === idx
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-[#100d25] text-gray-400 hover:text-white hover:bg-[#151030] border border-white/5'
            }`}
          >
            <span>{cat.title}</span>
            <span className="text-[10px] font-mono opacity-80 px-1.5 py-0.5 rounded-full bg-black/30">
              {cat.skills.length}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_CATEGORIES[activeTab].skills.map((skill, index) => {
          const IconComp = skillIcons[skill.icon] || CheckCircle2;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-[#100d25]/90 rounded-2xl p-5 border border-white/5 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md shadow-lg group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:text-white transition-all">
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-gray-400">
                      Verified Competency
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-800/40">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-[#050816] h-2 rounded-full overflow-hidden p-[1px] border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-[#915eff]"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Workflow Architecture Banner */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#100d25] via-[#151030] to-[#100d25] border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Activity size={24} />
          </div>
          <div>
            <h4 className="text-white font-bold text-base">Full-Lifecycle Analytics Pipeline</h4>
            <p className="text-xs text-[#aaa6c3] mt-0.5">
              Ingestion & Cleaning ➔ Statistical Modeling & AI Diagnostics ➔ Executive Power BI Dashboards
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-cyan-300 bg-[#050816]/70 px-4 py-2 rounded-xl border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Production Ready Stack</span>
        </div>
      </div>
    </section>
  );
}
