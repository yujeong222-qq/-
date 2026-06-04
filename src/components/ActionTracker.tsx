/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent, MouseEvent } from 'react';
import { Habit } from '../types';
import { DEFAULT_HABITS } from '../data';
import { Check, Plus, Trash2, RotateCcw, Calendar, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ActionTrackerProps {
  appliedHabits: string[];
  onClearAppliedHabits: () => void;
}

export default function ActionTracker({ appliedHabits, onClearAppliedHabits }: ActionTrackerProps) {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [newHabitText, setNewHabitText] = useState<string>('');
  const [newHabitCategory, setNewHabitCategory] = useState<'academy' | 'career' | 'health' | 'hobby' | 'network'>('academy');
  const [newHabitFreq, setNewHabitFreq] = useState<string>('Daily');
  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Get current date string in local timezone (YYYY-MM-DD)
  const getTodayStr = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const date = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${date}`;
  };

  const todayStr = getTodayStr();

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('growup_habits');
    if (saved) {
      try {
        setHabits(JSON.parse(saved));
      } catch (e) {
        setHabits(DEFAULT_HABITS);
      }
    } else {
      setHabits(DEFAULT_HABITS);
    }
  }, []);

  // Sync to localStorage
  const saveToStorage = (updatedList: Habit[]) => {
    setHabits(updatedList);
    localStorage.setItem('growup_habits', JSON.stringify(updatedList));
  };

  // Watch for external recommendations applied from the test
  useEffect(() => {
    if (appliedHabits.length > 0) {
      const currentKeys = habits.map(h => h.text.trim());
      const newHabitsToAppend: Habit[] = [];

      appliedHabits.forEach((text, i) => {
        if (!currentKeys.includes(text.trim())) {
          newHabitsToAppend.push({
            id: `recommended_${Date.now()}_${i}`,
            text,
            category: 'career', // Generic recommendation falls into Career or Academy
            completedDays: {},
            streak: 0,
            frequency: 'Daily',
            isCustom: true
          });
        }
      });

      if (newHabitsToAppend.length > 0) {
        const updated = [...habits, ...newHabitsToAppend];
        saveToStorage(updated);
        showMsg(`${newHabitsToAppend.length}개의 맞춤 습관이 성공적으로 플래너에 장착되었습니다!`, 'success');
      } else {
        showMsg(`맞춤 추천 습관이 이미 플래너에 존재합니다.`, 'success');
      }

      onClearAppliedHabits();
    }
  }, [appliedHabits]);

  const showMsg = (text: string, type: 'success' | 'error') => {
    setMsg({ text, type });
    setTimeout(() => {
      setMsg(null);
    }, 4000);
  };

  // Toggle state
  const handleToggleHabit = (id: string) => {
    const updated = habits.map(h => {
      if (h.id === id) {
        const completedDays = { ...h.completedDays };
        const isDone = !!completedDays[todayStr];
        if (isDone) {
          delete completedDays[todayStr];
        } else {
          completedDays[todayStr] = true;
        }

        // Simple streak calculate
        let streak = h.streak;
        if (!isDone) {
          streak += 1;
        } else {
          streak = Math.max(0, streak - 1);
        }

        return { ...h, completedDays, streak };
      }
      return h;
    });
    saveToStorage(updated);
  };

  // Add routine
  const handleAddHabit = (e: FormEvent) => {
    e.preventDefault();
    if (!newHabitText.trim()) {
      showMsg('습관 내용을 채워주세요.', 'error');
      return;
    }

    const newHabit: Habit = {
      id: `custom_${Date.now()}`,
      text: newHabitText.trim(),
      category: newHabitCategory,
      completedDays: {},
      streak: 0,
      frequency: newHabitFreq,
      isCustom: true
    };

    const updated = [...habits, newHabit];
    saveToStorage(updated);
    setNewHabitText('');
    showMsg('새로운 다짐 습관을 등록했습니다!', 'success');
  };

  // Drop routine
  const handleDeleteHabit = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    const updated = habits.filter(h => h.id !== id);
    saveToStorage(updated);
    showMsg('습관을 제거했습니다.', 'success');
  };

  // Reset defaults
  const handleResetDefaults = () => {
    const confirmReset = window.confirm('플래너를 완전히 기본 데이터로 복구하시겠습니까? 등록한 사용자 데이터는 삭제됩니다.');
    if (confirmReset) {
      saveToStorage(DEFAULT_HABITS);
      showMsg('기본 템플릿으로 안전하게 재배치되었습니다.', 'success');
    }
  };

  const filteredHabits = habits.filter(h => {
    if (activeTab === 'all') return true;
    return h.category === activeTab;
  });

  // Calculations
  const totalHabits = filteredHabits.length;
  const completedToday = filteredHabits.filter(h => !!h.completedDays[todayStr]).length;
  const completionRate = totalHabits > 0 ? Math.round((completedToday / totalHabits) * 100) : 0;

  const categoryLabels: Record<string, { label: string; bg: string; text: string; border: string }> = {
    academy: { label: '학업전공', bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/20' },
    career: { label: '경력역량', bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
    health: { label: '건강루틴', bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/20' },
    hobby: { label: '취미독서', bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
    network: { label: '인맥대외', bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/20' }
  };

  return (
    <section id="planner" className="py-20 bg-slate-950 text-white relative px-4">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-sm text-indigo-400 font-mono tracking-wider font-bold uppercase">하루 성장 루틴 플래너</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">지능형 습관 빌더 & 추적기</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl font-sans">
              작심삼일 탈출! 성향 분석에서 얻은 맞춤 습관과 본인의 학업·자격증 습관을 한자리에서 체계적으로 관리하세요.
            </p>
          </div>

          <button
            onClick={handleResetDefaults}
            className="self-start md:self-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg text-xs font-mono flex items-center gap-1.5 border border-slate-800 cursor-pointer transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            초기화 (기본 세팅)
          </button>
        </div>

        {/* Global Tracker Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Progress gauge card */}
          <div className="md:col-span-1 bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-center items-center text-center space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              오늘의 실천율
            </h4>

            {/* Circular representation */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="54" strokeWidth="6" stroke="#1e293b" fill="transparent" />
                <circle
                  cx="64"
                  cy="64"
                  r="54"
                  strokeWidth="8"
                  stroke="url(#progress-gradient)"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 54}
                  strokeDashoffset={2 * Math.PI * 54 * (1 - completionRate / 100)}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
                <defs>
                  <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute text-center">
                <span className="text-3xl font-black font-mono tracking-tight bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                  {completionRate}%
                </span>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">{completedToday}/{totalHabits} 완료됨</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-[170px] leading-relaxed">
              {completionRate === 100
                ? '축하합니다! 완벽을 향한 열정이 빛난 오늘입니다. ✨'
                : completionRate >= 50
                ? '절반 이상 채웠습니다. 조금만 더 힘차게 하루를 갈무리해보세요!'
                : '한 걸음씩 나가는 것만으로도 충분히 위대합니다.'}
            </p>
          </div>

          {/* Core content: Tabs + Routine list cards */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-900/40 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition cursor-pointer ${
                  activeTab === 'all' ? 'bg-slate-800 text-emerald-400 border border-slate-700' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                전체보기 ({habits.length})
              </button>
              {Object.entries(categoryLabels).map(([key, info]) => {
                const count = habits.filter(h => h.category === key).length;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition cursor-pointer ${
                      activeTab === key ? `bg-slate-800 ${info.text} border border-slate-700` : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {info.label} ({count})
                  </button>
                );
              })}
            </div>

            {/* List with motion */}
            <div className="bg-slate-900/40 rounded-2xl border border-slate-800 p-5 space-y-4 shadow-xl">
              <AnimatePresence mode="popLayout">
                {filteredHabits.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3">
                    {filteredHabits.map(habit => {
                      const isDone = !!habit.completedDays[todayStr];
                      const cat = categoryLabels[habit.category] || { label: '일반기타', bg: 'bg-slate-500/10', text: 'text-slate-400', border: 'border-slate-500/20' };

                      return (
                        <motion.div
                          key={habit.id}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          layout
                          onClick={() => handleToggleHabit(habit.id)}
                          className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer select-none group relative overflow-hidden ${
                            isDone
                              ? 'bg-slate-900/90 border-emerald-500/40'
                              : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            {/* Custom animated checkbox */}
                            <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                              isDone ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-transparent text-slate-950 scale-105' : 'border-slate-600 group-hover:border-emerald-500/70'
                            }`}>
                              {isDone && <Check className="w-4 h-4 stroke-[3px]" />}
                            </div>

                            <div className="space-y-1">
                              <span className={`text-sm font-bold block transition-all ${isDone ? 'text-slate-400 line-through' : 'text-slate-100'}`}>
                                {habit.text}
                              </span>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`px-2 py-0.5 rounded-md text-[10px] border font-semibold ${cat.bg} ${cat.text} ${cat.border}`}>
                                  {cat.label}
                                </span>
                                <span className="text-[10px] text-slate-500 font-mono">
                                  {habit.frequency}
                                </span>
                                {habit.streak > 0 && (
                                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono">
                                    <TrendingUp className="w-3 h-3 text-amber-400" />
                                    {habit.streak}일 연속
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {habit.isCustom && (
                              <button
                                onClick={(e) => handleDeleteHabit(habit.id, e)}
                                className="p-2 opacity-0 group-hover:opacity-100 hover:bg-red-500/10 text-slate-500 hover:text-red-400 rounded-lg transition-all focus:opacity-100 cursor-pointer"
                                title="제거"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-12 text-center text-slate-500 space-y-2 font-sans"
                  >
                    <p className="text-base text-slate-400">등록된 성향 습관이 비어 있습니다.</p>
                    <p className="text-xs text-slate-600">위의 성향 검사를 진행하여 맞춤형 루틴을 등록하거나 아래 폼으로 커스텀 다짐을 등록해보세요!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Append habit form */}
        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 shadow-xl">
          <h4 className="text-sm font-extrabold text-slate-100 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            나만의 자기계발 루틴 직접 등록하기
          </h4>

          <form onSubmit={handleAddHabit} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-6">
              <input
                type="text"
                placeholder="예: 매일 자격증 인강 1강 수강, 영어 아티클 1편 정독..."
                value={newHabitText}
                onChange={(e) => setNewHabitText(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-indigo-500 text-slate-200 outline-none rounded-xl text-xs md:text-sm transition placeholder:text-slate-600"
              />
            </div>

            <div className="md:col-span-2">
              <select
                value={newHabitCategory}
                onChange={(e: any) => setNewHabitCategory(e.target.value)}
                className="w-full px-3 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 text-slate-300 outline-none rounded-xl text-xs md:text-sm transition"
              >
                <option value="academy">학업전공</option>
                <option value="career">경력역량</option>
                <option value="health">건강루틴</option>
                <option value="hobby">취미독서</option>
                <option value="network">인맥대외</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <select
                value={newHabitFreq}
                onChange={(e) => setNewHabitFreq(e.target.value)}
                className="w-full px-3 py-3 bg-slate-950 border border-slate-800 focus:border-indigo-500 text-slate-400 outline-none rounded-xl text-xs md:text-sm transition"
              >
                <option value="Daily">매일 (Daily)</option>
                <option value="3 times/week">주 3회</option>
                <option value="Once a week">주 1회</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs md:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <Plus className="w-4 h-4" />
                루틴 추가
              </button>
            </div>
          </form>
        </div>

        {/* Global Floating Toast Alert */}
        <AnimatePresence>
          {msg && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 20, x: '-50%' }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs md:text-sm font-semibold border bg-slate-900 text-white min-w-[280px] max-w-md"
              style={{
                borderColor: msg.type === 'success' ? '#10b981/40' : '#ef4444/40',
              }}
            >
              {msg.type === 'success' ? (
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              )}
              <span className="flex-1 text-slate-200 leading-snug">{msg.text}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
