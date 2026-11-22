import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="p-[1px] rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-transparent hover:from-cyan-500/50 hover:to-indigo-500/50 transition-all duration-300 shadow-xl group"
    >
      <div className="bg-[#100d25] rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden backdrop-blur-xl border border-white/5">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500" />

        <div>
          {/* Header row: Category & Timeline */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full font-medium">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
              <Calendar size={13} className="text-gray-400" />
              <span>{project.timeline}</span>
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-white text-xl sm:text-2xl font-extrabold tracking-tight group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="mt-3 text-[#aaa6c3] text-sm leading-relaxed">
            {project.summary}
          </p>

          {/* Metric Badges */}
          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-[#050816]/80 p-3 rounded-xl border border-white/5 text-center flex flex-col justify-center"
              >
                <span className="text-base sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#915eff]">
                  {m.value}
                </span>
                <span className="text-[10px] font-mono text-gray-400 mt-0.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Key Engineering Features */}
          <div className="mt-6 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold flex items-center gap-1.5">
              <Sparkles size={13} className="text-cyan-400" />
              <span>Key Deliverables & Architecture:</span>
            </h4>
            {project.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Tags & Action Links */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#050816] text-cyan-300 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Source on GitHub"
              className="p-2.5 rounded-xl bg-[#050816] hover:bg-[#151030] border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-white transition-all hover:scale-105"
            >
              <Github size={16} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Project Details"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <span>Explore Repo</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          PROVEN TRACK RECORD
        </p>
        <h2 className="text-white font-extrabold text-3xl sm:text-5xl mt-1 tracking-tight">
          Featured Projects<span className="text-[#915eff]">.</span>
        </h2>
        <p className="mt-3 text-[#aaa6c3] text-sm sm:text-base max-w-2xl">
          Real-world analytics pipelines and automated diagnostic platforms built on tens of thousands of production records.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
