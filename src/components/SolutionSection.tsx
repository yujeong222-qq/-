import { motion } from 'motion/react';
import { Target, Star, Brain, Globe, Flame, BookOpen, Award } from 'lucide-react';

export default function SolutionSection() {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-emerald-600" />,
      title: '전공 공부 (Major Studies)',
      desc: '벼락치기로 때우는 억지 학습 대신, 전공 서적 매일 1시간 정독으로 개념 뿌리부터 탄탄히 확립합니다.',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100'
    },
    {
      icon: <Globe className="w-5 h-5 text-indigo-600" />,
      title: '외국어 학습 (Languages)',
      desc: '하루 어학원 수련처럼 빡센 일정 대신, 매일 30분 오픽 필러 스피킹이나 표현 학습으로 말문을 개방합니다.',
      bg: 'bg-indigo-50',
      border: 'border-indigo-100'
    },
    {
      icon: <Flame className="w-5 h-5 text-rose-600" />,
      title: '운동 습관 (Health Routine)',
      desc: '체력 저하로 무너지는 전공 집중력을 방어하기 위해 하루 30분 걷기나 가벼운 조깅을 안전하게 기획합니다.',
      bg: 'bg-rose-50',
      border: 'border-rose-100'
    },
    {
      icon: <BookOpen className="w-5 h-5 text-amber-600" />,
      title: '독서 (Reading Hobby)',
      desc: '자극적인 유튜브 미디어 늪에서 벗어나, 하루 15분 명저 탐독으로 사고 깊이와 인문 소양을 비약적으로 넓힙니다.',
      bg: 'bg-amber-50',
      border: 'border-amber-100'
    },
    {
      icon: <Award className="w-5 h-5 text-sky-600" />,
      title: '자격증 준비 (Certifications)',
      desc: '컴활, ADsP, SQLD 등 취업 정조준 가치가 높은 단기 자격증 꿀팁과 핵심 암기를 주간 목표로 정주행합니다.',
      bg: 'bg-sky-50',
      border: 'border-sky-100'
    }
  ];

  return (
    <section id="solution" className="py-24 bg-slate-50 text-slate-800 relative px-6 overflow-hidden border-t border-slate-100">
      {/* Decorative Blur elements */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto space-y-16 relative">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
            새로운 해결 기법
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            목표보다 중요한 것은 오직 꾸준함 <br />
            <span className="text-transparent bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text font-black">
              "하루 단 1%의 기적적 성장"
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            UniGrowth는 거창하게 휩쓸리는 공약 대신, 전공 공부부터 외국어, 체격, 독서, 자격증에 이르기까지 
            매일 소소하지만 강력하게 실천하는 5대 지능적 성장 솔루션을 가동합니다.
          </p>
        </div>

        {/* Floating Centered Key Point */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100/60 flex items-center justify-center shrink-0">
            <Target className="w-8 h-8 text-emerald-600 animate-pulse" />
          </div>
          <div className="space-y-1.5 text-left">
            <h4 className="font-bold text-lg text-slate-900 flex items-center gap-1.5">
              마법 같은 1.01의 힘
              <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
            </h4>
            <p className="text-slate-600 text-xs md:text-sm font-sans leading-relaxed">
              매일 어제보다 딱 1%인 단 <b>1.01</b>배 성장을 365일 포개 나가면, 
              1년 후 당신의 지적 가치와 내성은 초기 대비 무려 <b>37.7배</b>로 거대해집니다. 작은 습관이 인생을 뒤바꿉니다.
            </p>
          </div>
        </div>

        {/* 5 pillars sequence cards styled horizontally/grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4">
          {pillars.map((pil, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:shadow-xs transition-shadow flex flex-col gap-4 text-left"
            >
              <div className={`w-9 h-9 rounded-xl ${pil.bg} border ${pil.border} flex items-center justify-center`}>
                {pil.icon}
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-900 mb-1.5">{pil.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed font-sans">{pil.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
