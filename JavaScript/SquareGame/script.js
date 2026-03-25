let s1 = document.getElementById("box1");
s1.addEventListener("mouseenter", function(){
    let val = Math.floor(Math.random()*100);
    s1.innerHTML=`<h1>${val}</h1>`;
})
s1.addEventListener("mouseleave", function(){
    s1.innerHTML="<h1>1</h1>";
})

let s2 = document.getElementById("box2");
let clr = "green";
s2.addEventListener("mouseenter", function(){
    if (clr=="green"){
        s2.style.backgroundColor = "green";
        clr = "grey";
    }
    else{
        s2.style.backgroundColor = "grey";
        clr = "green";
    }
})
s2.addEventListener("mouseleave", function(){
    s2.style.backgroundColor="white";
})

let s3 = document.getElementById("box3");
s3.addEventListener("mouseenter", function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${r1}, ${r2}, ${r3})`;
})
s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor="white";
})

let s4 = document.getElementById("box4");
s4.addEventListener("click", function(){
    let random1 = Math.floor(Math.random()*256);
    let random2 = Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(255, ${random1}, ${random2})`;
    s2.style.backgroundColor=`rgb(${random1}, 255, ${random2})`;
    s3.style.backgroundColor=`rgb(${random1}, ${random2}, 255)`;
})
s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
})