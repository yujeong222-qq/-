/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SAMPLE_CERTIFICATES, SAMPLE_ACTIVITIES } from '../data';
import { Award, BookOpen, Clock, Heart, HelpCircle, Star, Sparkles, Filter, ChevronRight, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ResourceHub() {
  const [activeTab, setActiveTab] = useState<'certs' | 'activities'>('certs');
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);
  const [certFilter, setCertFilter] = useState<string>('All');

  const categories = ['All', 'IT', 'Language', 'Finance', 'General'];

  // Filter certs
  const filteredCerts = SAMPLE_CERTIFICATES.filter(c => {
    if (certFilter === 'All') return true;
    return c.category === certFilter;
  });

  return (
    <section id="resources" className="py-20 bg-slate-900 border-t border-slate-800 text-white relative px-4">
      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="text-center space-y-3 mb-12">
          <span className="text-sm text-emerald-400 font-mono tracking-wider font-bold uppercase">자원 및 정보 가이드</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">대학생 필수 자기계발 저장소</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            어떤 전공 자격증부터 취득해야 할지, 알찬 대외활동은 어디에 있을지 고민인가요? 최적의 액션 가이드를 담았습니다.
          </p>
        </div>

        {/* Outer Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-950 p-1 rounded-2xl border border-slate-800/80 inline-flex items-center gap-1">
            <button
              onClick={() => setActiveTab('certs')}
              className={`px-6 py-3 rounded-xl text-xs md:text-sm font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'certs'
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700/60 shadow-lg'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Award className="w-4 h-4" />
              취업 필수 자격증 모음
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`px-6 py-3 rounded-xl text-xs md:text-sm font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'activities'
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700/60 shadow-lg'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              대외활동 · 연합동아리
            </button>
          </div>
        </div>

        {/* Tab contents with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'certs' ? (
            <motion.div
              key="certs_tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Category sub-filter */}
              <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                <span className="text-xs text-slate-500 font-mono tracking-wider uppercase flex items-center gap-1 mr-2">
                  <Filter className="w-3.5 h-3.5" />
                  분야 분류:
                </span>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCertFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition ${
                      certFilter === cat
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/35'
                        : 'bg-slate-950/40 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {cat === 'All' ? '전체' : cat}
                  </button>
                ))}
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCerts.map((cert) => {
                  const isExpanded = selectedCertId === cert.id;
                  return (
                    <div
                      key={cert.id}
                      className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                        isExpanded
                          ? 'bg-slate-950 border-emerald-500/40 shadow-xl'
                          : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-950/80'
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start gap-2">
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-mono tracking-wider font-bold">
                            {cert.category}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            cert.difficulty === '상' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                            cert.difficulty === '중' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                            'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}>
                            난이도: {cert.difficulty}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-slate-100">{cert.title}</h4>
                          <div className="flex items-center gap-1 text-slate-400 text-xs mt-1 font-sans">
                            <Clock className="w-3.5 h-3.5 text-slate-500" />
                            <span>평균 준비 시간:</span>
                            <span className="text-slate-300 font-semibold">{cert.avgPrepTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expanded tips toggled */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="pt-4 border-t border-slate-800/80 mt-4 space-y-3 font-sans"
                        >
                          <h5 className="text-xs font-black text-emerald-400 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            합격 마스터 꿀팁
                          </h5>
                          <ul className="space-y-2 text-xs text-slate-300 leading-snug">
                            {cert.tips.map((tip, i) => (
                              <li key={i} className="flex gap-2 items-start">
                                <span className="bg-emerald-500/20 text-emerald-400 rounded w-4 h-4 flex items-center justify-center text-[10px] shrink-0 font-bold">
                                  {i + 1}
                                </span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      <button
                        onClick={() => setSelectedCertId(isExpanded ? null : cert.id)}
                        className={`w-full py-2.5 rounded-xl text-xs font-bold transition mt-6 flex items-center justify-center gap-1.5 cursor-pointer ${
                          isExpanded
                            ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                            : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20'
                        }`}
                      >
                        {isExpanded ? '가이드 닫기' : '합격 가이드 꿀팁 보기'}
                        <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="activities_tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {SAMPLE_ACTIVITIES.map((act) => (
                <div
                  key={act.id}
                  className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 hover:bg-slate-950/80 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-[10px] font-bold">
                        {act.type}
                      </span>
                      <span className="text-xs text-slate-500 font-mono font-bold">
                        주최: {act.organizer}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xl font-extrabold text-slate-100">{act.title}</h4>
                      <p className="text-slate-400 text-xs mt-1 flex items-center gap-1 font-sans">
                        <UserCheck className="w-3.5 h-3.5 text-slate-500" />
                        대상: <span className="text-indigo-300 font-semibold">{act.target}</span>
                      </p>
                    </div>

                    <div className="py-3 border-y border-slate-800/60 flex items-center justify-between text-xs font-sans">
                      <div className="space-y-1">
                        <p className="text-slate-500">소요 및 기간</p>
                        <p className="font-bold text-slate-300">{act.duration}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-slate-500">주요 혜택 및 특전</p>
                        <p className="font-bold text-emerald-400">{act.benefit}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="text-[11px] text-slate-500 leading-normal block">
                      💡 연합동아리나 기업 서포터즈는 매년 주기적으로 오픈되므로 상시 공고 일정을 달력에 습관화해 기록해 두는 걸 강추드립니다.
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
