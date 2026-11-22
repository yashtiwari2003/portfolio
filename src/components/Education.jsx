import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { EDUCATION } from '../constants';

export default function Education() {
  return (
    <section id="education" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          ACADEMIC FOUNDATION
        </p>
        <h2 className="text-white font-extrabold text-3xl sm:text-5xl mt-1 tracking-tight">
          Education & Background<span className="text-cyan-400">.</span>
        </h2>
        <p className="mt-3 text-[#aaa6c3] text-sm sm:text-base max-w-2xl">
          Formal engineering training in artificial intelligence, machine learning systems, and computational data science.
        </p>
      </motion.div>

      {/* Main Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 p-[1px] rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-transparent hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 shadow-xl"
      >
        <div className="bg-[#100d25] rounded-3xl p-6 sm:p-10 border border-white/5 relative overflow-hidden backdrop-blur-xl">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {EDUCATION.degree}
                </h3>
                <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#915eff] mt-0.5">
                  Specialization: {EDUCATION.major}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mt-2">
                  <span className="text-white font-medium">{EDUCATION.institution}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-cyan-400" />
                    {EDUCATION.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Scorecard Pill */}
            <div className="flex items-center gap-4 self-start lg:self-center">
              <div className="bg-[#050816] px-5 py-3 rounded-2xl border border-cyan-500/30 text-center">
                <span className="text-[11px] font-mono text-gray-400 block uppercase">
                  Cumulative CGPA
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">
                  {EDUCATION.cgpa}
                </span>
              </div>
              <div className="bg-[#050816] px-4 py-3 rounded-2xl border border-white/5 text-center flex items-center gap-1.5 text-xs font-mono text-gray-300">
                <Calendar size={13} className="text-purple-400" />
                <span>{EDUCATION.duration}</span>
              </div>
            </div>
          </div>

          {/* Key Bullet Highlights */}
          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300 mb-3 flex items-center gap-2">
              <BookOpen size={14} className="text-cyan-400" />
              <span>Academic Focus & Key Takeaways:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {EDUCATION.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#050816]/70 p-4 rounded-2xl border border-white/5 flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed"
                >
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
