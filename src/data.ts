/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, Personality, Certificate, Activity, Habit } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: '⌛ 시험 기간이 시작되었을 때, 당신의 공부 방식은 어떤가요?',
    options: [
      {
        text: '완벽한 시간대별 일정을 짜고, 계획대로 하루 분량을 채워간다.',
        score: { strategist: 3, analyst: 1 }
      },
      {
        text: '우선 가장 급하고 중요해 보이는 과목부터 무작정 시작하고 본다.',
        score: { challenger: 3, leader: 1 }
      },
      {
        text: '왜 이 개념이 나왔는지 근본 원리부터 파고들어 깊이 연구한다.',
        score: { analyst: 3, strategist: 1 }
      },
      {
        text: '친구들을 모아 스터디 그룹을 만들어 서로 설명하면서 외운다.',
        score: { leader: 3, challenger: 1 }
      }
    ]
  },
  {
    id: 2,
    text: '☘️ 하루 중 당신에게 가장 짜릿한 성취감을 주는 순간은?',
    options: [
      {
        text: '직접 아이디어를 내서 개발이나 공모전 프로젝트에 도전해 결과물이 나올 때',
        score: { challenger: 3, strategist: 1 }
      },
      {
        text: '오늘 할 일 체크리스트에 완벽히 줄이 그어지고 습관을 100% 지켰을 때',
        score: { strategist: 3, analyst: 1 }
      },
      {
        text: '어려운 책을 다 이해했거나, 고난도 코딩/자격증 문제를 스스로 풀어냈을 때',
        score: { analyst: 3, leader: 1 }
      },
      {
        text: '팀원들과 치열하게 소통하여 갈등을 풀고, 멋진 시너지를 이끌어냈을 때',
        score: { leader: 3, challenger: 1 }
      }
    ]
  },
  {
    id: 3,
    text: '🚀 매력적인 대외활동/인턴십 공고를 발견했을 때 당신의 행동은?',
    options: [
      {
        text: '합격 가능성과 내 진로 로드맵 상의 가치를 철저히 수치화해보고 지원 여부를 결정한다.',
        score: { strategist: 3, analyst: 1 }
      },
      {
        text: '일단 재미있어 보이고 배울 점이 있다면, 스펙이 꽉 차지 않았더라도 지원서 조항부터 쓴다.',
        score: { challenger: 3, leader: 1 }
      },
      {
        text: '해당 기업이나 부서의 연구 실적, 이전 합격 수기를 깊이 있게 논문 수준으로 분석해본다.',
        score: { analyst: 3, strategist: 1 }
      },
      {
        text: '주변 지인들 중 이 공고를 같이 하거나 조언을 줄 만한 선배들을 무작정 찾아 커피챗을 가진다.',
        score: { leader: 3, challenger: 1 }
      }
    ]
  },
  {
    id: 4,
    text: '🏝️ 대망의 방학이 시작되었을 때, 당신의 태도는?',
    options: [
      {
        text: '취미, 휴식, 어학, 자격증, 미라클 모닝을 촘촘한 버킷리스트 엑셀 파일로 세팅한다.',
        score: { strategist: 3, challenger: 1 }
      },
      {
        text: '해커톤, 전국 배낭여행, 프로젝트 빌딩 등 최대한 몸으로 부딪치며 다채롭게 방학을 불태운다.',
        score: { challenger: 3, leader: 1 }
      },
      {
        text: '그동안 학기 중에 여유가 없어 밀려두었던 전공 서적이나 원서 독파, 심화 코스에 집중한다.',
        score: { analyst: 3, strategist: 1 }
      },
      {
        text: '각지 연구회, 네트워킹 파티, 각종 소모임 및 스터디 리더를 자처하며 사람들을 만난다.',
        score: { leader: 3, challenger: 1 }
      }
    ]
  },
  {
    id: 5,
    text: '💡 해결하기 막막한 대학 과제나 과업을 부딪혔을 때 대처법은?',
    options: [
      {
        text: '질문과 목표를 쪼개어 세부 task를 만들고 한 단계씩 성실하게 정복해 나간다.',
        score: { strategist: 3, analyst: 1 }
      },
      {
        text: '일단 직접 한 가지 방식을 빠르게 시도하여 프로토타입을 만들어 피드백을 수용한다.',
        score: { challenger: 3, leader: 1 }
      },
      {
        text: '도서관, 해외 레포트, 유튜브 전문가 강연 등을 구글링하여 확실한 학술론적 검토 끝에 풀이한다.',
        score: { analyst: 3, strategist: 1 }
      },
      {
        text: '교수님, 대학 선배, 전문가, 혹은 동기 영재들을 포섭하고 함께 이야기를 나눠 돌파구를 찾는다.',
        score: { leader: 3, challenger: 1 }
      }
    ]
  }
];

