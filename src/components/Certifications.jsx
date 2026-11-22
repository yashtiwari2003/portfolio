import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          VERIFIED INDUSTRY STANDARDS
        </p>
        <h2 className="text-white font-extrabold text-3xl sm:text-5xl mt-1 tracking-tight">
          Certifications<span className="text-[#915eff]">.</span>
        </h2>
        <p className="mt-3 text-[#aaa6c3] text-sm sm:text-base max-w-2xl">
          Accredited credentials validating software foundations and machine learning proficiency.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="p-[1px] rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-transparent hover:from-cyan-500/50 hover:to-indigo-500/50 transition-all duration-300 shadow-xl group"
          >
            <div className="bg-[#100d25] rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between border border-white/5 relative overflow-hidden backdrop-blur-xl">
              
              {/* Glow backdrop */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Award size={24} />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full">
                    <ShieldCheck size={13} />
                    <span>Verified Credential</span>
                  </div>
                </div>

                <h3 className="text-white text-xl font-bold tracking-tight group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm font-semibold text-[#915eff] mt-1">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400 mt-2">
                  <Calendar size={13} />
                  <span>Issued: {cert.date}</span>
                </div>

                {/* Skills Learned */}
                <div className="mt-6 pt-5 border-t border-white/5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300 mb-2.5">
                    Competencies Validated:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#050816] text-gray-300 border border-white/5 flex items-center gap-1"
                      >
                        <CheckCircle2 size={11} className="text-emerald-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-5 border-t border-white/10 flex justify-end">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#050816] hover:bg-[#151030] border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs font-mono font-medium flex items-center gap-2 transition-all hover:scale-105"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
