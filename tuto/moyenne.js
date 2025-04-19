function avg(notes) {
  if (notes.length === 0) {
    return 0;
  }

  let sum = notes.reduce((acc, val) => acc + val, 0);
  return (sum / notes.length).toFixed(2) * 1;
}

const students = [
  {
    name: "John",
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: "Jane",
    notes: [17, 18, 20, 13, 15],
  },
  {
    name: "Sophie",
    notes: [17, 12, 14, 15, 13],
  },
  {
    name: "Marc",
    notes: [2, 3, 5, 8, 9],
  },
  {
    name: "Mason",
    notes: [18, 17, 18, 19, 12],
  },
];

for (let student of students) {
  student.average = avg(student.notes);
}

const compareNotes = (a, b) => {
  return b.average - a.average;
};

students.sort(compareNotes);

const formatStudent = (student) => {
  return `${student.name} avec une moyenne de ${student.average}
    Note maximale: ${Math.max(
      ...student.notes
    )} | Note minimale: ${Math.min(...student.notes)}\n`;
};

console.log(`Top trois etudiants:
1: ${formatStudent(students[0])}
2: ${formatStudent(students[1])}
3: ${formatStudent(students[2])}`);