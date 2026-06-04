import { motion } from 'motion/react';
import { Target, ChevronRight, Zap } from 'lucide-react';

interface CTASectionProps {
  onStart: () => void;
}

export default function CTASection({ onStart }: CTASectionProps) {
  return (
    <section id="cta" className="py-24 bg-white text-slate-800 relative px-6 overflow-hidden border-t border-slate-100">
      {/* Visual surrounding circular layout */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-50/40 to-indigo-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto z-10 relative bg-slate-900 text-white rounded-3xl p-8 md:p-16 text-center border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
        {/* Subtle background stars decoration */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700/80 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-bold tracking-wider font-mono">
          <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 animate-pulse" />
          무료 정기 가입 캠퍼스 특별혜택
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            미래는 거창한 목표가 아니라, <br className="hidden sm:inline" />
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text font-black">
              오늘의 행동으로 만들어집니다.
            </span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto font-sans">
            지금 무료로 나의 성장 성향을 자가분단하고, 21일 챌린지 패키지와 기적 같은 하루 1% 지능 습관을 기획해보세요. 행동하지 않으면 아무것도 변하지 않습니다.
          </p>
        </div>

        {/* Start Button */}
        <div className="flex justify-center pt-2">
          <button
            onClick={onStart}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_15px_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 ring-offset-2 ring-offset-slate-900"
          >
            <Target className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            무료로 시작하기
            <ChevronRight className="w-4.5 h-4.5 text-slate-950 stroke-[3]" />
          </button>
        </div>

        <p className="text-[10px] text-slate-500 font-sans">
          * 별도의 비용 청구가 발생하지 않으며, 성향 퀴즈 결과 확인 즉시 올인원 플래너가 장치에 로컬 저장 형태로 준비됩니다.
        </p>
      </div>
    </section>
  );
}
