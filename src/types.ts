/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: Record<string, number>; // e.g., { planner: 3, doer: 1 }
  }[];
}

export interface Personality {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  color: string;
  strengths: string[];
  weaknesses: string[];
  habits: string[];
  books: { title: string; author: string; desc: string }[];
}

export interface Habit {
  id: string;
  text: string;
  category: 'academy' | 'career' | 'health' | 'hobby' | 'network';
  completedDays: Record<string, boolean>; // date string "YYYY-MM-DD" -> status
  streak: number;
  frequency: string;
  isCustom?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  category: 'IT' | 'Language' | 'Finance' | 'General';
  difficulty: '상' | '중' | '하';
  avgPrepTime: string;
  tips: string[];
  links?: string;
}

export interface Activity {
  id: string;
  title: string;
  type: '행사/공모전' | '서포터즈' | '동아리' | '인턴';
  organizer: string;
  target: string;
  duration: string;
  benefit: string;
}
