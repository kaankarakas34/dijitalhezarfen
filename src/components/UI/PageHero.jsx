import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PageHero({ title, description, primaryCtaText, onPrimaryClick, secondaryCtaText, onSecondaryClick, badge, gradientClass = "text-gradient-cyan" }) {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-[100px] animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-violet-600/5 rounded-full filter blur-[100px] animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 animate-fade-in shadow-inner">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-300">{badge}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-sans animate-fade-in-up">
          {title.split(', ').map((part, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <br />}
              {idx === title.split(', ').length - 1 ? <span className={gradientClass}>{part}</span> : part}
            </React.Fragment>
          ))}
        </h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up delay-100">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up delay-200">
          {primaryCtaText && (
            <button
              onClick={onPrimaryClick}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {secondaryCtaText && (
            <button
              onClick={onSecondaryClick}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              {secondaryCtaText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
