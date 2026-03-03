//For Loop
for (let i = 1; i<=5; i++){
	console.log("i: ", i);
}

//Sum of first n numbers
let sum = 0;
let n = prompt("Enter n");
for (let i=1; i<=n; i++){
	sum+=i;
}
console.log("Sum: ", sum);

//While Loop
let i = 1;
let mul = 5;
while (i<=10){
    console.log("5 x ", i, " = ", mul*i);
    i++;
}

//Do While Loop
i = 10;
do{
    console.log(i);
    i++;
}
while(i<10);

//For-Of Loop
let size = 0;
let name = "Maharana Pratap";
for (let chr of name){
    size++;
}
console.log("Size of String: ", size);

//For-In Loop
const cdt = {
    name: "Ashmit Khare",
    service: "Army",
    course: 149,
    cgpa: "7.5"
}

for (let key in cdt){
    console.log(key, ": ", cdt[key]);
}
