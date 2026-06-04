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
    <section id="resources" className="py-20 bg-slate-50 border-t border-slate-100 text-slate-800 relative px-4">
      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="text-center space-y-3 mb-12">
          <span className="text-sm text-emerald-600 font-sans tracking-wider font-bold uppercase">역량 및 정보 허브</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">대학생 필수 자기계발 저장소</h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
            어떤 가치 있는 자격증부터 노려야 할지, 핵심 대외활동은 어디서 골라야 할지 고민인가요? 완벽한 큐레이션 정보를 가져 가세요.
          </p>
        </div>

        {/* Outer Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 inline-flex items-center gap-1">
            <button
              onClick={() => setActiveTab('certs')}
              className={`px-6 py-3 rounded-xl text-xs md:text-sm font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'certs'
                  ? 'bg-white text-emerald-700 border border-slate-200/80 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Award className="w-4 h-4 text-emerald-600" />
              취업 가치 자격증 라인업
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`px-6 py-3 rounded-xl text-xs md:text-sm font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'activities'
                  ? 'bg-white text-emerald-700 border border-slate-200/80 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              우수 대외활동 · 추천 동아리
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
                <span className="text-xs text-slate-400 font-mono tracking-wider uppercase flex items-center gap-1 mr-2 font-bold">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  카테고리:
                </span>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCertFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition ${
                      certFilter === cat
                        ? 'bg-emerald-550 bg-emerald-50 text-emerald-700 border border-emerald-250 shadow-xs font-extrabold'
                        : 'bg-white text-slate-500 border border-slate-200 hover:text-slate-800'
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
                          ? 'bg-white border-emerald-400 shadow-md'
                          : 'bg-white border-slate-200 hover:border-slate-350 hover:shadow-xs'
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start gap-2">
                          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-mono tracking-wider font-bold">
                            {cert.category}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            cert.difficulty === '상' ? 'bg-red-50 text-red-700 border border-red-200' :
                            cert.difficulty === '중' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                            'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}>
                            난이도: {cert.difficulty}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-slate-900">{cert.title}</h4>
                          <div className="flex items-center gap-1 text-slate-500 text-xs mt-1 font-sans">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>평균 대비 기간:</span>
                            <span className="text-slate-700 font-semibold">{cert.avgPrepTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expanded tips toggled */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="pt-4 border-t border-slate-100 mt-4 space-y-3 font-sans"
                        >
                          <h5 className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                            합격 마스터 가이드 꿀팁
                          </h5>
                          <ul className="space-y-2 text-xs text-slate-600 leading-relaxed font-medium">
                            {cert.tips.map((tip, i) => (
                              <li key={i} className="flex gap-2 items-start bg-slate-50/50 p-2 rounded-lg border border-slate-100">
                                <span className="bg-emerald-100 text-emerald-700 rounded w-4.5 h-4.5 flex items-center justify-center text-[10px] shrink-0 font-bold">
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
                            ? 'bg-slate-100 border border-slate-250 text-slate-600 hover:text-slate-800'
                            : 'bg-emerald-50 hover:bg-emerald-100/80 text-emerald-700 border border-emerald-200/80 shadow-xs'
                        }`}
                      >
                        {isExpanded ? '가이드 접기' : '합격 단기 공략 가이드 보기'}
                        <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${isExpanded ? 'rotate-90 text-slate-500' : 'text-emerald-600'}`} />
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
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-slate-350 hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-bold">
                        {act.type}
                      </span>
                      <span className="text-xs text-slate-400 font-mono font-bold">
                        주 주최: {act.organizer}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xl font-extrabold text-slate-900">{act.title}</h4>
                      <p className="text-slate-600 text-xs mt-1 flex items-center gap-1 font-sans">
                        <UserCheck className="w-3.5 h-3.5 text-slate-400" />
                        주요 연동 대상: <span className="text-indigo-700 font-semibold">{act.target}</span>
                      </p>
                    </div>

                    <div className="py-3 px-3.5 bg-slate-50/50 rounded-xl border border-slate-100/80 flex items-center justify-between text-xs font-sans">
                      <div className="space-y-1">
                        <p className="text-slate-400 text-[10px] font-bold">소요 기간</p>
                        <p className="font-bold text-slate-700">{act.duration}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-slate-400 text-[10px] font-bold font-bold">주요 제공 혜택</p>
                        <p className="font-extrabold text-emerald-600">{act.benefit}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <span className="text-[11px] text-slate-450 leading-relaxed block font-medium">
                      💡 연합동아리나 기업 서포터즈는 매 학기 주기적으로 모집되므로 상시 공고 일정을 UniGrowth 커리큘럼 달력에 습관화해 기록해 두는 걸 적극 권장합니다.
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