export const PERSONALITIES: Record<string, Personality> = {
  challenger: {
    key: 'challenger',
    title: '열정의 불꽃 피어니어',
    subtitle: '도전적이고 거침없이 실천하는 행동파',
    description: '이론 공부에만 얽매이기보다 해커톤, 스타트업 프로젝트, 배낭여행처럼 현장에서 부딪치며 능력을 극대화하는 것을 선호합니다. 뛰어난 추진력과 문제 해결력으로 무에서 유를 창조하는 리더십 혹은 퍼포머 타입입니다.',
    badge: '추진력 대장',
    color: 'emerald',
    strengths: ['극대화된 실행력', '위기 대처 능력', '적당한 낙천주의와 회복탄력성'],
    weaknesses: ['마무리가 다소 아쉬움', '루틴 반복 시 쉽게 지루해함', '과도한 번아웃 주의'],
    habits: [
      '하루 1개 새로운 아이디어 메모하기',
      '프로젝트 데드라인 마일스톤 시각화하기',
      '매주 일요일 저녁 추진 성과 3가지 체크하기'
    ],
    books: [
      { title: '제로 투 원', author: '피터 틸', desc: '새로운 가치를 창조하고 아이디어를 비즈니스로 만드는 추진력의 바이블' },
      { title: '그릿(GRIT)', author: '앤절라 더크워스', desc: '포기하지 않는 끈기와 끈끈한 실행 지침' }
    ]
  },
  strategist: {
    key: 'strategist',
    title: '체계적인 설계 장인',
    subtitle: '일정과 루틴을 신성하게 여기는 계획파',
    description: '하루, 일주일, 한 달의 데일리 체크리스트가 완벽하게 돌아갈 때 큰 심리적 안정감과 성장의 기쁨을 누립니다. 학점 관리, 정기 자격증, 루린 습관에 특히 강하며 효율적인 시간 조율에 천재적인 소질을 가지고 있습니다.',
    badge: '시간 배분 천재',
    color: 'indigo',
    strengths: ['정교하고 체계적인 계획력', '단기/장기 목표 지점 설계', '안정적인 멘탈 및 신뢰성'],
    weaknesses: ['돌발 상황에서 가해지는 극심한 스트레스', '융통성 발휘의 아쉬움', '완벽주의로 인한 시작의 유예'],
    habits: [
      '아침 기상 후 3분간 오늘 핵심 3대과제 선정하기',
      '뽀모도로 학습법(25분 집중 / 5분 휴식) 적용하기',
      '매주 금요일 전체 플랜 진도 및 완수율 리포트 작성'
    ],
    books: [
      { title: '아주 작은 습관의 힘', author: '제임스 클리어', desc: '정반대의 정교한 시스템을 만들어 작은 습관들이 인생을 극적으로 바꾸는 원리' },
      { title: '타이탄의 도구들', author: '팀 페리스', desc: '최정상에 오른 전략가들의 아침 습관과 생산성 기법 정리' }
    ]
  },
  analyst: {
    key: 'analyst',
    title: '집요한 지적 탐구자',
    subtitle: '눈에 보이지 않는 진리와 원리까지 파고드는 학구파',
    description: '얕게 대충 알고 넘어가는 지식을 싫어합니다. 대학원, 전공 원서 탐독, 고난도 기술 자격증(SQLD, 데이터 분석 등) 취득을 즐기며 깊고 가치 있는 고차원적인 전문 지식을 축적할 때 지적인 희열을 느낍니다.',
    badge: '지식 심층 마스터',
    color: 'amber',
    strengths: ['탁월한 집중력과 디테일', '철저한 팩트와 학문 근거 분석', '흔들리지 않는 고독한 인내'],
    weaknesses: ['대인 네트워킹에 대한 필요성 체감 부족', '지나치게 고착될 수 있는 사고방식', '과도한 딥다이브로 인한 기회비용'],
    habits: [
      '매일 공부한 기술 개념 1개 블로그나 위키에 완곡하게 정리하기',
      '스터디 후 타인이 쉽게 이해할 수 있는 요약본 제작하기',
      '하루 30분 전공 외 고전 및 인문학 철학 읽기'
    ],
    books: [
      { title: '생각에 관한 생각', author: '대니얼 카너먼', desc: '인간의 직관과 합리적 분석의 매커니즘을 밝혀낸 명작' },
      { title: '딥 워크(Deep Work)', author: '칼 뉴포트', desc: '방해꾼이 판치는 세상에서 고차원적 가치를 이끄는 집중력 훈련법' }
    ]
  },
  leader: {
    key: 'leader',
    title: '시너지 메이커 리더',
    subtitle: '사람과 기술을 조합하여 최상의 결과를 내는 소통파',
    description: '혼자 이룬 성취보다 여럿이 지혜를 모아 목표를 달성할 때 세상을 다 얻은 기분을 느낍니다. 친구들과 동기들에게 긍정적인 에너지를 불어넣으며, 소통과 중재를 통해 막힌 일도 한 방에 물꼬를 트게 만드는 최고의 협동가입니다.',
    badge: '인맥 & 시너지 허브',
    color: 'sky',
    strengths: ['자연스러운 커뮤니케이션 능력', '팀 시너지 조율 및 공감력', '강력한 동기 유발가'],
    weaknesses: ['가끔 거절이 힘들어 과도한 부탁을 받음', '고독하게 혼자 공부하는 시간에 대한 부담', '외부 기대에 대한 심리적 압박'],
    habits: [
      '나의 아이디어를 피드백해 줄 스터디원 그룹 개설 혹은 참여하기',
      '매주 최소 1명 새로운 선배/멘토와 커피챗하며 네트워킹하기',
      '다른 사람의 발표를 듣고 긍정적인 구체적 피드백 2개 건네기'
    ],
    books: [
      { title: '데일 카네기 인간관계론', author: '데일 카네기', desc: '사람의 마음을 얻고 지지자들을 모으는 평생 기술' },
      { title: '원칙', author: '레이 달리오', desc: '개방적인 마음으로 최고의 팀 조율 원칙과 소통 가이드 제시' }
    ]
  }
};

