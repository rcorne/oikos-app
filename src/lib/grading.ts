import type {
  CaseStudyExercise,
  Exercise,
  ExerciseGrade,
  MultipleChoiceExercise,
  NumericExercise,
  OpenEndedAudioExercise,
} from '@/content/types';

/** Lowercase, strips accents/punctuation, collapses whitespace. */
const COMBINING_MARKS_REGEX = /[̀-ͯ]/g;

export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(COMBINING_MARKS_REGEX, '') // strip combining accents left by NFD normalization
    .toLowerCase()
    .replace(/[^a-z0-9ñ\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesKeyPoint(normalizedAnswer: string, synonyms: string[]): boolean {
  return synonyms.some((synonym) => normalizedAnswer.includes(normalize(synonym)));
}

export function gradeMultipleChoice(exercise: MultipleChoiceExercise | CaseStudyExercise, selectedOptionId: string): ExerciseGrade {
  const correct = selectedOptionId === exercise.correctOptionId;
  return {
    correct,
    score: correct ? 1 : 0,
    feedbackTitle: correct ? '¡Correcto!' : 'No es la respuesta correcta',
    feedback: exercise.explanation,
  };
}

export function gradeNumeric(exercise: NumericExercise, value: number): ExerciseGrade {
  const tolerance = exercise.tolerance ?? 0;
  const correct = Number.isFinite(value) && Math.abs(value - exercise.answer) <= tolerance;
  return {
    correct,
    score: correct ? 1 : 0,
    feedbackTitle: correct ? '¡Correcto!' : `La respuesta correcta era ${exercise.answer}${exercise.unitLabel ? ` ${exercise.unitLabel}` : ''}`,
    feedback: exercise.explanation,
  };
}

export function gradeOpenEnded(exercise: OpenEndedAudioExercise, answerText: string): ExerciseGrade {
  const normalizedAnswer = normalize(answerText);

  if (!normalizedAnswer) {
    return {
      correct: false,
      score: 0,
      feedbackTitle: 'No registramos una respuesta',
      feedback: 'Intenta de nuevo: graba o escribe tu respuesta antes de continuar.',
      matchedPoints: [],
      missingPoints: exercise.keyPoints.map((k) => k.label),
    };
  }

  const matched = exercise.keyPoints.filter((point) => matchesKeyPoint(normalizedAnswer, point.synonyms));
  const missing = exercise.keyPoints.filter((point) => !matched.includes(point));
  const score = matched.length / exercise.keyPoints.length;
  const passed = matched.length >= exercise.minPointsToPass;

  let feedbackTitle: string;
  if (matched.length === exercise.keyPoints.length) {
    feedbackTitle = '¡Excelente respuesta!';
  } else if (passed) {
    feedbackTitle = 'Buena respuesta';
  } else if (matched.length > 0) {
    feedbackTitle = 'Te faltó profundizar';
  } else {
    feedbackTitle = 'Respuesta incompleta';
  }

  const missingText =
    missing.length > 0 ? `Podrías reforzar: ${missing.map((m) => m.label.toLowerCase()).join('; ')}.` : '';

  return {
    correct: passed,
    score,
    feedbackTitle,
    feedback: [exercise.explanation, missingText].filter(Boolean).join(' '),
    matchedPoints: matched.map((m) => m.label),
    missingPoints: missing.map((m) => m.label),
  };
}

export type ExerciseResponse =
  | { type: 'multiple_choice'; optionId: string }
  | { type: 'numeric'; value: number }
  | { type: 'case_study'; optionId: string }
  | { type: 'open_ended_audio'; text: string };

export function gradeExercise(exercise: Exercise, response: ExerciseResponse): ExerciseGrade {
  switch (exercise.type) {
    case 'multiple_choice':
      if (response.type !== 'multiple_choice') throw new Error('Response/exercise type mismatch');
      return gradeMultipleChoice(exercise, response.optionId);
    case 'case_study':
      if (response.type !== 'case_study') throw new Error('Response/exercise type mismatch');
      return gradeMultipleChoice(exercise, response.optionId);
    case 'numeric':
      if (response.type !== 'numeric') throw new Error('Response/exercise type mismatch');
      return gradeNumeric(exercise, response.value);
    case 'open_ended_audio':
      if (response.type !== 'open_ended_audio') throw new Error('Response/exercise type mismatch');
      return gradeOpenEnded(exercise, response.text);
  }
}
