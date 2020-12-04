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


//roll dice button

const rollDice = document.getElementById('dice-roll')

rollDice.addEventListener('click', throwDice);

function throwDice(){
    let dice1 = Math.floor(Math.random()*5)+1;
    let dice2 = Math.floor(Math.random()*5)+1;
    let dice3 = Math.floor(Math.random()*5)+1;
    let dice4 = Math.floor(Math.random()*5)+1;
    //dice images
    document.getElementById('user-dice1').src = `images/dice-${dice1}.png`;
    document.getElementById('user-dice2').src = `images/dice-${dice2}.png`;
    document.getElementById('ai-dice1').src = `images/dice-${dice3}.png`;
    document.getElementById('ai-dice2').src = `images/dice-${dice4}.png`;
}



//1 rolled, score is 0

//same number, score is multiplied by 2

//score each round

//current roll value

//total score from each round(3 max)