export const SAMPLE_CERTIFICATES: Certificate[] = [
  {
    id: 'cert_1',
    title: '컴퓨터활용능력 1급',
    category: 'General',
    difficulty: '상',
    avgPrepTime: '1.5개월 ~ 3개월',
    tips: [
      '엑셀 및 액세스 실기는 꼼꼼한 기본 기능 마스터 후 오답풀이 반복이 핵심입니다.',
      '최근 실기 기출 유형의 특이 함수들을 요약 모음하여 숙지하세요.'
    ]
  },
  {
    id: 'cert_2',
    title: 'ADsP (데이터분석준전문가)',
    category: 'IT',
    difficulty: '중',
    avgPrepTime: '3주 ~ 5주',
    tips: [
      '비전공자도 가능하지만 명확한 통계 및 R 문법 기본 개념 정리가 필수적입니다.',
      '서술형 개념이 빈번히 출제되므로 주관식 단답형 빈출 키워드를 암기하세요.'
    ]
  },
  {
    id: 'cert_3',
    title: '오픽 (OPIc) / 토익스피킹',
    category: 'Language',
    difficulty: '중',
    avgPrepTime: '2주 ~ 4주',
    tips: [
      '스크립트를 암기하듯 말하기보다 감탄사, 필러(wells, you know)를 섞어 원어민의 자연스러움을 흉내내세요.',
      '역할극(Role-play) 돌발 질문 해결 훈련이 고득점(IH, AL) 점수의 관건입니다.'
    ]
  },
  {
    id: 'cert_4',
    title: 'SQLD (SQL 개발자)',
    category: 'IT',
    difficulty: '중',
    avgPrepTime: '2주 ~ 4주',
    tips: [
      'SQL 조인(Join)과 서브쿼리 연산 순서를 한눈에 그리며 학습하세요.',
      '실제 쿼리 분석 문제를 꼼꼼하게 손으로 풀면서 풀이 역량을 다져야 합니다.'
    ]
  },
  {
    id: 'cert_5',
    title: '투자자산운용사 (투운사)',
    category: 'Finance',
    difficulty: '상',
    avgPrepTime: '2개월 ~ 3개월',
    tips: [
      '방대한 내용이기 때문에 1과점, 2과점 규정 파트는 선별적으로 빠르게 암기하는 걸 추천합니다.',
      '가장 문항 수가 많고 계산이 필요한 3과목 법규 및 자산관리 적용에 힘을 쏟으세요.'
    ]
  }
];

