const words = ["Développeuse Front", "Développeuse Interactive", "Développeuse d'interface"];
const dynamicText = document.getElementById("dynamic-text");
let wordIndex = 0;

function updateWord() {
    dynamicText.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

// Change word every 2 seconds
setInterval(updateWord, 2000);

// Initialize with the first word
updateWord();

function ShowPhone(){
    let xbutton = document.querySelector(".tel-button") ;
     xbutton.textContent = "07 83 69 92 93";
}
function ShowPhone2(){
    let xbutton = document.querySelector(".telephone-button") ;
     xbutton.textContent = "07 83 69 92 93";
}

function ShowMail(){
    let abutton = document.querySelector(".mail-button");
    abutton.textContent = "naths.raf@gmail.com" ;
}

function ShowMail2(){
    let abutton = document.querySelector(".message-button");
    abutton.textContent = "naths.raf@gmail.com" ;
}

function DisplayNav(){
    let x = document.querySelector("nav") ;
    x.style.width = "380px" ;
}