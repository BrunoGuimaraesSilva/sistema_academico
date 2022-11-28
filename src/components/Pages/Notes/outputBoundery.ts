interface StudentsId {
  first_test: string[];
  second_test: string[];
  first_job: string[];
  second_job: string[];
}

interface IdsPeriodDiscipline {
  discipline_id: number;
  period_id: number;
  note: string;
}

export interface bodyToSaveNotes {
  students_id: StudentsId;
  ids_period_discipline: IdsPeriodDiscipline;
}

export function converterToSaveNotes(data: bodyToSaveNotes) {

  const array = {
    students_id: data.students_id.first_job,
    ids_period_discipline: {
      discipline_id: data.ids_period_discipline.discipline_id,
      period_id: data.ids_period_discipline.period_id,
      note: data.ids_period_discipline.note,
    },
  };
  
  return array
}

export function converterToEditNotes(data: bodyToSaveNotes) {

  const array = {
    students_id: data.students_id,
    ids_period_discipline: {
      discipline_id: data.ids_period_discipline.discipline_id,
      period_id: data.ids_period_discipline.period_id,
      note: data.ids_period_discipline.note,
    },
  };
  
  return array
}