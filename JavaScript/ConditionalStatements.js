let age = 17;

if (age>=18){
	console.log("Eligible to Vote");
}
else{
	console.log("Not Eligible to Vote")
}

//If-Else Statements
let num = 5;
if (num%2 == 0){
	console.log(num, " is Even.");
}
else{
	console.log(num, " is Odd.");
}

//If, Else-If and Else Statements
age = 45;
if (age<18){
	console.log("Minor");
}
else if (age>=18 && age<=60){
	console.log("Adult");
}
else{
	console.log("Senior Citizen")
}

//Ternary Operator
age = 5;
console.log(age>=18 ? "Adult" : "Minor");