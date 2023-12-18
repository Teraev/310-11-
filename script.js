let students = [
    {
        name: "Hasan",
        age: "2008-07-28",
        gender: 'm'
    },
    {
        name: "Alsafir",
        age: "2008-10-13",
        gender: 'm'
    },
    {
        name: "Allayor",
        age: "2008-06-24",
        gender: 'w'
    },
    {
        name: "Radmir",
        age: "2007-04-28",
        gender: 'w'
    },
    {
        name: "Jaxongir",
        age: "2006-09-03",
        gender: 'm'
    },
    {
        name: "Bexruz",
        age: "2007-11-27",
        gender: 'w'
    },
    {
        name: "Alibek",
        age: "2006-04-12",
        gender: 'm'
    },
    {
        name: "Bexruz",
        age: "2009-11-27",
        gender: 'w'
    },
]

let long = ''
let short = students[0].name


for (let student  of students) {
    if (student.name.length > long.length) {
        long = student.name
    }
}

for (let student  of students) {
    if (student.name.length < short.length ) {
        short = student.name
    }
    
}


console.log(long);
console.log(short);


let starshiy = students[0]
for(let i = 0; i < students.length; i++) {
  if(students[i].age < starshiy.age)
  starshiy=students[i]
}

let mladshiy= students[0]
for(let i = 0; i < students.length; i++) {
  if(students[i].age > mladshiy.age)
  mladshiy=students[i]
}


console.log(starshiy);
console.log(mladshiy);