export const SAMPLE_ACTIVITIES: Activity[] = [
  {
    id: 'act_1',
    title: '대학생 연합 IT/벤처 동아리 (SOPT, 디프만, NEXT 등)',
    type: '동아리',
    organizer: '대학생 연합 기획단',
    target: 'IT 기획, 개발, 디자인에 관심 있는 대학생',
    duration: '6개월 (한 학기)',
    benefit: '현업 멘토 세미나, 실제 앱 출시 프로젝트, 대형 네트워킹 확보'
  },
  {
    id: 'act_2',
    title: '네이버 클라우드 / 삼성 청년 SW 아카데미 (SSAFY)',
    type: '인턴',
    organizer: '대기업 직무 육성 프로그램',
    target: '졸업생 혹은 졸업 예정 미취업 대학생 및 취준생',
    duration: '1년',
    benefit: '최상급 알고리즘/프로젝트 교육, 매월 교육비 100만 원 지원, 취업 연계 혜택'
  },
  {
    id: 'act_3',
    title: '국내 명망 기업 브랜드 대학생 서포터즈/앰배서더',
    type: '서포터즈',
    organizer: '국내 주요 기업 (식품, IT, 통신 등)',
    target: '콘텐츠 제작, 마케팅, SNS 및 영상 제작 능숙자',
    duration: '4개월 ~ 6개월',
    benefit: '활동비 및 장학금 지원, 입사 지원 시 서류 면제 및 우대 프리패스권 등'
  },
  {
    id: 'act_4',
    title: '전국 대학생 아이디어 혁신 해커톤 및 공모전',
    type: '행사/공모전',
    organizer: '과학기술정보통신부 및 주요 지자체',
    target: '혁신적인 솔루션 아이디어 및 구현력을 갖춘 3-5인 팀',
    duration: '단기 (1개월 이내 무박 해커톤)',
    benefit: '총상금 수천만 원 규모 및 특허 출원 연계, 창업 공간 무료 임대권'
  }
];

export const DEFAULT_HABITS: Habit[] = [
  { id: 'h_1', text: '매일 전공 공부 집중 시간 2시간 달성', category: 'academy', completedDays: {}, streak: 0, frequency: 'Daily' },
  { id: 'h_2', text: '어학 영단어 50개 암기 및 소리내어 복습', category: 'Language' as any, completedDays: {}, streak: 0, frequency: 'Daily' },
  { id: 'h_3', text: '일주일에 주 3회 30분 가량 러닝 또는 운동', category: 'health', completedDays: {}, streak: 0, frequency: '3 times/week' },
  { id: 'h_4', text: '취미 생활 혹은 독서 30페이지 읽기', category: 'hobby', completedDays: {}, streak: 0, frequency: 'Daily' },
  { id: 'h_5', text: '대학 동기 및 대외활동 인원들과 정기 안부 나누기', category: 'network', completedDays: {}, streak: 0, frequency: 'Once a week' }
];
