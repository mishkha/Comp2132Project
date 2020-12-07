/*
javascript
author: Michael Yoo 
student id: A00794219
*/

//output text
const userTotal = document.getElementById('user-total');
const userScoreRound = document.getElementById('user-round');
const aiTotal = document.getElementById('ai-total');
const aiRoundScore = document.getElementById('ai-round');


//welcome popup
    
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


//dice class

// class Dice{
//     constructor(face, value){
//         this.face = face;
//         this.value = value;
//     }
//     rolledDice(){
//     return `${this.face} roll has a score of ${this.value}`;
//     }
// }

// //roll class

// class Roll{
//     constructor(){
//         this.face = ["../images/dice-1.png", "../images/dice-2.png", "../images/dice-3.png", "../images/dice-4.png", "../images/dice-5.png", "../images/dice-6.png"];
//         this.value = [1,2,3,4,5,6];
//         this.roll = [];

//         for(let i = 0; i < this.face.length; i++){
//             let newRoll = new Dice(this.face[i], this.value[i])
//             this.roll.push(newRoll);
//         }
//     }
// }


//roll dice button

const rollDice = document.getElementById('dice-roll')
let imageAlt = ["rolled: 1", "rolled: 2", "rolled: 3", "rolled: 4", "rolled: 5", "rolled: 6"];

rollDice.addEventListener('click', throwDice)

function throwDice(){
    let dice1 = Math.floor(Math.random()*6)+1;
    let dice2 = Math.floor(Math.random()*6)+1;
    let dice3 = Math.floor(Math.random()*6)+1;
    let dice4 = Math.floor(Math.random()*6)+1;
    diceGameStart = false;
    //dice images
    let d1 = document.getElementById('user-dice1').src = `images/dice-${dice1}.png`;
    let d2 = document.getElementById('user-dice2').src = `images/dice-${dice2}.png`;
    let d3 = document.getElementById('ai-dice1').src = `images/dice-${dice3}.png`;
    let d4 = document.getElementById('ai-dice2').src = `images/dice-${dice4}.png`;
    //image alt
    document.getElementById('user-dice1').alt = imageAlt[dice1];
    document.getElementById('user-dice2').alt = imageAlt[dice2];
    document.getElementById('ai-dice1').alt = imageAlt[dice3];
    document.getElementById('ai-dice2').alt = imageAlt[dice4];

    //1 rolled, score is 0
    //same number, score is multiplied by 2
    if(d1 == d2){
        userScoreRound.innerHTML = (dice1 + dice2)*2;
    }else if(dice3 == dice4){
        aiRoundScore.innerHTML = (dice3 + dice4)*2;
    }else if( dice1 == 1 || dice2 == 1){
        userScoreRound.innerHTML = 0;
    }else if(dice3 == 1 || dice4 == 1){
        aiRoundScore.innerHTML = 0
    }else if(dice1 == 1 && dice2 == 1){
        userScoreRound.innerHTML = 0;
    }else if(dice3 == 1 && dice4 == 1){
        aiRoundScore.innerHTML = 0;
    }else{
        userScoreRound.innerHTML = dice1 + dice2;
        aiRoundScore.innerHTML = dice3 + dice4;
    }
    totalForUser();
    totalForAi();
};


let userTotalScore = 0;
let aiTotalScore = 0;

totalForUser = function(){
    userTotalScore + userScoreRound;
    userTotal.innerHTML = userTotalScore;
}

totalForAi = function(){
    aiTotalScore + aiRoundScore;
    aiTotal.innerHTML = aiTotalScore;
}


//new game button
const newGameStart = document.getElementById('new-game');
newGameStart.addEventListener('click', newGame)

function newGame(){
    aiTotal.innerHTML = 0;
    userTotal.innerHTML = 0;
    userScoreRound.innerHTML = 0;
    aiRoundScore.innerHTML = 0;
}


//jquery accordion
const $tabs = $('.tab');
const $howTo = $('.how-to');

$howTo.hide();

$tabs.click(function(){
    $(this).next().slideToggle();
});

//1 rolled, score is 0
function roundScore(dice1, dice2, dice3, dice4){
    let userRoundScore = dice1 + dice2;
    let aiRoundScore = dice3 + dice4;
}




//total score from each round(3 max)