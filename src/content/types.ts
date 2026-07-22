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

/**
 * Declarative spec for a small economic diagram (supply/demand, AD/AS, cost
 * curves…). Coordinates are in data units; the renderer scales them to fit.
 * Colors are semantic tokens resolved against the active theme.
 */
export type ChartColor = 'brand' | 'accent' | 'success' | 'danger' | 'muted';

export type ChartPoint = { x: number; y: number };

export type ChartLine = {
  points: ChartPoint[]; // straight segments between consecutive points
  color?: ChartColor; // default 'brand'
  dashed?: boolean;
  label?: string; // drawn near the last point, e.g. "D", "O", "DA"
};

export type ChartRegion = {
  points: ChartPoint[]; // closed polygon, filled translucently
  color?: ChartColor;
  label?: string; // drawn at the polygon centroid, e.g. "EC"
};

export type ChartMarker = {
  x: number;
  y: number;
  label?: string; // e.g. "E", "P*"
  guides?: boolean; // dashed guide lines from the point to both axes
};

export type ChartSpec = {
  xLabel: string; // e.g. "Cantidad (Q)"
  yLabel: string; // e.g. "Precio (P)"
  xMax: number; // data domain is 0..xMax
  yMax: number; // data domain is 0..yMax
  lines: ChartLine[];
  regions?: ChartRegion[];
  markers?: ChartMarker[];
  caption?: string; // short text under the chart
};

type BaseExercise = {
  id: string;
  difficulty: Difficulty;
  xp: number;
  hint?: string;
  chart?: ChartSpec; // optional diagram shown above the question
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
