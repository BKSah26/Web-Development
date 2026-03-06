let str = "Priyanshu Sharma";

// Size
let size = str.length;
console.log("Length of String: ", size);

// String Indices
console.log(str[0]);

// Template Literals
let sentence = `This is a template literal.`;
console.log(sentence);
console.log(typeof sentence);

let obj = {
    item: "Pen",
    price: 10
}
//Normal printing
console.log("The cost of", obj.item, "is", obj.price, "rupees.");

// String Interpolation
let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);

console.log("Sartaj\nSingh\nBedi");

// String Methods
str = "Arpit Bhandari";
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

str = "    Ujjawal Ranjan    ";
console.log(str);
console.log(str.trim());

str="Adwitiya";
console.log(str.slice(0, 5));
console.log(str.slice(1));
console.log(str.concat(" Dixit"));
let newstr = str+" Dixit";
console.log(newstr);

str = "Degwesh Rathe";
console.log(str);
console.log(str.replace("w", "v"));
console.log(str.replaceAll("e", "i"))
console.log(str.charAt(5));