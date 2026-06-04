/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Globe, Heart, FileCode, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-500 py-16 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* GitHub & Vercel Deployment Playbook Widget */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
                GitHub & Vercel 배포 가이드 (Deployment Playbook)
              </h4>
              <p className="text-slate-500 text-xs font-sans font-medium">
                작성한 코드 그대로 본인의 GitHub 저장소에 올리고 Vercel을 연동하여 랜딩페이지를 세상에 선보이세요!
              </p>
            </div>
            <div className="inline-flex gap-2 text-xs font-mono bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 text-indigo-700 font-extrabold">
              배포 규격: npm run build → /dist
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs leading-relaxed font-sans">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-3">
              <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center border border-slate-300">1</span>
              <div>
                <h5 className="font-bold text-slate-800 mb-1 flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-slate-600" />
                  GitHub 리포지토리 푸시
                </h5>
                <p className="text-slate-500 text-[11px] mb-2 leading-relaxed">
                  프로젝트의 루트 폴더에서 아래 명령어들을 입력해 깃허브에 코드를 안전하게 올려줍니다.
                </p>
                <code className="block bg-slate-900 text-emerald-400 p-3 rounded-md font-mono text-[10px] space-y-1 overflow-x-auto leading-normal">
                  git init <br />
                  git add . <br />
                  git commit -m "init unigrowth" <br />
                  git remote add origin [내-저장소-주소] <br />
                  git push -u origin main
                </code>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-3">
              <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center border border-slate-300">2</span>
              <div>
                <h5 className="font-bold text-slate-800 mb-1 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-slate-600" />
                  Vercel 간편 연동 등록
                </h5>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  1. <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-indigo-600 font-bold hover:underline">Vercel 닷컴</a>에 접속하고 가입/로그인 완료 <br />
                  2. 상단 우측 대시보드 <span className="font-bold text-slate-700">"Add New" &gt; "Project"</span> 버튼 선택 <br />
                  3. 방금 생성 및 업로드한 GitHub UniGrowth 저장소를 검색하여 <b>Import</b> 버튼 실행
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-3">
              <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center border border-slate-300">3</span>
              <div>
                <h5 className="font-bold text-slate-800 mb-1 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  빌드 완료 및 무료 호스팅
                </h5>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  프로젝트의 Framework Preset은 Vercel에 의해 <span className="text-indigo-600 font-bold font-mono">Vite</span>로 자동 감지됩니다. <br />
                  빌드 명령은 <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[9px] text-indigo-700">npm run build</code>, 최종 출력 폴더는 <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[9px] text-indigo-700">dist</code>입니다. <br />
                  <b>Deploy</b> 버튼을 클릭하면 실시간 도메인이 자동 부여되어 즉각 배포가 완료됩니다!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional info split */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4 border-t border-slate-200 text-xs text-slate-500 font-sans font-medium">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-slate-800 font-extrabold text-sm">UniGrowth (유니그로우스)</p>
            <p>© {new Date().getFullYear()} 대학생 자기계발 토탈 솔루션 스페이스. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6 font-bold text-slate-550">
            <a href="#hero" className="hover:text-slate-900 transition-colors">처음으로</a>
            <a href="#growth-test" className="hover:text-slate-900 transition-colors">성향진단</a>
            <a href="#planner" className="hover:text-slate-900 transition-colors">목록플래너</a>
            <a href="#resources" className="hover:text-slate-900 transition-colors">가이드허브</a>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Student Success</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
