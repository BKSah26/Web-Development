//Arithmetic Operators
let a = 5;
let b = 2;

console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a+b);
console.log("a-b = ", a-b);
console.log("a*b = ", a*b);
console.log("a/b = ", a/b);
console.log("a%b = ", a%b);
console.log("a**b = ", a**b);

//Unary Operators
a++;
console.log("a after a++: ", a);
b--;
console.log("b after b--: ", b);

//Assignment Operators
a-=2;
console.log("a-=2: ", a);
b+=3;
console.log("b+=3: ", b);
a*=2;
console.log("a*=2: ", a);
b/=2;
console.log("b/=2: ", b);
b**=2;
console.log("b**=2: ", b);

//Relational Operators
console.log("a==b: ", a==b);
console.log("a!=b: ", a!=b);
console.log("a>b: ", a>b);
console.log("a<b: ", a<b);
console.log("a>=b: ", a>=b);
console.log("a<=b: ", a<=b);

a = 5;
b = "5";
//Here, a is a number and b is a string.
console.log("a==b: ", a==b);
/*This returns true because JavaScript converts the string to integer on its own while checking.
Hence, the output is true.*/

console.log("a===b: ", a===b);
/*This returns false because alongwith the value, it also checks the datatype.
Hence, the output is false in this case.*/

//Logical Operators
let cond1 = a>b;
let cond2 = b == 5;
console.log(cond1 && cond2);
console.log(cond1 || cond2);
console.log(!cond1);
console.log(!cond2);