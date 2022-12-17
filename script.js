'use strict'

let display = document.querySelector(".display");

let nums = Array.from(document.getElementsByClassName('nums'));

nums.map( num => {
    num.addEventListener("click", (e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = "";
                break;
            case "←"  :
                if (display.innerText){

                    display.innerText = display.innerText.slice(0,-1);
                }
                    break;
            case "=":
                try{  
                    display.innerText = eval(display.innerText);         
                }
                catch{
                    display.innerText = "Error!";
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }  
    })
})


