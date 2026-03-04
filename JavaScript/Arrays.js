let avengers = ["Iron Man", "Captain America", "Hulk", "Hawkeye", "Black Widow", "Thor"];
console.log(avengers);
console.log(avengers.length);
console.log(typeof avengers);
/* This will return object.
This is because an array is also an object where the key are the indices.*/

let marks = [92, 87, 83, 99, 100];
console.log(marks);
console.log(marks[3]);
console.log(marks[1]);
marks[1]=89;
console.log(marks[1]);

// Traversal
// For Loop
let heros = ["Iron Man", "Batman", "War Machine", "Black Panther", "Aquaman", "Hawkeye", "Antman"];
for (let i=0; i<heros.length; i++){
	console.log(heros[i]);
}

// For-Of Loop
let cities = ["Delhi", "Kolkata", "Chennai", "Mumbai"];
for (let ele of cities){
	console.log(ele);
}
