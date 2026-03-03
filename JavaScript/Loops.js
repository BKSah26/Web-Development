for (let i = 1; i<=5; i++){
	console.log(i);
}

//Sum of first n numbers
let sum = 0;
let n = prompt("Enter n");
for (let i=1; i<=n; i++){
	sum+=i;
}
console.log("Sum: ", sum);