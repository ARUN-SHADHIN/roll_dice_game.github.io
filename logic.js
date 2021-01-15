'use strict';
const btnRoll=document.querySelector("#btn");
const btnel=document.querySelector("#dice");


let currentScore1=0;
let currentScore2=0;
let number;
let player1= false;
let player2=false,check,check1;

function generateRandom(){
    const dice=Math.trunc(Math.random()*6)+1;
    return dice;
}
function playertatus1(){
    if(!player1)
        return false;
    else
        return true;
}
function playertatus2(){
    if(!player2)
        return false;
    else
        return true;
}
function resetall(){
    player1=false;
    player2=false;
    currentScore1=0;
    currentScore2=0;
    document.querySelector('.score2').textContent=currentScore2;
    document.querySelector('.score1').textContent=currentScore1;
    document.querySelector('.player1').textContent="ARUN PRADHAN";
    document.querySelector('.player2').textContent="KIILER JACK";
}
btnRoll.addEventListener('click',function(){
    if(player1==true && player2==true){
        if(currentScore1 >currentScore2)
            document.querySelector('.player1').textContent="WIN..... CONGRATUALTION..SANJU DADA";
        else{
            document.querySelector('.player2').textContent="WIN..... CONGRATUALTION... KETRU";
        }
       
    }
    else {
    number=generateRandom();
    btnel.src=` dice-${number}.png`;
    if(number != 1){
        check=playertatus1();
        check1=playertatus2();
        if(!check){
            currentScore1 += number;
            btnel.src=` dice-${number}.png`;
            document.querySelector('.score1').textContent=currentScore1;
            console.log("total = "+currentScore1);
            document.querySelector('.current').textContent="PLAYER 1";
        }
        else if(!check1){
            currentScore2 += number;
            btnel.src=` dice-${number}.png`;
            document.querySelector('.score2').textContent=currentScore2;
            console.log("total = "+currentScore2);
            document.querySelector('.current').textContent="PLAYER 2";
        }
    }
    
    else{
        if(!player1)
            player1=true;
        else
        player2=true;        
    }
}
})
document.querySelector('.formating').addEventListener('click',function(){
    resetall();
})

