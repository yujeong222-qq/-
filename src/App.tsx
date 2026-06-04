/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from './components/Hero';
import GrowthTest from './components/GrowthTest';
import ActionTracker from './components/ActionTracker';
import ResourceHub from './components/ResourceHub';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { Target, Compass, BookOpen, Mail, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [appliedHabits, setAppliedHabits] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleApplyRecommendedHabits = (habits: string[]) => {
    setAppliedHabits(habits);
  };

  const handleClearAppliedHabits = () => {
    setAppliedHabits([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-800">
      
      {/* Elegantly Polished Floating Sticky Header bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center font-black text-white font-mono text-sm leading-none group-hover:scale-105 transition-transform">
              U
            </div>
            <span className="font-extrabold text-base md:text-lg tracking-tight text-slate-900">
              UniGrowth<span className="text-emerald-600 font-semibold text-xs ml-1 font-sans">캠퍼스</span>
            </span>
          </div>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold font-sans tracking-wide">
            <button
              onClick={() => scrollToSection('growth-test')}
              className="text-slate-600 hover:text-emerald-600 transition cursor-pointer flex items-center gap-1 font-bold"
            >
              <Compass className="w-4.5 h-4.5" />
              성향 진단
            </button>
            <button
              onClick={() => scrollToSection('planner')}
              className="text-slate-600 hover:text-indigo-600 transition cursor-pointer flex items-center gap-1 font-bold"
            >
              <Target className="w-4.5 h-4.5" />
              루틴 플래너
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="text-slate-600 hover:text-amber-600 transition cursor-pointer flex items-center gap-1 font-bold"
            >
              <BookOpen className="w-4.5 h-4.5" />
              가이드 허브
            </button>
            <button
              onClick={() => scrollToSection('newsletter')}
              className="text-slate-600 hover:text-sky-600 transition cursor-pointer flex items-center gap-1 font-bold"
            >
              <Mail className="w-4.5 h-4.5" />
              뉴스레터
            </button>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('growth-test')}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm transition cursor-pointer"
            >
              성장 진단받기
            </button>
          </div>

          {/* Mobile Hamburg menu toggler */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu sheet */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-slate-100 bg-white text-slate-800 px-6 py-4 space-y-4"
            >
              <button
                onClick={() => scrollToSection('growth-test')}
                className="w-full text-left font-semibold text-sm py-2 px-3 hover:bg-slate-50 rounded-lg flex items-center gap-2 text-slate-700"
              >
                <Compass className="w-4 h-4 text-emerald-500" />
                성향 진단
              </button>
              <button
                onClick={() => scrollToSection('planner')}
                className="w-full text-left font-semibold text-sm py-2 px-3 hover:bg-slate-50 rounded-lg flex items-center gap-2 text-slate-700"
              >
                <Target className="w-4 h-4 text-indigo-500" />
                루틴 플래너
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="w-full text-left font-semibold text-sm py-2 px-3 hover:bg-slate-50 rounded-lg flex items-center gap-2 text-slate-700"
              >
                <BookOpen className="w-4 h-4 text-amber-500" />
                가이드 허브
              </button>
              <button
                onClick={() => scrollToSection('newsletter')}
                className="w-full text-left font-semibold text-sm py-2 px-3 hover:bg-slate-50 rounded-lg flex items-center gap-2 text-slate-700"
              >
                <Mail className="w-4 h-4 text-sky-500" />
                뉴스레터
              </button>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('growth-test')}
                  className="w-full py-3 bg-emerald-500 text-slate-950 text-center font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
                >
                  무료 성장 진단 시작
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main workspace section blocks */}
      <main className="flex-grow">
        <Hero
          onStartQuiz={() => scrollToSection('growth-test')}
          onGoToPlanner={() => scrollToSection('planner')}
          onGoToResources={() => scrollToSection('resources')}
        />

        <GrowthTest
          onApplyRecommendedHabits={handleApplyRecommendedHabits}
          onGoToPlanner={() => scrollToSection('planner')}
        />

        <ActionTracker
          appliedHabits={appliedHabits}
          onClearAppliedHabits={handleClearAppliedHabits}
        />

        <ResourceHub />
        
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
