import React, { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Target, Calendar, BarChart2, Award, CheckCircle, Sparkles, Users, RefreshCw } from 'lucide-react';

interface CoreFeaturesProps {
  onApplyHabitPack: (habits: string[]) => void;
}

export default function CoreFeatures({ onApplyHabitPack }: CoreFeaturesProps) {
  // 1. Goal Setting State
  const [targetGoal, setTargetGoal] = useState<string>('이번 여름방학 오픽 IH & 컴활 1급 동시 달성!');
  const [inputGoal, setInputGoal] = useState<string>('');
  const [isEditingGoal, setIsEditingGoal] = useState<boolean>(false);

  // 2. Mock Daily Routines for mini interactive management
  const [miniRoutines, setMiniRoutines] = useState([
    { id: 1, text: '오픽 스피킹 쉐도잉 30분', completed: true, points: 15 },
    { id: 2, text: '컴활 기출 오답노트 작성', completed: false, points: 25 },
    { id: 3, text: '하루 전공 스터디 2시간', completed: false, points: 20 },
    { id: 4, text: '매일 아침 러닝 30분', completed: true, points: 10 },
  ]);

  // 3. Weekly Graph State (Self-rendered SVG that reacts to toggles and miniRoutine updates)
  const [graphFilter, setGraphFilter] = useState<'thisWeek' | 'lastWeek'>('thisWeek');

  // Calculates completion rate of active mini routines
  const completedCount = miniRoutines.filter((r) => r.completed).length;
  const miniCompletionRate = Math.round((completedCount / miniRoutines.length) * 100);

  // Growth graph points
  const thisWeekData = [45, 60, 50, 75, miniCompletionRate === 0 ? 30 : miniCompletionRate, 85, 90];
  const lastWeekData = [35, 52, 40, 68, 60, 70, 75];

  const handleToggleMiniRoutine = (id: number) => {
    setMiniRoutines(
      miniRoutines.map((r) => (r.id === id ? { ...r, completed: !r.completed } : r))
    );
  };

  const handleSaveGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputGoal.trim()) {
      setTargetGoal(inputGoal.trim());
      setIsEditingGoal(false);
      setInputGoal('');
    }
  };

  // Preset packages for the challenge system
  const challengePacks = {
    miracle: {
      title: '21일 미라클 모닝 습관',
      habits: ['오전 6시 기상 후 가벼운 명상', '인문 철학 서적 15페이지 독서', '오늘 최우선 3가지 할 일 노트정리'],
    },
    vacation: {
      title: '방학 벼락치기 성장 챌린지',
      habits: ['매일 영단어 100개 암학', '토익 기출문제 오답 풀이 1회', '과제 및 이력서 포트폴리오 다듬기'],
    },
  };

  const installChallengePack = (packKey: 'miracle' | 'vacation') => {
    const pack = challengePacks[packKey];
    onApplyHabitPack(pack.habits);
  };

  return (
    <section id="features" className="py-24 bg-white text-slate-800 relative px-6 border-t border-slate-100">
      {/* Background Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            핵심 관리 시스템
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            성공적인 캠퍼스 케어를 위한 <br />
            <span className="text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text font-black">
              4가지 핵심 지능 기능
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-medium">
            목표 기획, 데일리 루틴 검문, 실시간 성장 그래프, 21일 챌린지 협동까지 <br />
            대학생의 역량을 완정 정복할 수 있는 가이드를 가동해보세요.
          </p>
        </div>

        {/* Bento Board Grid for 4 key features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Feature 1: 맞춤형 목표 설정 */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/70 flex flex-col justify-between text-left h-full shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-lg flex items-center gap-1">
                  <Target className="w-3.5 h-3.5 text-indigo-650" />
                  스펙 기획 커스텀
                </span>
                <span className="text-xs text-slate-400 font-mono font-bold">1/4 SYSTEM</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">🎯 맞춤형 목표 설정</h3>
              <p className="text-slate-500 text-xs md:text-sm font-sans leading-relaxed">
                나의 진로 로드맵을 선언하여 활성화시킵니다. 목표가 눈앞에 구체적으로 명시되어 있을수록, 일일 액션 달성의 완수 의지가 비약적으로 상승하게 됩니다.
              </p>

              {/* Editable Goal Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden mt-2">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500" />
                <p className="text-[10px] text-slate-400 font-bold mb-1 font-mono">MY ACTIVE TARGET GOAL</p>
                
                {isEditingGoal ? (
                  <form onSubmit={handleSaveGoal} className="flex gap-2 mt-2">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-indigo-200 focus:border-indigo-500 text-xs text-slate-800 outline-none rounded-lg font-medium"
                      placeholder="예지: 오픽 AL 쟁취하고 학기 평점 4.2 달성하기"
                      value={inputGoal}
                      onChange={(e) => setInputGoal(e.target.value)}
                    />
                    <button type="submit" className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors">
                      설정
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between gap-4 mt-1">
                    <p className="text-xs md:text-sm font-extrabold text-slate-800 leading-snug">
                      "{targetGoal}"
                    </p>
                    <button
                      onClick={() => {
                        setInputGoal(targetGoal);
                        setIsEditingGoal(true);
                      }}
                      className="text-[10px] text-indigo-600 hover:text-indigo-800 font-bold underline shrink-0 cursor-pointer"
                    >
                      목표 수정
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200/40 mt-4 text-[11px] text-slate-450 font-sans font-medium">
              💡 <b>Tip:</b> "영어 성적 달성", "전공 필독서 독파" 등 측정 가능한 구체적 수치목표를 세팅해보세요!
            </div>
          </div>

          {/* Feature 2: 루틴 관리 */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/70 flex flex-col justify-between text-left h-full shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-lg flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  체크 매니저
                </span>
                <span className="text-xs text-slate-400 font-mono font-bold">2/4 SYSTEM</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">📅 실천 루틴 관리</h3>
              <p className="text-slate-500 text-xs md:text-sm font-sans leading-relaxed">
                하루 단위로 쪼개진 핵심 액션을 마우스 클릭 한 번으로 가볍게 밀고 수렴합니다. 체크율은 아래 실시간 성장 데이터베이스로 안전하게 중첩됩니다.
              </p>

              {/* Light Interactive Checklist */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/85 mt-2 space-y-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-emerald-600 font-bold uppercase font-mono tracking-wider">오늘 하루 성취량</span>
                  <span className="text-[11px] text-slate-600 font-bold">{miniCompletionRate}% 완료됨</span>
                </div>
                
                <div className="space-y-1.5">
                  {miniRoutines.map((routine) => (
                    <div
                      key={routine.id}
                      onClick={() => handleToggleMiniRoutine(routine.id)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer select-none transition-all ${
                        routine.completed
                          ? 'bg-emerald-50/20 border-emerald-250 text-slate-400 line-through'
                          : 'bg-slate-50 border-slate-150 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <span className="text-xs font-bold flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 shrink-0 transition-colors ${routine.completed ? 'text-emerald-600Fill text-emerald-600' : 'text-slate-350'}`} />
                        {routine.text}
                      </span>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-slate-200 text-slate-600">
                        +{routine.points}xp
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200/40 mt-4 text-[11px] text-slate-450 font-sans font-medium">
              💡 체크 시 오늘의 실천 수치가 즉시 상향 변동하며 성실함을 기록으로 남깁니다.
            </div>
          </div>

          {/* Feature 3: 성장 그래프 */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/70 flex flex-col justify-between text-left h-full shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-700 bg-sky-50 border border-sky-100 text-sky-700 px-3 py-1 rounded-lg flex items-center gap-1">
                  <BarChart2 className="w-3.5 h-3.5 text-sky-600" />
                  실시간 피드백
                </span>
                <span className="text-xs text-slate-400 font-mono font-bold">3/4 SYSTEM</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">📈 성장 실천율 그래프</h3>
              <p className="text-slate-500 text-xs md:text-sm font-sans leading-relaxed">
                오늘 나의 체크 현황을 어제의 나와 비교 분석합니다. 매주 일요일마다 주간 리포트가 생성되어 성실 레벨 지수를 안전하게 수치화하여 모니터링합니다.
              </p>

              {/* Custom SVG Line Graph UI */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 mt-2">
                <div className="flex items-center justify-between mb-3 text-[10px]">
                  <span className="font-bold text-slate-400">주간 성장 추이 (월~일)</span>
                  <div className="flex items-center gap-2 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                    <button
                      onClick={() => setGraphFilter('thisWeek')}
                      className={`px-2 py-1 rounded-md cursor-pointer transition ${
                        graphFilter === 'thisWeek' ? 'bg-white text-indigo-700 font-extrabold shadow-2xs' : 'text-slate-450 hover:text-slate-700'
                      }`}
                    >
                      이번주
                    </button>
                    <button
                      onClick={() => setGraphFilter('lastWeek')}
                      className={`px-2 py-1 rounded-md cursor-pointer transition ${
                        graphFilter === 'lastWeek' ? 'bg-white text-indigo-700 font-extrabold shadow-2xs' : 'text-slate-450 hover:text-slate-700'
                      }`}
                    >
                      지난주
                    </button>
                  </div>
                </div>

                {/* Highly Crafted SVG Line Path representing weekly points */}
                <div className="relative w-full h-32 flex flex-col justify-end">
                  <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    {/* Grid Lines */}
                    <line x1="0" y1="20" x2="300" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="50" x2="300" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3" />
                    <line x1="0" y1="80" x2="300" y2="80" stroke="#f1f5f9" strokeWidth="1" />

                    {/* Gradient under line */}
                    <defs>
                      <linearGradient id="area-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Path compilation */}
                    {graphFilter === 'thisWeek' ? (
                      <>
                        {/* Area */}
                        <path
                          d={`M 0 100 L 0 ${100 - thisWeekData[0]} L 50 ${100 - thisWeekData[1]} L 100 ${100 - thisWeekData[2]} L 150 ${100 - thisWeekData[3]} L 200 ${100 - thisWeekData[4]} L 250 ${100 - thisWeekData[5]} L 300 ${100 - thisWeekData[6]} L 300 100 Z`}
                          fill="url(#area-grad)"
                        />
                        {/* Smooth Line */}
                        <path
                          d={`M 0 ${100 - thisWeekData[0]} Q 25 ${100 - thisWeekData[1]} 50 ${100 - thisWeekData[1]} T 100 ${100 - thisWeekData[2]} T 150 ${100 - thisWeekData[3]} T 200 ${100 - thisWeekData[4]} T 250 ${100 - thisWeekData[5]} T 300 ${100 - thisWeekData[6]}`}
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        {/* Points */}
                        {thisWeekData.map((val, idx) => (
                          <circle
                            key={idx}
                            cx={idx * 50}
                            cy={100 - val}
                            r="4.5"
                            fill="#6366f1"
                            stroke="#ffffff"
                            strokeWidth="2"
                          />
                        ))}
                      </>
                    ) : (
                      <>
                        <path
                          d={`M 0 100 L 0 ${100 - lastWeekData[0]} L 50 ${100 - lastWeekData[1]} L 100 ${100 - lastWeekData[2]} L 150 ${100 - lastWeekData[3]} L 200 ${100 - lastWeekData[4]} L 250 ${100 - lastWeekData[5]} L 300 ${100 - lastWeekData[6]} L 300 100 Z`}
                          fill="url(#area-grad)"
                          opacity="0.5"
                        />
                        <path
                          d={`M 0 ${100 - lastWeekData[0]} Q 25 ${100 - lastWeekData[1]} 50 ${100 - lastWeekData[1]} T 100 ${100 - lastWeekData[2]} T 150 ${100 - lastWeekData[3]} T 200 ${100 - lastWeekData[4]} T 250 ${100 - lastWeekData[5]} T 300 ${100 - lastWeekData[6]}`}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2.5"
                          strokeDasharray="2"
                        />
                        {lastWeekData.map((val, idx) => (
                          <circle
                            key={idx}
                            cx={idx * 50}
                            cy={100 - val}
                            r="3.5"
                            fill="#10b981"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                          />
                        ))}
                      </>
                    )}
                  </svg>
                  <div className="flex justify-between text-[8px] text-slate-400 font-mono pt-1.5">
                    <span>월</span>
                    <span>화</span>
                    <span>수</span>
                    <span>목</span>
                    <span>금</span>
                    <span>토</span>
                    <span>일 (오늘)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200/40 mt-4 text-[11px] text-slate-450 font-sans font-medium flex justify-between items-center">
              <span>📊 지난주 평균 대비 현재 성취율</span>
              <span className="text-indigo-650 font-bold font-mono">
                {miniCompletionRate >= 60 ? '어제보다 높음 📈' : '분발 필요 👀'}
              </span>
            </div>
          </div>

          {/* Feature 4: 챌린지 시스템 */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/70 flex flex-col justify-between text-left h-full shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-100 px-3 py-1 rounded-lg flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  동기부여 서포트
                </span>
                <span className="text-xs text-slate-400 font-mono font-bold">4/4 SYSTEM</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">🏆 21일 집중 챌린지 습관</h3>
              <p className="text-slate-500 text-xs md:text-sm font-sans leading-relaxed">
                인간의 뇌가 새로운 행동 장벽을 통과해 습관을 각인시키는 데 꼬박 "21일"이 필요합니다. 완결성 높은 테마 챌린지 패키지를 골라 내 습관으로 곧바로 등록 수용하세요.
              </p>

              {/* Instantly Injectable Challenge Preset Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-indigo-400 transition-colors flex flex-col justify-between text-left">
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-900">21일 미라클 모닝 ☀️</h4>
                    <p className="text-[10px] text-slate-500 leading-snug mt-1 font-sans">
                      아침 명상, 명저 독서, 오늘 목표 정리 등 최상의 하루 개막 루틴
                    </p>
                  </div>
                  <button
                    onClick={() => installChallengePack('miracle')}
                    className="w-full text-center mt-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-750 font-extrabold rounded-lg text-[10px] transition-colors cursor-pointer"
                  >
                    챌린지 적용하기 ↓
                  </button>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-emerald-400 transition-colors flex flex-col justify-between text-left">
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-900">방학 벼락치기 기획 ⚡</h4>
                    <p className="text-[10px] text-slate-500 leading-snug mt-1 font-sans">
                      영단어 100개, 컴활 기출 오답, 완곡한 이력서 스펙 등 단기 완전정복
                    </p>
                  </div>
                  <button
                    onClick={() => installChallengePack('vacation')}
                    className="w-full text-center mt-3 py-1.5 bg-emerald-50 hover:bg-emerald-100/85 text-emerald-750 font-extrabold rounded-lg text-[10px] transition-colors cursor-pointer"
                  >
                    챌린지 적용하기 ↓
                  </button>
                </div>
              </div>
            </div>

            {/* Friend Synergy Board */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-150 mt-4">
              <span className="text-[10px] text-slate-400 flex items-center gap-1 font-bold mb-2">
                <Users className="w-3.5 h-3.5 text-indigo-500" />
                캠퍼스 우정/경쟁 리더보드 (동반 성장 프로젝트)
              </span>
              <div className="flex justify-between items-center text-[10px] text-slate-600">
                <span className="font-extrabold">1위 민지 (92%) 👑</span>
                <span>2위 준성 (85%)</span>
                <span className="text-indigo-650 font-bold">3위 나 ({miniCompletionRate}%)</span>
                <span>4위 지원 (71%)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
