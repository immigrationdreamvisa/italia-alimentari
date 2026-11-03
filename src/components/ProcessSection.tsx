import React, { useState } from 'react';
import { PROCESS_STEPS, ProcessStep } from '../data/companyData';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProcessSectionProps {
  onStepClick?: (step: ProcessStep) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStepClick }) => {
  const { t } = useLanguage();
  const [selectedStep, setSelectedStep] = useState<ProcessStep>(PROCESS_STEPS[0]);

  return (
    <section className="py-24 md:py-32 bg-[#151515] text-white relative overflow-hidden">
      {/* Background Subtle Warm Radial Accent */}
      <div 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#FFC900]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FFC900]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#FFC900]">
              {t.process.label}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            {t.process.title}{' '}
            <span className="italic font-serif text-[#FFC900]">
              {t.process.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#FAF4E7]/70 font-sans leading-relaxed">
            {t.process.description}
          </p>
        </div>

        {/* 5-Step Horizontal Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = selectedStep.step === step.step;
            const isLast = idx === PROCESS_STEPS.length - 1;

            return (
              <div
                key={step.step}
                onClick={() => {
                  setSelectedStep(step);
                  if (onStepClick) onStepClick(step);
                }}
                className={`group cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between text-left relative ${
                  isCurrent
                    ? 'bg-[#1E1E1E] border-[#FFC900] shadow-xl'
                    : 'bg-[#1A1A1A] border-white/10 hover:border-white/30 hover:bg-[#222222]'
                }`}
              >
                <div>
                  {/* Step Image */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-black/40">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/80 via-transparent to-transparent" />
                    
                    {/* Step Number Badge */}
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#151515]/90 text-[#FFC900] border border-[#FFC900]/30">
                      {step.step}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#FFC900] transition-colors mb-2 leading-snug">
                    {t.process.steps[idx]?.title || step.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs text-white/60 leading-relaxed font-sans mb-3">
                    {t.process.steps[idx]?.shortDesc || step.shortDesc}
                  </p>
                </div>

                {/* Connecting Arrow or Active Indicator */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#FFC900]">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-white/50">
                    Stage 0{idx + 1}
                  </span>
                  {!isLast ? (
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFC900] transform group-hover:translate-x-1 transition-transform" />
                  ) : (
                    <Sparkles className="w-3.5 h-3.5 text-[#FFC900]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Spotlight of Selected Stage */}
        <div className="mt-8 bg-[#1A1A1A] border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#FFC900]">STAGE {selectedStep.step} DEEP-DIVE:</span>
              <span className="text-xs uppercase tracking-wider text-white/60">{selectedStep.title}</span>
            </div>
            <p className="text-sm sm:text-base text-white/90 font-sans leading-relaxed mb-2">
              {selectedStep.fullDesc}
            </p>
            <p className="text-xs text-[#FFC900] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Standard: {selectedStep.detailHighlight}</span>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-white/50 font-sans hidden sm:inline">Certified Italian food chain</span>
            <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-mono text-white">
              Cremonini Verified
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
