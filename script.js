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
    let redirect = document.createElement("a");
    redirect.href = "https://naths.raf@gmail.com";
    redirect.click();
}

function ShowMail2(){
    let abutton = document.querySelector(".message-button");
    abutton.textContent = "naths.raf@gmail.com" ;
    let redirect = document.createElement("a");
    redirect.href = "https://naths.raf@gmail.com";
    redirect.click();
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

  document.getElementById("unityproject").addEventListener("click", function()
{
    let redirect = document.createElement("a");
    redirect.href = "unity.html";
    redirect.click();
});

document.getElementById("blenderproject").addEventListener("click", function()
{
    let redirect = document.createElement("a");
    redirect.href = "blender.html";
    redirect.click();
});

document.getElementById("mkfrproject").addEventListener("click", function()
{
    let redirect = document.createElement("a");
    redirect.href = "mkfr.html";
    redirect.click();
});

document.getElementById("pepestudioproject").addEventListener("click", function()
{
    let redirect = document.createElement("a");
    redirect.href = "pepe.html";
    redirect.click();
});

document.getElementById("montreproject").addEventListener("click", function()
{
    let redirect = document.createElement("a");
    redirect.href = "montre.html";
    redirect.click();
});

const card = document.querySelector('#myCard');
const { x, y, width, height } = card.getBoundingClientRect();
const cx = x + width / 2;
const cy = y + height / 2;

const handleMove = e => {
  const { pageX, pageY } = e;
  const dx = (cx - pageX) / (width / 2);
  const dy = (cy - pageY) / (height / 2);
  e.target.style.setProperty('--dx', dx);
  e.target.style.setProperty('--dy', dy);
};

card.addEventListener('mousemove', handleMove);