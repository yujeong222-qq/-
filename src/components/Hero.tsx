/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronDown, Sparkles, Target, Compass, BookOpen, ClipboardList } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onGoToPlanner: () => void;
  onGoToResources: () => void;
}

export default function Hero({ onStartQuiz, onGoToPlanner, onGoToResources }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center items-center bg-radial from-slate-900 via-slate-950 to-black text-white px-6 overflow-hidden py-16">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse duration-[6000ms]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl text-center space-y-8 z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 text-sm font-medium tracking-wide">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '4s' }} />
          대한대학생 자기계발 맞춤 솔루션
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-100 via-white to-indigo-100 bg-clip-text text-transparent leading-tight"
        >
          캠퍼스 라이프를 <br className="sm:hidden" />
          <span className="text-transparent bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text font-black">
            나만의 완벽한 로드맵
          </span>
          으로 채우다
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-sans"
        >
          방황하는 대학생활은 그만! 나의 성향을 파악하고, 일일 미크로 루틴을 관리하며, <br className="hidden md:inline" />
          네트워크·대외활동·자격증 로드맵을 설계하여 확실한 나만의 스펙과 커리어를 완성하세요.
        </motion.p>

        {/* Dynamic Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <Compass className="w-5 h-5" />
            성장 성향 테스트 시작하기
          </button>
          <button
            onClick={onGoToPlanner}
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <ClipboardList className="w-5 h-5" />
            습관 · 루틴 플래너
          </button>
        </motion.div>

        {/* Feature quick summary grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all text-left space-y-3 group hover:bg-slate-900/80">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-bold text-lg text-slate-100">성향 맞춤 진단</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              5문항의 퀴즈로 행동력, 계획성, 지적 깊이, 인맥 성향 중 당신의 인재 타입을 한눈에 도출합니다.
            </p>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all text-left space-y-3 group hover:bg-slate-900/80">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
              <Target className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="font-bold text-lg text-slate-100">습관 & 루틴 매니저</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              기록에만 멈추지 않는 실질적인 액션. 매일 수행 상태를 로컬 저장소에 안전하게 체크하고 지속하세요.
            </p>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all text-left space-y-3 group hover:bg-slate-900/80">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-bold text-lg text-slate-100">핵심 리소스 허브</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              컴활부터 SQLD, 대외활동 가이드, 추천 인포그래픽과 꿀팁을 깔끔하게 필터링하여 제공합니다.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="pt-12 cursor-pointer inline-flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300"
          onClick={onStartQuiz}
        >
          <span className="text-xs uppercase tracking-widest font-mono">성장 도구 탐방하기</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
