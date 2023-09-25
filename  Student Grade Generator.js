function studentGrade(marks) {
  if (marks >= 79) {
      return "A";
  } else if (marks >= 60 && marks <= 79) {
      return "B";
  } else if (marks >= 50 && marks <= 59) {
      return "C";
  } else if (marks >= 40 && marks <= 49) {
      return "D";
  } else {
      return "E";
  }
}

const marks = 70;
const grade = studentGrade(marks);

console.log(`Marks: ${marks}, Grade: ${grade}`);
