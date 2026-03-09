let arr = ["apaches.jpg", "braves.jpg", "cheetahs.jpg", "daggers.jpg", "eagles.jpg", "fighters.jpg", "gladiators.jpg", "hunters.jpg", "injuns.jpg", "jaguars.jpg", "killers.jpg", "lions.jpg", "mustangs.jpg", "ninjas.jpg", "olympians.jpg", "panthers.jpg", "quasars.jpg", "rangers.jpg"];

let main = document.getElementById("main");
let s = "";
for (let i=1; i<=44; i++){
    let ran = Math.floor(Math.random()*18);
    s+=`<div class="card"><img src="${arr[ran]}" alt=""></div>`;
}
main.innerHTML=s;