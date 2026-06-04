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
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center items-center bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 text-slate-800 px-6 overflow-hidden py-16">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl -z-10 animate-pulse duration-[6000ms]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl text-center space-y-8 z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full text-emerald-700 text-sm font-semibold tracking-wide shadow-xs">
          <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '4s' }} />
          대학생 성장 관리 & 라이프 스타일 솔루션
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
        >
          캠퍼스 라이프를 <br className="sm:hidden" />
          <span className="text-transparent bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text font-black">
            나만의 실시간 성장 큐레이션
          </span>
          으로 채우다
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-slate-600 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-sans"
        >
          방황하는 대학생활은 그만! UniGrowth와 함께 과학적인 성장 DNA를 분석하고, <br className="hidden md:inline" />
          네트워크·대외활동·자격증 로드맵을 체계화하여 확실한 스펙과 커리어를 기획해 나가세요.
        </motion.p>

        {/* Dynamic Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(16,185,129,0.25)] flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <Compass className="w-5 h-5 text-white" />
            나의 성장 DNA 진단 시작하기
          </button>
          <button
            onClick={onGoToPlanner}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 shadow-xs flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <ClipboardList className="w-5 h-5 text-slate-600" />
            수행도 상승 플래너 공간
          </button>
        </motion.div>

        {/* Feature quick summary grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all text-left space-y-4 group hover:border-emerald-200/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">1. 성향 맞춤 진단</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              5문항의 정교한 퀴즈로 추진파, 계획파, 학구파, 네트워킹파 등 성장 DNA 유형을 실시간 큐레이션합니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all text-left space-y-4 group hover:border-indigo-200/50">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:scale-110 transition-transform">
              <Target className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">2. 습관 & 루틴 매니저</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              내 성향에 결속되는 추천 데일리 습관을 바로 연동하여 채우고 기록하는 지능형 액션 트래커를 장착했습니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all text-left space-y-4 group hover:border-amber-200/50">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-100 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">3. 역량 리소스 허브</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              대학생이 갖춰두어야 할 필수 자격증, 핵심 어학 팁과 엄선 대외활동 정보를 깔끔하게 큐레이션해 드립니다.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="pt-12 cursor-pointer inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-600"
          onClick={onStartQuiz}
        >
          <span className="text-xs uppercase tracking-widest font-mono">스크롤하여 성장 진단받기</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
