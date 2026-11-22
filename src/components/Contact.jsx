import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check, Copy, Github, Linkedin, FileText, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../constants';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);

    // Simulate sending with network animation
    setTimeout(() => {
      setLoading(false);
      setSent(true);

      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f2fe', '#915eff', '#38bdf8', '#10b981']
        });
      } catch (err) {
        // Fallback gracefully
      }

      // Reset after 5 seconds
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', message: '' });
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          GET IN TOUCH
        </p>
        <h2 className="text-white font-extrabold text-3xl sm:text-5xl mt-1 tracking-tight">
          Let's Collaborate<span className="text-cyan-400">.</span>
        </h2>
        <p className="mt-3 text-[#aaa6c3] text-sm sm:text-base max-w-2xl">
          Interested in discussing data analytics pipelines, root-cause diagnostics, or exciting full-time opportunities? Send a message or reach out directly.
        </p>
      </motion.div>

      {/* Split Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[#100d25] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 mb-6 text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 w-fit px-3 py-1 rounded-full">
            <MessageSquare size={13} />
            <span>Interactive Contact Dispatcher</span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="text-white font-medium text-xs font-mono block mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name or company?"
                required
                className="w-full bg-[#050816] py-3.5 px-4 placeholder:text-gray-500 text-white rounded-xl outline-none border border-white/10 focus:border-cyan-400 transition-colors text-sm font-sans"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-white font-medium text-xs font-mono block mb-2">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Where should I send my reply?"
                required
                className="w-full bg-[#050816] py-3.5 px-4 placeholder:text-gray-500 text-white rounded-xl outline-none border border-white/10 focus:border-cyan-400 transition-colors text-sm font-sans"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-white font-medium text-xs font-mono block mb-2">
                Your Message / Project Details
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your business requirements, dataset, or role..."
                required
                className="w-full bg-[#050816] py-3.5 px-4 placeholder:text-gray-500 text-white rounded-xl outline-none border border-white/10 focus:border-cyan-400 transition-colors text-sm font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading || sent}
              className={`w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 ${
                sent
                  ? 'bg-emerald-500 text-black shadow-emerald-500/20'
                  : 'bg-gradient-to-r from-cyan-500 via-indigo-600 to-[#915eff] hover:from-cyan-400 hover:to-purple-500 text-white shadow-cyan-500/25 hover:scale-[1.01] active:scale-[0.99]'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  <span>Transmitting Telemetry...</span>
                </>
              ) : sent ? (
                <>
                  <Check size={18} />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Dispatch Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Right Side: Quick Connect Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Email Card with Copy button */}
          <div className="bg-[#100d25] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full">
              Direct Contact
            </span>

            <h3 className="text-xl font-bold text-white mt-4">
              Direct Inbox Channel
            </h3>
            <p className="text-xs text-[#aaa6c3] mt-1 leading-relaxed">
              Prefer direct email? Copy my address or open your mail client with one click.
            </p>

            <div className="mt-5 p-3.5 bg-[#050816] rounded-xl border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail size={16} className="text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white truncate">
                  {PERSONAL_INFO.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 transition-colors shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {copied && (
              <span className="text-[11px] font-mono text-emerald-400 mt-2 block">
                ✓ Email copied to clipboard!
              </span>
            )}

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Launch default email client</span>
              <Send size={12} />
            </a>
          </div>

          {/* Social Profiles Card */}
          <div className="bg-[#100d25] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-base font-bold text-white mb-4">
              Professional Profiles & Hubs
            </h3>

            <div className="space-y-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#050816] hover:bg-[#151030] border border-white/5 hover:border-indigo-400/50 text-gray-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-cyan-400 group-hover:bg-indigo-500/20">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold block text-white">LinkedIn</span>
                    <span className="text-[11px] font-mono text-gray-400">yash-tiwari-40b068255</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Connect ➔
                </span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#050816] hover:bg-[#151030] border border-white/5 hover:border-cyan-400/50 text-gray-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20">
                    <Github size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold block text-white">GitHub</span>
                    <span className="text-[11px] font-mono text-gray-400">@yashtiwari2003</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  View Code ➔
                </span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#050816] hover:bg-[#151030] border border-white/5 hover:border-purple-400/50 text-gray-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20">
                    <FileText size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold block text-white">Curriculum Vitae</span>
                    <span className="text-[11px] font-mono text-gray-400">Official Resume PDF</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 group-hover:translate-x-1 transition-transform">
                  Download ➔
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
