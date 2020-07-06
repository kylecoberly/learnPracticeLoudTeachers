// Refactor it until it:
//  Has no declared variables
//  Has no mutable state
//  Pushes side efects to the end
//  Uses pure functions
//  Uses no anonymous inline functions

var teachers = ["Kyle", "Potts", "Damon", "Dina", "Vui", "Mark"];

var loudTeacher = ""
for (var i = 0; i < teachers.length; i++) {
    loudTeacher = teachers[i] + "!"
    console.log(loudTeacher);
}
