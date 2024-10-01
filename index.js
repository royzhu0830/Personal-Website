var today = new Date();
var bg = document.getElementById("dark-mode-bg");
var words = document.getElementsByClassName("dark-mode-word");
var nav = document.getElementById("dark-mode-nav");
var activate = document.getElementById("darkactivate")
let active = 0;

console.log(today.getHours());
activate.addEventListener("click", function(e){
    bg.style.backgroundColor = "#4C6079";
    for(let word of words){
        word.style.color="white";
    }
    nav.classList.remove("nav-light")
    nav.classList.remove("bg-light")
    nav.classList.add("nav-dark")
    nav.classList.add("bg-dark")
});
if(today.getHours()> 17){
    bg.style.backgroundColor = "#4C6079";
    for(let word of words){
        word.style.color="white";
    }
    nav.classList.remove("nav-light")
    nav.classList.remove("bg-light")
    nav.classList.add("nav-dark")
    nav.classList.add("bg-dark")
}
