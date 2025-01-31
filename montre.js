let buttonRef = document.getElementById("reference");
let buttonIllu = document.getElementById("illustration");



let referenceWatch = "ImagesMontre/MontreTagHeuerReference.png";
let myWatch = "ImagesMontre/MontreTagHeuerMyWatch.png";

let isRefWatch = false;

let isMyWatch = false;

buttonRef.addEventListener("click", ShowRefWatch) ;

buttonIllu.addEventListener("click", ShowMyWatch);

function startPage()
{
    isMyWatch = true;
    let d = document.getElementById("watch-img");
    d.innerHTML = "";
     let x = document.createElement("img");;
     x.src = myWatch;
     d.appendChild(x);
     isMyWatch = true;
 
     console.log("bruh")
     isRefWatch = false;

     if(isMyWatch == true)
     {
        buttonIllu.style.backgroundColor = "rgb(236, 201, 86)";
        buttonRef.style.backgroundColor = "transparent";
     }
     else if(isMyWatch === false){
        
     }

}

function ShowRefWatch()
{

    if(isRefWatch == false){

        buttonRef.style.backgroundColor = "rgb(236, 201, 86)";
        buttonIllu.style.backgroundColor = "transparent";

   let d = document.getElementById("watch-img");
    d.innerHTML = "";
    let x = document.createElement("img");;
    x.src = referenceWatch;
    d.appendChild(x);
    isRefWatch = true;

    console.log("bruh")
    isMyWatch = false;
    }

    else{
        buttonRef.style.backgroundColor = "transparent";
        let d = document.getElementById("watch-img");
        d.innerHTML = "" ;
        isRefWatch = false;
    }
    

    }
    


function ShowMyWatch(){

    if(isMyWatch == false){

        buttonIllu.style.backgroundColor = "rgb(236, 201, 86)";
        buttonRef.style.backgroundColor = "transparent";

        let d = document.getElementById("watch-img");
        d.innerHTML = "";
         let x = document.createElement("img");;
         x.src = myWatch;
         d.appendChild(x);
         isMyWatch = true;
     
         console.log("bruh")
         isRefWatch = false;
         }
     
         else{
            buttonIllu.style.backgroundColor = "transparent";
             let d = document.getElementById("watch-img");
             d.innerHTML = "" ;
             isMyWatch = false;
         }


         
}

startPage();