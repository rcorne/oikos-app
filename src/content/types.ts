/**
 * Content schema for Oikos. Units and lessons are plain data (see
 * src/content/units/*) so new material can be added without touching any
 * screen or engine code.
 */

export type IoniconName =
  | 'compass-outline'
  | 'swap-horizontal-outline'
  | 'trending-up-outline'
  | 'person-outline'
  | 'construct-outline'
  | 'business-outline'
  | 'leaf-outline'
  | 'flag-outline'
  | 'stats-chart-outline'
  | 'wallet-outline'
  | 'cash-outline'
  | 'rocket-outline'
  | 'pulse-outline'
  | 'settings-outline'
  | 'globe-outline'
  | 'warning-outline';

export type Subject = 'microeconomia' | 'macroeconomia';

export type Unit = {
  id: string;
  index: number;
  subject: Subject;
  title: string;
  subtitle: string;
  description: string;
  icon: IoniconName;
  color: string;
  source: 'mankiw' | 'frank' | 'ambos' | 'mankiw-macro' | 'larrain-sachs' | 'ambos-macro';
  lessons: Lesson[];
};

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'callout'; tone: 'info' | 'tip' | 'warning'; title?: string; text: string }
  | { type: 'example'; title: string; text: string }
  | { type: 'formula'; label?: string; text: string };

export type Lesson = {
  id: string;
  title: string;
  summary: string;
  estimatedMinutes: number;
  content: ContentBlock[];
  exercises: Exercise[];
};

export type Difficulty = 'facil' | 'media' | 'dificil';

type BaseExercise = {
  id: string;
  difficulty: Difficulty;
  xp: number;
  hint?: string;
};

export type MultipleChoiceOption = {
  id: string;
  text: string;
};

export type MultipleChoiceExercise = BaseExercise & {
  type: 'multiple_choice';
  question: string;
  options: MultipleChoiceOption[];
  correctOptionId: string;
  explanation: string;
};

export type NumericExercise = BaseExercise & {
  type: 'numeric';
  question: string;
  unitLabel?: string; // e.g. "$", "unidades", "%"
  answer: number;
  tolerance?: number; // absolute tolerance, default 0
  explanation: string;
  decimals?: number; // how many decimals the keypad should allow, default 0
};

export type CaseStudyExercise = BaseExercise & {
  type: 'case_study';
  scenario: string;
  question: string;
  options: MultipleChoiceOption[];
  correctOptionId: string;
  explanation: string;
};

export type KeyPoint = {
  id: string;
  label: string;
  synonyms: string[];
};

export type OpenEndedAudioExercise = BaseExercise & {
  type: 'open_ended_audio';
  prompt: string;
  keyPoints: KeyPoint[];
  minPointsToPass: number;
  sampleAnswer: string;
  explanation: string;
};

export type Exercise = MultipleChoiceExercise | NumericExercise | CaseStudyExercise | OpenEndedAudioExercise;

export type ExerciseGrade = {
  correct: boolean;
  score: number; // 0..1
  feedbackTitle: string;
  feedback: string;
  matchedPoints?: string[];
  missingPoints?: string[];
};
