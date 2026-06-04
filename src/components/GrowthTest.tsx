/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { QUESTIONS, PERSONALITIES } from '../data';
import { Personality } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ClipboardList, BookOpen, RefreshCw, Star, Info, ChevronRight, Award } from 'lucide-react';

interface GrowthTestProps {
  onApplyRecommendedHabits: (habits: string[]) => void;
  onGoToPlanner: () => void;
}

export default function GrowthTest({ onApplyRecommendedHabits, onGoToPlanner }: GrowthTestProps) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [scores, setScores] = useState<Record<string, number>>({
    challenger: 0,
    strategist: 0,
    analyst: 0,
    leader: 0,
  });
  const [result, setResult] = useState<Personality | null>(null);
  const [applied, setApplied] = useState<boolean>(false);

  const handleSelectOption = (optionIdx: number, scoreMap: Record<string, number>) => {
    // Record selection
    setSelectedAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }));

    // Accumulate score
    const newScores = { ...scores };
    Object.entries(scoreMap).forEach(([key, val]) => {
      newScores[key] = (newScores[key] || 0) + val;
    });
    setScores(newScores);

    // Navigate to next or calculate result
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Find key with max score
      let maxKey = 'strategist';
      let maxVal = -1;
      Object.entries(newScores).forEach(([key, val]) => {
        const valNum = val as number;
        if (valNum > maxVal) {
          maxVal = valNum;
          maxKey = key;
        }
      });
      setResult(PERSONALITIES[maxKey]);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setScores({
      challenger: 0,
      strategist: 0,
      analyst: 0,
      leader: 0,
    });
    setResult(null);
    setApplied(false);
  };

  const handleApplyHabits = () => {
    if (result) {
      onApplyRecommendedHabits(result.habits);
      setApplied(true);
    }
  };

  const currentQuestion = QUESTIONS[currentIdx];
  const progressPercent = ((currentIdx + (result ? 1 : 0)) / QUESTIONS.length) * 100;

  return (
    <section id="growth-test" className="py-20 bg-slate-900 border-t border-slate-800 text-white relative px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-sm text-emerald-400 font-mono tracking-wider font-bold uppercase">성향 진단 테스터</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">잠재력을 깨우는 성장 DNA 분석</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            동기부여를 실천으로 전환하기 위한 완벽한 첫 단추. 내 학업, 대외활동, 습관 스타일을 진단받아 가세요.
          </p>
        </div>

        {/* Progress bar */}
        <div className="bg-slate-800 h-2 w-full rounded-full overflow-hidden mb-12 border border-slate-700">
          <div
            className="bg-gradient-to-r from-emerald-500 to-indigo-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-800/60 p-6 md:p-10 rounded-3xl border border-slate-700/60 shadow-xl space-y-8"
            >
              <div className="flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>QUESTION {currentIdx + 1} OF {QUESTIONS.length}</span>
                <span className="text-emerald-400 font-bold">{Math.round(progressPercent)}% DONE</span>
              </div>

              <h3 className="text-lg md:text-2xl font-bold text-slate-100 leading-snug">
                {currentQuestion.text}
              </h3>

              <div className="grid grid-cols-1 gap-4 pt-2">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx, option.score)}
                    className="w-full text-left p-5 md:p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-200 flex items-center gap-4 group cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors text-sm">
                      {idx + 1}
                    </div>
                    <span className="flex-1 text-slate-300 group-hover:text-white font-medium text-sm md:text-base">
                      {option.text}
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="bg-slate-800/80 p-6 md:p-12 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative accent colors matching type */}
              <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 bg-${result.color === 'emerald' ? 'emerald-500' : result.color === 'indigo' ? 'indigo-500' : result.color === 'amber' ? 'amber-500' : 'sky-500'}`} />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-700/60">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Award className="w-3.5 h-3.5" />
                    {result.badge}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                    {result.title}
                  </h3>
                  <p className="text-slate-400 text-md md:text-lg">
                    {result.subtitle}
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="self-start md:self-center px-4 py-2 bg-slate-900 hover:bg-slate-950 text-slate-400 hover:text-white rounded-lg text-xs font-mono flex items-center gap-1.5 border border-slate-700 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  RETEST
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                {/* Descroption & core traits */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest text-slate-500 mb-2">성향 특징 리포트</h4>
                    <p className="text-slate-300 font-sans leading-relaxed text-sm md:text-base">
                      {result.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-700/60">
                      <h5 className="text-emerald-400 text-xs font-bold flex items-center gap-1 mb-2">
                        <Check className="w-4 h-4" /> 장점 및 우위
                      </h5>
                      <ul className="space-y-1.5 leading-snug">
                        {result.strengths.map((str, i) => (
                          <li key={i} className="text-slate-300 font-sans text-xs flex gap-1 items-start">
                            <span className="text-emerald-500">•</span>
                            {str}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-700/60">
                      <h5 className="text-red-400 text-xs font-bold flex items-center gap-1 mb-2">
                        <Info className="w-4 h-4" /> 보완 포인트
                      </h5>
                      <ul className="space-y-1.5 leading-snug">
                        {result.weaknesses.map((weak, i) => (
                          <li key={i} className="text-slate-300 font-sans text-xs flex gap-1 items-start">
                            <span className="text-red-500">•</span>
                            {weak}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="space-y-6 flex flex-col justify-between">
                  <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700/80 space-y-4">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 flex items-center gap-1.5">
                      <ClipboardList className="w-4 h-4 text-emerald-400" />
                      하루 성향 추천 습관
                    </h4>
                    <div className="space-y-2">
                      {result.habits.map((habit, i) => (
                        <div key={i} className="flex items-center gap-2.5 bg-slate-800/40 p-2.5 rounded-lg text-xs md:text-sm text-slate-300 font-sans">
                          <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-bold text-[10px]">
                            {i + 1}
                          </span>
                          {habit}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleApplyHabits}
                      disabled={applied}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        applied
                          ? 'bg-slate-700 text-slate-400 border border-slate-600 cursor-not-allowed'
                          : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold focus:outline-none focus:ring-2 focus:ring-emerald-400'
                      }`}
                    >
                      {applied ? (
                        <>
                          <Check className="w-4 h-4" />
                          루틴 플래너에 추가 완료!
                        </>
                      ) : (
                        <>
                          <Star className="w-4 h-4" />
                          오늘의 추천 습관 플래너에 심기
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-slate-900/30 p-5 rounded-2xl border border-slate-700/40">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 flex items-center gap-1.5 mb-3">
                      <BookOpen className="w-4 h-4 text-indigo-400" />
                      성장을 거두는 추천 독서목록
                    </h4>
                    <div className="space-y-3 font-sans">
                      {result.books.map((book, i) => (
                        <div key={i} className="text-xs">
                          <span className="font-bold text-slate-200">{book.title}</span>
                          <span className="text-slate-500 ml-1.5">| {book.author}</span>
                          <p className="text-slate-400 text-[11px] leading-tight mt-0.5">{book.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Banner linked to planner */}
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-4 rounded-xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left mt-2">
                <p className="text-xs md:text-sm text-slate-300">
                  성향이 마음에 드시나요? 추가한 습관들을 보러 <span className="font-bold text-emerald-400">플래너 공간</span>으로 곧장 가볼까요?
                </p>
                <button
                  onClick={onGoToPlanner}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                >
                  플래너로 이동
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
