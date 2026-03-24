console.log("Hello");
let bulb = document.getElementById("bulb");
let click = 0;
bulb.addEventListener("click", function(){
    if (click%2==0){
        bulb.innerHTML=`<div id="bulb"><img src="bulbOn.jpg"></div>`;
        click++;
    }
    else{
        bulb.innerHTML=`<div id="bulb"><img src="bulbOff.jpg"></div>`;
        click++;
    }
})