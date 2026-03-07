function welcome(name){
	console.log(`Hello ${name}!`);
	console.log("Welcome to Mt Olympus!");
}
let Name = prompt("Please enter your name!");
welcome(Name);

// Sum of 2 Numbers
function sum(x, y){
	let s=x+y;
	return s;
}
let ans = sum(2, 3);
console.log(ans);

// Arrow Functions
let mul = (a, b)=>{
	return a*b;
}
ans = mul(1, 2);
console.log(ans);

const print = () =>{
	console.log("Zeus: The King of Olympians");
}
print();

//forEach Loop in Arrays
let arr [1, 2, 3, 4, 5];
arr.forEach(function printVal)