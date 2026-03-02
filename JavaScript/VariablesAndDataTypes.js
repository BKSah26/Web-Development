let name = "Tony Stark";
console.log(name);
typeof name;

let age = 24;
console.log(age);
typeof age;

let result = true;
console.log(result);
typeof result;

let x = null;
console.log(x);
typeof x;

let y;
console.log(y);
typeof y;

let num = BigInt("123");
console.log(num);
typeof num;

let sym = Symbol("Hello!");
console.log(sym);
typeof sym;

const pi = 3.14;
//Constant values cannot be redefined.
console.log(pi);

{
	let x = 5;
	console.log(x);
}
{
	let x = 10;
	console.log(x);
}