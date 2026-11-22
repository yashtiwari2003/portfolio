import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, AlertTriangle, ShieldCheck, Database, Filter, Eye } from 'lucide-react';

const DATASETS = {
  workforce: {
    title: "HR Master Attrition & Headcount Telemetry",
    datasetSize: "16,000+ Employee Records",
    kpis: [
      { label: "Active Headcount", value: "12,480", change: "+8.4% YoY", trend: "up" },
      { label: "Annual Attrition Rate", value: "9.2%", change: "-2.1% Target Met", trend: "down" },
      { label: "Hiring Pipeline Velocity", value: "18.4 Days", change: "4.2 Days Faster", trend: "up" },
      { label: "Tenure Stability Index", value: "4.6 Yrs", change: "Strong Retention", trend: "up" }
    ],
    bars: [
      { label: "Engineering", value: 85, color: "#00f2fe", sub: "3,200 Staff" },
      { label: "Product & AI", value: 92, color: "#38bdf8", sub: "1,450 Staff" },
      { label: "Sales & Ops", value: 68, color: "#915eff", sub: "4,120 Staff" },
      { label: "Marketing", value: 55, color: "#6366f1", sub: "1,890 Staff" },
      { label: "Analytics", value: 96, color: "#10b981", sub: "980 Staff" },
      { label: "Customer Success", value: 62, color: "#f59e0b", sub: "2,360 Staff" }
    ],
    insight: "DAX calculations identified voluntary exit clusters in early-tenure roles (0-12 months). Implemented targeted retention filters that dropped voluntary attrition by 2.1%."
  },
  anomaly: {
    title: "Metric Detective: STL Decomposition & Anomaly Scores",
    datasetSize: "100,000+ Brazilian E-Commerce Orders",
    kpis: [
      { label: "Orders Audited", value: "102,400", change: "100% Ingested", trend: "up" },
      { label: "Root-Cause Precision", value: "66.6%", change: "On 30 Scenarios", trend: "up" },
      { label: "SQL Number Match", value: "98.0%", change: "Audit Verified", trend: "up" },
      { label: "First-Try SQL Success", value: "97.0%", change: "Safe Guardrails", trend: "up" }
    ],
    bars: [
      { label: "Delivery Delay", value: 94, color: "#ef4444", sub: "Z-Score: +3.8 (Severe)" },
      { label: "Order Volume", value: 82, color: "#38bdf8", sub: "Z-Score: +2.1 (Normal)" },
      { label: "Cancellations", value: 88, color: "#f59e0b", sub: "Z-Score: +2.9 (Warning)" },
      { label: "Review Rating", value: 45, color: "#10b981", sub: "Z-Score: -0.4 (Stable)" },
      { label: "Revenue Anomaly", value: 78, color: "#915eff", sub: "Z-Score: +1.9 (Tracked)" },
      { label: "Cart Abandon", value: 60, color: "#00f2fe", sub: "Z-Score: +1.2 (Normal)" }
    ],
    insight: "Automated MAD robust z-scores pinpointed carrier logistics disruption in Southeast hubs as the prime causal factor for the 24% late delivery spike, verified via SQL queries."
  },
  pipeline: {
    title: "Automated Data Wrangle & Cleaning Pipeline",
    datasetSize: "Multi-Source Production Ingestion",
    kpis: [
      { label: "Duplicate Pruned", value: "1,420 Rows", change: "Exact & Fuzzy Matches", trend: "up" },
      { label: "Schema Validation", value: "100%", change: "Zero Data Drift", trend: "up" },
      { label: "Ingestion Latency", value: "< 90 Sec", change: "Batch Pipeline", trend: "up" },
      { label: "Report Readiness", value: "99.9%", change: "Direct to Power BI", trend: "up" }
    ],
    bars: [
      { label: "Type Casting", value: 100, color: "#10b981", sub: "Passed 16k rows" },
      { label: "Null Resolution", value: 95, color: "#00f2fe", sub: "Imputed / Filtered" },
      { label: "Outlier Bounds", value: 88, color: "#915eff", sub: "IQR Capped" },
      { label: "Referential Integrity", value: 98, color: "#38bdf8", sub: "Foreign Keys Valid" },
      { label: "DAX Modeling", value: 94, color: "#f59e0b", sub: "Star Schema Built" },
      { label: "Power BI Sync", value: 100, color: "#6366f1", sub: "Automated Refresh" }
    ],
    insight: "Python Pandas & DuckDB scripts automated manual data prep workflows, reducing dashboard prep turnaround from 6 hours weekly to a fully automated 90-second cron pipeline."
  }
};

