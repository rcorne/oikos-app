import type { Unit } from '@/content/types';
import { unit01 } from '@/content/units/unit-01-principios';
import { unit02 } from '@/content/units/unit-02-oferta-demanda';
import { unit03 } from '@/content/units/unit-03-elasticidad';
import { unit04 } from '@/content/units/unit-04-comportamiento-consumidor';
import { unit05 } from '@/content/units/unit-05-costos-produccion';
import { unit06 } from '@/content/units/unit-06-estructuras-mercado';
import { unit07 } from '@/content/units/unit-07-fallas-mercado';
import { unit08 } from '@/content/units/unit-08-politicas-publicas';

export const units: Unit[] = [unit01, unit02, unit03, unit04, unit05, unit06, unit07, unit08].sort(
  (a, b) => a.index - b.index,
);

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
