import type { Ionicons } from '@expo/vector-icons';
import type { Subject, Unit } from '@/content/types';
import { unit01 } from '@/content/units/unit-01-principios';
import { unit02 } from '@/content/units/unit-02-oferta-demanda';
import { unit03 } from '@/content/units/unit-03-elasticidad';
import { unit04 } from '@/content/units/unit-04-comportamiento-consumidor';
import { unit05 } from '@/content/units/unit-05-costos-produccion';
import { unit06 } from '@/content/units/unit-06-estructuras-mercado';
import { unit07 } from '@/content/units/unit-07-fallas-mercado';
import { unit08 } from '@/content/units/unit-08-politicas-publicas';
import { unit09 } from '@/content/units/unit-09-medicion-macroeconomica';
import { unit10 } from '@/content/units/unit-10-ahorro-inversion';
import { unit11 } from '@/content/units/unit-11-dinero-inflacion';
import { unit12 } from '@/content/units/unit-12-crecimiento-economico';
import { unit13 } from '@/content/units/unit-13-fluctuaciones-oferta-demanda-agregada';
import { unit14 } from '@/content/units/unit-14-politica-monetaria-fiscal';
import { unit15 } from '@/content/units/unit-15-economia-abierta';
import { unit16 } from '@/content/units/unit-16-crisis-economicas';

export const units: Unit[] = [
  unit01,
  unit02,
  unit03,
  unit04,
  unit05,
  unit06,
  unit07,
  unit08,
  unit09,
  unit10,
  unit11,
  unit12,
  unit13,
  unit14,
  unit15,
  unit16,
].sort((a, b) => a.index - b.index);

export function getUnit(unitId: string): Unit | undefined {
  return units.find((u) => u.id === unitId);
}

export function getLesson(unitId: string, lessonId: string) {
  const unit = getUnit(unitId);
  const lesson = unit?.lessons.find((l) => l.id === lessonId);
  return unit && lesson ? { unit, lesson } : undefined;
}

export function totalLessonCount(): number {
  return units.reduce((sum, u) => sum + u.lessons.length, 0);
}

export function unitsBySubject(subject: Subject): Unit[] {
  return units.filter((u) => u.subject === subject);
}

/**
 * 1-based position of a unit within its own subject, so each subject can be
 * numbered independently (Micro 1–8, Macro 1–8) regardless of global index.
 */
export function subjectDisplayNumber(unit: Unit): number {
  return unitsBySubject(unit.subject).findIndex((u) => u.id === unit.id) + 1;
}

export type SubjectMeta = {
  subject: Subject;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
};

export const SUBJECTS: SubjectMeta[] = [
  {
    subject: 'microeconomia',
    title: 'Microeconomía',
    description: 'Decisiones individuales, mercados y precios.',
    icon: 'people-outline',
    color: '#0F566E',
  },
  {
    subject: 'macroeconomia',
    title: 'Macroeconomía',
    description: 'La economía en su conjunto: PIB, inflación, crecimiento.',
    icon: 'earth-outline',
    color: '#B14E33',
  },
];

export function getSubjectMeta(subject: Subject): SubjectMeta | undefined {
  return SUBJECTS.find((s) => s.subject === subject);
}

export function isSubject(value: string): value is Subject {
  return value === 'microeconomia' || value === 'macroeconomia';
}