export default function InteractiveDataDashboard() {
  const [activeModel, setActiveModel] = useState('workforce');
  const currentData = DATASETS[activeModel];

  return (
    <section id="analytics" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          INTERACTIVE TELEMETRY LAB
        </p>
        <h2 className="text-white font-extrabold text-3xl sm:text-5xl mt-1 tracking-tight">
          Live Data Simulator<span className="text-cyan-400">.</span>
        </h2>
        <p className="mt-3 text-[#aaa6c3] text-sm sm:text-base max-w-2xl">
          Interact with simulated production datasets from my real-world analytical projects. Toggle between workforce intelligence, AI root-cause diagnostics, and cleaning pipelines.
        </p>
      </motion.div>

      {/* Control Switcher */}
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveModel('workforce')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
            activeModel === 'workforce'
              ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
              : 'bg-[#100d25] text-gray-300 hover:text-white border border-white/5'
          }`}
        >
          <BarChart3 size={16} />
          <span>Workforce & Attrition (Power BI)</span>
        </button>

        <button
          onClick={() => setActiveModel('anomaly')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
            activeModel === 'anomaly'
              ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
              : 'bg-[#100d25] text-gray-300 hover:text-white border border-white/5'
          }`}
        >
          <AlertTriangle size={16} />
          <span>Metric Detective (AI Root-Cause)</span>
        </button>

        <button
          onClick={() => setActiveModel('pipeline')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
            activeModel === 'pipeline'
              ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25'
              : 'bg-[#100d25] text-gray-300 hover:text-white border border-white/5'
          }`}
        >
          <Database size={16} />
          <span>Data Ingestion & Cleaning Pipeline</span>
        </button>
      </div>

      {/* Interactive Display Canvas */}
      <div className="mt-8 bg-[#100d25] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        {/* Top Bar with Dataset Metadata */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/70 border border-cyan-800/40 px-3 py-1 rounded-full">
              Simulated Telemetry Stream
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
              {currentData.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-[#050816] px-3.5 py-1.5 rounded-xl border border-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Scope: {currentData.datasetSize}</span>
          </div>
        </div>

        {/* 4 KPI Scorecards */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {currentData.kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="bg-[#050816]/70 p-4 rounded-2xl border border-white/5 flex flex-col justify-between"
            >
              <span className="text-xs text-gray-400 font-medium">{kpi.label}</span>
              <div className="my-2 text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {kpi.value}
              </div>
              <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                <TrendingUp size={12} />
                {kpi.change}
              </span>
            </div>
          ))}
        </div>

        {/* Visual Animated Data Bar Distribution */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-gray-200 flex items-center gap-2">
              <Eye size={16} className="text-cyan-400" />
              <span>Real-Time Metric Distribution & Anomaly Thresholds</span>
            </h4>
            <span className="text-xs font-mono text-gray-400">Interactive Bar Vectors</span>
          </div>

          <div className="space-y-4">
            {currentData.bars.map((bar, idx) => (
              <div key={bar.label} className="group">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {bar.label}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      ({bar.sub})
                    </span>
                  </div>
                  <span className="font-mono font-bold text-gray-300">
                    {bar.value}%
                  </span>
                </div>

                <div className="w-full bg-[#050816] h-3 rounded-full overflow-hidden p-[1px] border border-white/5">
                  <motion.div
                    key={`${activeModel}-${bar.label}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${bar.value}%` }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    style={{ backgroundColor: bar.color }}
                    className="h-full rounded-full shadow-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actionable Analytical Insight Callout */}
        <div className="mt-8 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3">
          <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 mt-0.5">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold">
              Key Analytical Insight & Impact
            </h5>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
              {currentData.insight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
