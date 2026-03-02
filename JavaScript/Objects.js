const student = {
	name: "Amit Poonia",
	age: 21,
	cgpa: 7.5
}
console.log(student)
typeof student;
console.log(student["name"]);
console.log(student.age);

student["age"] = student["age"]+1;
console.log(student.age);

student.name = "Gopal Balyan";
console.log(student);

student.cgpa = 8.5;
console.log(student);