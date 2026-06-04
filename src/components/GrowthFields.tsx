import { motion } from 'motion/react';
import { BookOpen, Globe, Briefcase, Flame, CheckCircle, Sparkles } from 'lucide-react';

interface GrowthFieldsProps {
  onApplyPresetHabits: (habits: string[]) => void;
}

export default function GrowthFields({ onApplyPresetHabits }: GrowthFieldsProps) {
  const fields = [
    {
      id: 'f_academic',
      title: 'Academic (전공 및 학점)',
      icon: <BookOpen className="w-5 h-5 text-indigo-650" />,
      color: 'indigo',
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      text: 'text-indigo-700',
      metrics: ['학점 관리 정밀 계획서 작성', '전공 이론 심화 복습 2시간', '일일 과제 마일스톤 체크'],
      habits: ['매일 전공 세부 교재 획성 20p 정독', '학점 연동 과제물 제출 전 자가 검수', '금주 배운 전공 챕터 요약정리 작성']
    },
    {
      id: 'f_language',
      title: 'Language (어학 전문)',
      icon: <Globe className="w-5 h-5 text-amber-650" />,
      color: 'amber',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      text: 'text-amber-700',
      metrics: ['토익 800+ 기출 단어 암기', '오픽 IH 스피킹 롤플레잉 테마', '원어민 쉐도잉 패턴 말문 암기'],
      habits: ['매주 토익 실전 테스트 오답 정리', '매일 미드/뉴스 3문장 받아쓰기', '오픽 하루 말하기 패턴 5개 암송']
    },
    {
      id: 'f_career',
      title: 'Career (경력 및 취업)',
      icon: <Briefcase className="w-5 h-5 text-emerald-650" />,
      color: 'emerald',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      text: 'text-emerald-700',
      metrics: ['이력서/포트폴리오 빌딩', '대외활동 공모전 기획 스터디', '선배/멘토 1:1 커피챗 질문지'],
      habits: ['매일 대외활동/인턴십 공고 서칭', '이력서 포트폴리오 프로젝트 항목 추가', '가고 싶은 직무 브런치 아티클 1편 탐독']
    },
    {
      id: 'f_health',
      title: 'Health (건강 및 루틴)',
      icon: <Flame className="w-5 h-5 text-rose-650" />,
      color: 'rose',
      bg: 'bg-rose-50',
      border: 'border-rose-100',
      text: 'text-rose-700',
      metrics: ['체력 고양을 위한 가벼운 고정 운동', '충분한 에너지를 갖추는 수면 규칙', '활력을 일깨우는 생활 가치'],
      habits: ['하루 걸음수 최소 8,000보 채우기', '오전 12시 이전 무조건 수면 정돈', '매일 기상 직후 따뜻한 물 한잔 마시기']
    }
  ];

  const handleInstallPresets = (fieldTitle: string, habits: string[]) => {
    onApplyPresetHabits(habits);
  };

  return (
    <section id="growth-fields" className="py-24 bg-slate-50 text-slate-800 relative px-6 border-t border-slate-100 overflow-hidden">
      {/* Decorative gradient flair */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-slate-500 bg-slate-200/60 px-3.5 py-1.5 rounded-full border border-slate-200">
            캠퍼스 타겟 맵
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            대학생 필수 <br />
            <span className="text-transparent bg-gradient-to-r from-emerald-600 to-indigo-650 bg-clip-text font-black">
              4가지 핵심 성장 진로 영역
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto font-medium">
            우리의 평생 자산이자 취지인 학업전공, 어학력, 취업경력 그리고 기초 체력까지, <br />
            당신의 캠퍼스 라이프를 입체적으로 장악할 완벽한 라인업 구성입니다.
          </p>
        </div>

        {/* 4 Cards Shape Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.map((f, index) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 80 }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 hover:shadow-xs transition-shadow text-left flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${f.bg} border ${f.border} rounded-xl flex items-center justify-center`}>
                      {f.icon}
                    </div>
                    <h3 className="font-extrabold text-base md:text-lg text-slate-900">{f.title}</h3>
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider font-mono font-bold ${f.text}`}>
                    DOMAIN {index + 1}
                  </span>
                </div>

                {/* Scope Lists */}
                <div className="space-y-3.5">
                  <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">커리큘럼 세부 타겟</span>
                  <div className="grid grid-cols-1 gap-2">
                    {f.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-700">
                        <CheckCircle className={`w-4 h-4 ${f.text} shrink-0`} />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Habits Recommendation List */}
                <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-[9px] text-slate-450 font-bold block uppercase tracking-wider">추천 장착 데일리 습관 꿀팁</span>
                  <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                    {f.habits.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 shrink-0 select-none">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Install preset trigger button */}
              <button
                onClick={() => handleInstallPresets(f.title, f.habits)}
                className="w-full mt-6 py-3 border border-slate-250 hover:border-indigo-400 bg-white hover:bg-indigo-50/30 text-slate-700 hover:text-indigo-750 font-extrabold rounded-2xl text-xs md:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-none"
              >
                <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
                {f.title.split(' ')[0]} 추천 습관 3종 즉시 탑재
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
