/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Globe, Heart, FileCode, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* GitHub & Vercel Deployment Playbook Widget */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950/40 p-6 md:p-8 rounded-2xl border border-slate-800/80 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold text-slate-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                GitHub & Vercel 배포 플레이북 (Deployment Guide)
              </h4>
              <p className="text-slate-400 text-xs font-sans">
                이 템플릿 그대로 본인 포트폴리오 사이트나 대학생 홍보용 랜딩페이지로 쉽게 출범하세요.
              </p>
            </div>
            <div className="inline-flex gap-2 text-xs font-mono bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800 text-emerald-400 font-bold">
              BUILD: npm run build → /dist
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs leading-relaxed font-sans">
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-900 space-y-3">
              <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-200 font-bold text-xs flex items-center justify-center border border-slate-700">1</span>
              <div>
                <h5 className="font-bold text-slate-200 mb-1 flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  GitHub 저장소 업로드
                </h5>
                <p className="text-slate-400 text-[11px] mb-2 leading-snug">
                  프로젝트 루트 폴더에서 아래 명령어들을 차례대로 실행하여 GitHub에 업로드하세요.
                </p>
                <code className="block bg-black/60 p-2 rounded-md font-mono text-[10px] text-emerald-400 space-y-1 overflow-x-auto leading-normal">
                  git init <br />
                  git add . <br />
                  git commit -m "init" <br />
                  git remote add origin [주소] <br />
                  git push -u origin main
                </code>
              </div>
            </div>

            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-900 space-y-3">
              <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-200 font-bold text-xs flex items-center justify-center border border-slate-700">2</span>
              <div>
                <h5 className="font-bold text-slate-200 mb-1 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  Vercel 대시보드 연결
                </h5>
                <p className="text-slate-400 text-[11px] leading-snug">
                  1. <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">Vercel.com</a> 로그인 후 <span className="font-bold text-slate-300">"Add New" &gt; "Project"</span> 선택 <br />
                  2. 방금 올린 GitHub 리포지토리를 연동하여 불러오기 한 뒤 <b>Import</b> 진행
                </p>
              </div>
            </div>

            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-900 space-y-3">
              <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-200 font-bold text-xs flex items-center justify-center border border-slate-700">3</span>
              <div>
                <h5 className="font-bold text-slate-200 mb-1 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  빌드 및 배포 완료
                </h5>
                <p className="text-slate-400 text-[11px] leading-snug">
                  Framework Preset은 자동으로 <span className="text-indigo-400 font-semibold font-mono">Vite</span>로 감지됩니다. <br />
                  빌드 명령은 <code className="bg-black/60 px-1 py-0.5 rounded font-mono text-[9px] text-emerald-400">npm run build</code>, 출력 폴더는 <code className="bg-black/60 px-1 py-0.5 rounded font-mono text-[9px] text-emerald-400">dist</code>입니다. <br />
                  <b>Deploy</b> 버튼을 누르면 단 30초 만에 완벽한 도메인으로 배포 서비스가 실시간 개시됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional info split */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4 border-t border-slate-900 text-xs text-slate-500 font-sans">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-slate-400 font-semibold text-sm">GrowUp.캠퍼스</p>
            <p>© {new Date().getFullYear()} 대학생 자기계발 특화 플랫폼. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <a href="#hero" className="hover:text-slate-300 transition">처음으로</a>
            <a href="#growth-test" className="hover:text-slate-300 transition">성향진단</a>
            <a href="#planner" className="hover:text-slate-300 transition">목록플래너</a>
            <a href="#resources" className="hover:text-slate-300 transition">가이드허브</a>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Student Growth</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
