const words = ["Développeuse Front", "Développeuse Interactive", "Développeuse d'interface"];
const dynamicText = document.getElementById("dynamic-text");
let wordIndex = 0;

function updateWord() {
    dynamicText.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

setInterval(updateWord, 2000);


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

document.getElementById("telechargercv").addEventListener("click", function () {
    const pdfUrl = "CV_Rafelana_Anaelle_Alternance.pdf"; 
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = pdfUrl ;
    a.click();
  });