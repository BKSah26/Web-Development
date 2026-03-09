let x = document.querySelector("h1");
console.log(x);

let y = document.querySelectorAll("h1");
console.log(y);

let z = document.querySelectorAll(".yes");
console.log(z);

let h2 = document.querySelector("h2");
setTimeout(function(){
	h2.style.color = "red";	
}, 2000);


let h1 = document.querySelector("h1");
setTimeout(function(){
	h1.style.backgroundColor = "green";
	h1.innerHTML = "NDA - Oscar Squadron(Abhimanyu Battalion)";	
},2000);

//Event Listeners
let pok1 = document.getElementById("ele1");
console.log(pok1);
pok1.addEventListener("click", function(){
	pok1.style.color="yellow";
	pok1.style.backgroundColor="red";
})

let pok2 = document.getElementById("ele2");
console.log(pok2);
pok1.addEventListener("mousemove", function(){
	pok2.style.color="white";
	pok2.style.backgroundColor="orange";
})

let pok3 = document.getElementById("ele3");
console.log(pok3);
pok3.addEventListener("mouseenter", function(){
	pok3.style.color="purple";
	pok3.style.backgroundColor="violet";
})
pok3.addEventListener("mouseleave", function(){
	pok3.style.color="black";
	pok3.style.backgroundColor="white";
})
pok3.addEventListener("click", function(){
	pok1.innerHTML = "Bulbasaur";
	pok1.style.color="blue";
	pok1.style.backgroundColor="teal";
})
