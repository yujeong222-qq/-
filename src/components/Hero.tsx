import { motion } from 'motion/react';
import { ChevronDown, Sparkles, Compass, ClipboardList } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onGoToPlanner: () => void;
}

export default function Hero({ onStartQuiz, onGoToPlanner }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90 } },
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center bg-white text-slate-800 px-6 overflow-hidden py-16 border-b border-slate-100">
      {/* Decorative ambient blurred shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-3xl -z-10 animate-pulse duration-[6000ms]" />

      <div className="max-w-5xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-7 text-left space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full text-emerald-800 text-xs font-bold tracking-wide shadow-2xs">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '4s' }} />
              방황하는 대학생을 위한 성장 플랫폼 — UniGrowth
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight"
            >
              어제보다 성장한 <br />
              <span className="text-transparent bg-gradient-to-r from-emerald-600 to-indigo-650 bg-clip-text font-black">
                나를 만드는 습관
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed font-sans font-medium"
            >
              전공 공부, 어학, 운동, 자격증까지 <br className="sm:hidden" />
              대학생을 위한 올인원 자기계발 로드맵
            </motion.p>

            {/* Main Interactive Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <button
                onClick={onStartQuiz}
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_25px_rgba(16,185,129,0.25)] flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                <Compass className="w-5 h-5 text-white stroke-[2.5]" />
                지금 시작하기
              </button>
              <button
                onClick={onGoToPlanner}
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-extrabold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-250 shadow-2xs flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                <ClipboardList className="w-5 h-5 text-slate-5050 text-slate-500" />
                나의 루틴 플래너
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image/Banner Column */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}
            className="md:col-span-5 relative w-full h-auto flex justify-center items-center"
          >
            {/* Visual Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-indigo-50 rounded-3xl -rotate-3 transform scale-102 -z-10 shadow-xs" />
            <div className="bg-white p-2.5 rounded-3xl border border-slate-200/80 shadow-md w-full overflow-hidden">
              <img
                src="/src/assets/images/campus_students_1780561191262.png"
                alt="UniGrowth Happy Campus Life"
                className="w-full h-auto rounded-2xl object-cover hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>

        {/* Feature summary links trigger */}
        <div className="flex justify-center pt-16">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="cursor-pointer inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-600"
            onClick={onStartQuiz}
          >
            <span className="text-[10px] uppercase tracking-widest font-mono font-bold">스크롤하여 자세히 알아보기</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
