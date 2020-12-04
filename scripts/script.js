/*
javascript
author: Michael Yoo 
student id: A00794219
*/

/* 
Pop-up delay 
*/

const delay = 2000;

const popup = document.getElementById("pop-up");


let diceGameStart = true;

setTimeout(function(){
    if( !diceGameStart){
        diceGameStart = false;
        popup.style.opacity = "0";  
    }else{
        popup.style.opacity = "1";
        popup.style.transition = '1.5s';
    }    
}, delay);

//close button
const closeMe = document.getElementById('close-me');
closeMe.addEventListener("click", function(){
    popup.style.opacity = "0";
});



//1 rolled, score is 0

//same number, score is multiplied by 2

//score each round

//current roll value

//total score from each round(3 max)