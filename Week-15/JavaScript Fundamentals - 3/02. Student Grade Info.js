/*02.  Define an object that represents a student's information including name, age, and grade. Implement
 a method to update the student's grade. */

// Object Representing Student Grade Information
const student = {
    name: "Chinmay",
    age: "23",
    grade: "B"
}

// Method For Updation of Grades of Student
function updateGrade(newGrade) {
    student.grade = newGrade;
}
updateGrade("A");

console.log(student);