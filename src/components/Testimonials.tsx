import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 't_1',
      name: '이민지 (경영학과 22학번)',
      tag: '🏆 추진파 / 21일 챌린지 수료자',
      title: '방황을 스펙 성장으로 선언하다',
      quote: '주변 동기들이 스펙 쌓을 때 저만 혼자 제자리인 것 같아 방황했었어요. 여기서 성장 DNA 진단을 시작하고 21일 체질 개선 챌린지를 적용했는데 컴퓨터활용능력뿐만 아니라 전공 2시간 공부 루틴까지 쟁취했습니다. 대학생 올인원 인정입니다!'
    },
    {
      id: 't_2',
      name: '김준성 (컴퓨터공학과 20학번)',
      tag: '⚡ 계획파 / 오픽 IH 달성자',
      title: '작심삼일 탈출, 1%의 지능적 위력',
      quote: '늘 거창한 계획을 엑셀로 짜고 단 3일 뒤에 포기하던 작심삼일 습관형 인간이었습니다. 매일 1% 성장 실시간 그래프와 데일리 완료 시 xp 지급 피드백 등 시각화 장점 덕분에 꾸준해질 수 있었고, 결국 이번 방학 오픽 IH 스피킹 고지를 뚫었습니다!'
    },
    {
      id: 't_3',
      name: '박지원 (영어영문학과 23학번)',
      tag: '👥 소통파 / 자격증 정복 조원',
      title: '학업과 건강까지 통전적 궤도',
      quote: '대외활동, 학업 관리, 지독한 취업 준비 도중에 체력이 무너져 힘들었어요. UniGrowth의 학업전공과 건강루틴을 연합 장착하여 트래킹하니까 생활 밸런스가 한 번에 돌기 시작했습니다. 방황하는 모든 전국 대학교 청춘들에게 강력 강추합니다!'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white text-slate-800 relative px-6 border-t border-slate-100 overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute bottom-10 right-10 w-84 h-84 bg-indigo-50 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-indigo-650 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            기적적인 성장 증거
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            UniGrowth와 동행한 <br />
            <span className="text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text font-black">
              대학생 선배들의 성장 후기
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-medium">
            비정기적인 학업 방황기를 실시간 루틴 극복으로 뒤바꾼 <br />
            실제 우리 캠퍼스 주위 친구들의 눈부신 비포 & 애프터 스토리입니다.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: 'spring', stiffness: 90 }}
              className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/70 hover:border-indigo-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.015)] text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 stars decoration */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <MessageSquare className="w-3.5 h-3.5 text-slate-350 ml-auto" />
                </div>
                
                <h4 className="font-extrabold text-sm md:text-base text-slate-850">"{rev.title}"</h4>
                <p className="text-slate-600 text-xs md:text-sm font-sans leading-relaxed font-normal">
                  {rev.quote}
                </p>
              </div>

              {/* Contributor Profile Info */}
              <div className="pt-6 border-t border-slate-200/50 mt-6 flex flex-col gap-1">
                <span className="text-xs font-black text-slate-900">{rev.name}</span>
                <span className="text-[10px] text-indigo-650 font-bold font-mono uppercase bg-indigo-50/70 py-0.5 px-2 rounded border border-indigo-100 self-start">
                  {rev.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
