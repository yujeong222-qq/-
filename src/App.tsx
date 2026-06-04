/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import CoreFeatures from './components/CoreFeatures';
import GrowthTest from './components/GrowthTest';
import ActionTracker from './components/ActionTracker';
import GrowthFields from './components/GrowthFields';
import Testimonials from './components/Testimonials';
import ResourceHub from './components/ResourceHub';
import Newsletter from './components/Newsletter';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { Target, Compass, BookOpen, Mail, ChevronRight, Menu, X, Users, MessageSquare } from 'lucide-react';
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
      
      {/* Elegantly Polished Floating Sticky Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-3xs transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 cursor-pointer group animate-fade-in"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-indigo-650 flex items-center justify-center font-black text-white font-mono text-sm leading-none group-hover:scale-105 transition-transform">
              U
            </div>
            <span className="font-extrabold text-base md:text-lg tracking-tight text-slate-900">
              UniGrowth<span className="text-emerald-600 font-semibold text-xs ml-1 font-sans">캠퍼스</span>
            </span>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold font-sans tracking-wide">
            <button
              onClick={() => scrollToSection('problem')}
              className="text-slate-550 hover:text-slate-900 transition cursor-pointer font-bold"
            >
              어려움
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-slate-550 hover:text-slate-900 transition cursor-pointer font-bold"
            >
              해결책
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-slate-550 hover:text-slate-900 transition cursor-pointer font-bold"
            >
              핵심기능
            </button>
            <button
              onClick={() => scrollToSection('growth-test')}
              className="text-slate-650 hover:text-emerald-600 transition cursor-pointer flex items-center gap-1 font-extrabold"
            >
              <Compass className="w-4 h-4 text-emerald-500" />
              성향 진단
            </button>
            <button
              onClick={() => scrollToSection('planner')}
              className="text-slate-650 hover:text-indigo-600 transition cursor-pointer flex items-center gap-1 font-extrabold"
            >
              <Target className="w-4 h-4 text-indigo-500" />
              루틴 플래너
            </button>
            <button
              onClick={() => scrollToSection('growth-fields')}
              className="text-slate-550 hover:text-slate-900 transition cursor-pointer font-bold"
            >
              진로분야
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-650 hover:text-indigo-600 transition cursor-pointer flex items-center gap-1 font-extrabold"
            >
              <MessageSquare className="w-4 h-4 text-indigo-500" />
              선배리뷰
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="text-slate-550 hover:text-slate-900 transition cursor-pointer font-bold"
            >
              자료실
            </button>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('growth-test')}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              무료 진단하기
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Sheet */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-slate-100 bg-white text-slate-800 px-6 py-4 space-y-3.5 shadow-md text-left"
            >
              <button
                onClick={() => scrollToSection('problem')}
                className="w-full text-left font-semibold text-xs py-2 px-3 hover:bg-slate-50 rounded-lg text-slate-700"
              >
                캠퍼스 고민 (어려움)
              </button>
              <button
                onClick={() => scrollToSection('solution')}
                className="w-full text-left font-semibold text-xs py-2 px-3 hover:bg-slate-50 rounded-lg text-slate-700"
              >
                하루 1% 성장 (해결책)
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="w-full text-left font-semibold text-xs py-2 px-3 hover:bg-slate-50 rounded-lg text-slate-700"
              >
                핵심 지능 (주요 기능)
              </button>
              <button
                onClick={() => scrollToSection('growth-test')}
                className="w-full text-left font-bold text-xs py-2 px-3 hover:bg-slate-50 rounded-lg flex items-center gap-2 text-emerald-700"
              >
                <Compass className="w-4 h-4 text-emerald-500" />
                성향 진단 테스트
              </button>
              <button
                onClick={() => scrollToSection('planner')}
                className="w-full text-left font-bold text-xs py-2 px-3 hover:bg-slate-50 rounded-lg flex items-center gap-2 text-indigo-700"
              >
                <Target className="w-4 h-4 text-indigo-500" />
                데일리 루틴 플래너
              </button>
              <button
                onClick={() => scrollToSection('growth-fields')}
                className="w-full text-left font-semibold text-xs py-2 px-3 hover:bg-slate-50 rounded-lg text-slate-700"
              >
                4대 지원 진로 모델
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="w-full text-left font-semibold text-xs py-2 px-3 hover:bg-slate-50 rounded-lg text-slate-700"
              >
                선배 솔직 후기
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="w-full text-left font-semibold text-xs py-2 px-3 hover:bg-slate-50 rounded-lg text-slate-700"
              >
                자료 및 자격증 허브
              </button>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('growth-test')}
                  className="w-full py-3 bg-slate-900 text-white text-center font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
                >
                  무료 성장 진단 시작
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Experience Layout Flow */}
      <main className="flex-grow">
        
        {/* 1. Hero Section (메인) */}
        <Hero
          onStartQuiz={() => scrollToSection('growth-test')}
          onGoToPlanner={() => scrollToSection('planner')}
        />

        {/* 2. 문제 제시 */}
        <ProblemSection />

        {/* 3. 해결 방법 */}
        <SolutionSection />

        {/* 4. 핵심 기능 */}
        <CoreFeatures onApplyHabitPack={handleApplyRecommendedHabits} />

        {/* 4-b. Interactive Core Tools Engine (Quiz Assessment & Tracker Space) */}
        <GrowthTest
          onApplyRecommendedHabits={handleApplyRecommendedHabits}
          onGoToPlanner={() => scrollToSection('planner')}
        />

        <ActionTracker
          appliedHabits={appliedHabits}
          onClearAppliedHabits={handleClearAppliedHabits}
        />

        {/* 5. 성장 분야 소개 */}
        <GrowthFields onApplyPresetHabits={handleApplyRecommendedHabits} />

        {/* 6. 후기 */}
        <Testimonials />

        {/* Secondary Info Curations (Resource & Newsletter) */}
        <ResourceHub />
        <Newsletter />

        {/* 7. CTA (시작하기) */}
        <CTASection onStart={() => scrollToSection('growth-test')} />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
