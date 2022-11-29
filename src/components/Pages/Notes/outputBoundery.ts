interface StudentsNotes {
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
export interface BodyToSaveNotes {
  students_notes: StudentsNotes;
  students_id: number[];
  ids_period_discipline: IdsPeriodDiscipline;
}
interface StudentsTestFirst {
  first_test: string[];
  first_job: string[];
}

interface StudentsTestSecond {
  second_test: string[];
  second_job: string[];
  presence_grade: string[];
}

export function converterToSaveNotes(data: BodyToSaveNotes) {
  const array = {
    students_id: data.students_notes,
    ids_period_discipline: {
      discipline_id: data.ids_period_discipline.discipline_id,
      period_id: data.ids_period_discipline.period_id,
      note: data.ids_period_discipline.note,
    },
  };

  return array;
}

export function converterToSaveNotesFirstGrade(
  data: BodyToSaveNotes
): StudentsTestFirst {
  const firstTest = data.students_notes.first_test;
  const firstJob = data.students_notes.first_job;
  const firstJobResult: any[] = [];
  const firstTestResult: any[] = [];
  firstTest.shift();
  firstJob.shift();

  firstJob.forEach((elem, index) => {
    firstJobResult[data.students_id[index]] = elem;
  });

  firstTest.forEach((elem, index) => {
    firstTestResult[data.students_id[index]] = elem;
  });

  const array = {
    first_test: {
      ...firstTestResult,
    },
    first_job: {
      ...firstJobResult,
    },
  };

  return array;
}

export function converterToSaveNotesSecondGrade(
  data: BodyToSaveNotes
): StudentsTestSecond {
  const secondTest = data.students_notes.second_test;
  const secondJob = data.students_notes.second_job;
  const secondJobResult: any[] = [];
  const secondTestResult: any[] = [];
  const presenceGardeResult: any[] = [];
  secondTest.shift();
  secondJob.shift();

  secondJob.forEach((element1, index) => {
    secondJobResult[data.students_id[index]] = element1;
  });

  secondTest.forEach((element1, index) => {
    secondTestResult[data.students_id[index]] = element1;
  });

  secondTest.forEach((element1, index) => {
    presenceGardeResult[data.students_id[index]] = 0;
  });

  const array = {
    second_test: {
      ...secondTestResult,
    },
    second_job: {
      ...secondJobResult,
    },
    presence_grade: {
      ...presenceGardeResult,
    },
  };
  return array;
}

export function converterToEditNotes(data: BodyToSaveNotes) {
  const array = {
    students_id: data.students_id,
    ids_period_discipline: {
      discipline_id: data.ids_period_discipline.discipline_id,
      period_id: data.ids_period_discipline.period_id,
      note: data.ids_period_discipline.note,
    },
  };

  return array;
}
