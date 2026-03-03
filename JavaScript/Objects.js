const student = {
	appt: "SCC",
	name: "Amit Poonia",
	age: 21,
	cgpa: 7.5
}
console.log(student);
console.log(typeof student);
console.log(student.appt);
console.log(student["name"]);
console.log(typeof student.name);

student["appt"]="DCC";
student.name = "Gopal Balyan";
student["age"] = student["age"]+1;
student.cgpa = 8.5;
console.log(student);

