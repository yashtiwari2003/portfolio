import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, CheckCircle, Database } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const icons = [Database, CheckCircle, TrendingUp, Award];

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          QUANTIFIABLE IMPACT
        </p>
        <h2 className="text-white font-extrabold text-3xl sm:text-5xl mt-1 tracking-tight">
          Milestones & Metrics<span className="text-cyan-400">.</span>
        </h2>
        <p className="mt-3 text-[#aaa6c3] text-sm sm:text-base max-w-2xl">
          Empirical validation metrics achieved across high-volume production datasets and root-cause benchmarks.
        </p>
      </motion.div>

      {/* Counter Cards Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACHIEVEMENTS.map((item, idx) => {
          const IconComp = icons[idx % icons.length];

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-[1px] rounded-3xl bg-gradient-to-b from-cyan-500/30 via-white/5 to-transparent hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-xl group"
            >
              <div className="bg-[#100d25] rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between border border-white/5 relative overflow-hidden backdrop-blur-xl">
                {/* Glow backdrop */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    <IconComp size={22} />
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-[#915eff] tracking-tight">
                    {item.count}
                  </div>

                  <h3 className="mt-2 text-white font-bold text-base group-hover:text-cyan-300 transition-colors">
                    {item.label}
                  </h3>
                </div>

                <p className="mt-4 pt-4 border-t border-white/5 text-xs text-[#aaa6c3] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
