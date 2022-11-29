export interface bodyToSaveAbsence {
  students_id: number[];
  ids_period_discipline_class: {
      discipline_id: number;
      period_id: number;
      class_id: number;
      justification: string;
  };
}

export function converterToSaveAbsence(data: bodyToSaveAbsence) {
  const array = {
    students_id: data.students_id,
    ids_period_discipline_class: {
      discipline_id: data.ids_period_discipline_class.discipline_id,
      period_id: data.ids_period_discipline_class.period_id,
      class_id: data.ids_period_discipline_class.class_id,
      justification: data.ids_period_discipline_class.justification,
    },
  };

  return array;
}

export function converterToEditAbsence(data: bodyToSaveAbsence) {
  const array = {
    absence: {
      ...data.students_id
    }
}
  return array;
}

