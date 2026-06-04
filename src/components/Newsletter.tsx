/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, CheckCircle2, Loader2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Newsletter() {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [err, setErr] = useState<string>('');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setErr('');

    if (!email) {
      setErr('이메일 주소를 성실하게 적어주세요!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErr('올바른 이메일 주소 형식이 아닙니다.');
      return;
    }

    setLoading(true);

    // Simulate standard fast subscription delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section id="newsletter" className="py-20 bg-white text-slate-800 relative px-4 overflow-hidden border-t border-slate-100">
      {/* Decorative ambient blurred ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-emerald-100/40 blur-xl pointer-events-none -z-10 animate-pulse duration-[10000ms]" />

      <div className="max-w-4xl mx-auto z-10 relative bg-slate-50 p-8 md:p-14 rounded-3xl border border-slate-200/60 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-6 space-y-4 text-left">
            <span className="text-sm text-emerald-600 font-sans tracking-wider font-bold uppercase flex items-center gap-1.5 animate-pulse">
              <Mail className="w-4 h-4 text-emerald-600" />
              월간 뉴스레터 무료 구독
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              매주 한 장 배송되는 <br />
              자기계발 비법 & 멘토링 노트
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
              전공 로드맵 분석, 고득점 자격증 족보, 대학생 무료 세미나 티켓, 그리고 동기부여 인문학 아티클을 이메일로 가장 먼저 배달해 드립니다. 광고 대신 순수한 큐레이션 정기물로 대학 생활의 격을 높이세요.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="newsletter_form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubscribe}
                  className="space-y-3 w-full"
                >
                  <label className="text-xs text-slate-500 font-bold block mb-1">
                    뉴스레터 받으실 이메일 주소
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="name@university.edu"
                      value={email}
                      disabled={loading}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (err) setErr('');
                      }}
                      className="w-full pl-4 pr-12 py-4 bg-white border border-slate-250 focus:border-emerald-500 text-slate-850 outline-none rounded-2xl text-xs md:text-sm transition-all shadow-xs placeholder:text-slate-400 font-semibold"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-emerald-600 hover:bg-emerald-5050 hover:bg-emerald-500 text-white font-bold rounded-xl transition cursor-pointer disabled:opacity-50 flex items-center justify-center focus:outline-none"
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {err && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-600 flex items-center gap-1 font-semibold"
                    >
                      <span>⚠️ {err}</span>
                    </motion.div>
                  )}

                  <p className="text-[10px] text-slate-500 leading-normal">
                    * 가입 시 개인정보수집 및 이메일 수신 동의에 동의한 것으로 간주합니다. 언제든 메일 하단에서 손쉽게 무료 수신거부가 가능합니다.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="newsletter_success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-3.5"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-extrabold text-slate-900">동기부여 구독 완료!</h4>
                    <p className="text-xs text-slate-600 font-sans max-w-[280px]">
                      기입하신 이메일로 UniGrowth 웰컴 서적 큐레이션 요약본과 로드맵 키트가 정상 발달되었습니다. 메일함을 확인해주세요! 🚀
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
