/*
javascript
author: Michael Yoo 
student id: A00794219
*/

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

//text output
const textbox = document.getElementsByClassName('text')


//dice class
class Dice{
    constructor(face, value){
        this.face = face;
        this.value = value;
    }
    rolledDice(){
    return `${this.face} roll has a score of ${this.value}`;
    }
}


//roll class

class Roll{
    constructor(){
        this.face = ["../images/dice-1.png", "../images/dice-2.png", "../images/dice-3.png", "../images/dice-4.png", "../images/dice-5.png", "../images/dice-6.png"];
        this.value = [1,2,3,4,5,6];
        this.roll = [];

        for(let i = 0; i < this.face.length; i++){
            let newRoll = new Dice(this.face[i], this.value[i])
            this.roll.push(newRoll);
        }
    }
}




//roll dice button

const rollDice = document.getElementById('dice-roll')

rollDice.addEventListener('click', throwDice)

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