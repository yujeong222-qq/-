import { motion } from 'motion/react';
import { BookOpen, Clock, Flame, AlertCircle } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      id: 'p_1',
      icon: <BookOpen className="w-5 h-5 text-rose-500" />,
      title: '방황하는 학업 목표',
      desc: '공부해야 하는 건 머리로는 아는데, 정작 무엇부터 어떻게 준비해야 할지 늘 갈피를 잡지 못해 고민입니다.',
      tag: '📚 부족한 방향성'
    },
    {
      id: 'p_2',
      icon: <Clock className="w-5 h-5 text-rose-500" />,
      title: '스마트폰 3일 천하',
      desc: '신년, 새 학기, 방학 때마다 완벽한 계획을 엑셀로 세우지만 결국 의지 박약으로 딱 3일 만에 포기하고 맙니다.',
      tag: '⏰ 작심삼일 습관'
    },
    {
      id: 'p_3',
      icon: <Flame className="w-5 h-5 text-rose-500" />,
      title: '과적된 스펙 올림픽',
      desc: '학점 관리, 영단어, 어학 말하기, 대외활동, 자격증, 주경야독 알바까지 모든 걸 한꺼번에 해결하려다 번아웃에 빠집니다.',
      tag: '😥 멀티태스킹 과부하'
    },
    {
      id: 'p_4',
      icon: <AlertCircle className="w-5 h-5 text-rose-500" />,
      title: '영혼 없는 미디어 늪',
      desc: '아침에 눈 뜨자마자 유튜브, 인스타그램 숏폼을 잠깐 봤을 뿐인데 정신을 차려보니 무의미하게 하루가 전부 끝납니다.',
      tag: '📱 SNS 스마트폰 중독'
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white text-slate-800 relative px-6 overflow-hidden border-t border-slate-100">
      {/* Visual background decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-rose-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            캠퍼스 리얼 라이프 고민
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            대학생활 중 이런 고민, <br />
            <span className="text-transparent bg-gradient-to-r from-rose-650 to-orange-500 bg-clip-text text-rose-600">
              혹시 해보지 않으셨나요?
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto font-medium">
            전공 적성에 관한 심각한 방황부터 만성적인 작심삼일까지, <br />
            대부분의 대학생들이 겪는 실제 시행착오 리스트입니다.
          </p>
        </div>

        {/* 2x2 Bento grid form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((prob, i) => (
            <motion.div
              key={prob.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 80 }}
              className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/60 hover:border-rose-200/50 hover:bg-rose-50/5 hover:shadow-sm transition-all duration-300 text-left relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {prob.icon}
                </div>
                <span className="text-[11px] font-bold text-rose-700 bg-rose-50/80 px-2.5 py-1 rounded-md border border-rose-100">
                  {prob.tag}
                </span>
              </div>
              <h3 className="font-extrabold text-lg text-slate-900 mb-2">{prob.title}</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
