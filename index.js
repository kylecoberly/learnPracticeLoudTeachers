// Refactor it until it:
//  Has no declared variables
//  Has no mutable state
//  Pushes side efects to the end
//  Uses pure functions
//  Uses no anonymous inline functions

// var teachers = ["Kyle", "Potts", "Damon", "Dina", "Vui", "Mark"];

// var loudTeacher = ""
// for (var i = 0; i < teachers.length; i++) {
//     loudTeacher = teachers[i] + "!"
//     console.log(loudTeacher);
// }

getTeachers()
    .map(loudify)
    .forEach(announce)

function getTeachers(){
    return ["Kyle", "Potts", "Damon", "Dina", "Vui", "Mark"]
}

function loudify(string){
    return `${string}!`
}

function announce(string){
    console.log(string)
}