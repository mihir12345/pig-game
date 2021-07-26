'use strict';
const player0E=document.querySelector('.player--0')
const player1E=document.querySelector('.player--1')
const score0El=document.querySelector('#score--0')
const score1El=document.querySelector('#score--1')
const current0El=document.getElementById('current--0')
const current1El=document.getElementById('current--1')
const diceEl=document.querySelector('.dice')
const btnNew=document.querySelector('.btn--new')
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold')
score0El.textContent=0
score1El.textContent=0

 let scores, currentScore, activePlayer, playing

// const init =function (){
// scores=[0,0];
//  currentScore=0;
// activePlayer=0;
// playing=true;
//     document.getElementById(`score--1`).textContent=0
//     score0El.textContent=0
//     current0El.textContent=0
//     current1El.textContent=0
//     diceEl.classList.add('hidden')
//     player0E.classList.remove('player--winner')
//     player1E.classList.remove('player--winner')
//     player1E.classList.remove('player--active')
//     player0E.classList.add('player--active')

// } 

// init()

 scores=[0,0];
  currentScore=0;
 activePlayer=0;
 playing=true;

const switchPlayer= function(){
document.getElementById(`current--${activePlayer}`).textContent=0
activePlayer=activePlayer===0?1:0
currentScore=0
player0E.classList.toggle('player--active')
player1E.classList.toggle('player--active')

}
diceEl.classList.add('hidden')
//0. creating a event handler on roll
btnRoll.addEventListener('click',function(){
//1.creating a random number
if(playing===true){
    let dice=Math.trunc(Math.random()*6+1)
console.log(dice);
//2.making the dice visible
diceEl.classList.remove('hidden')
//2.1.displaying the picture
 diceEl.src=`dice-${dice}.png`

if(dice!==1){
//3.adding the random number in the score
currentScore+=dice

//4.updating the score for each player dynamic
document.getElementById(`current--${activePlayer}`).textContent=currentScore
// current0El.textContent=currentScore
}
else{
//sitching the  players
//making the current score zero
switchPlayer()
}

}
})

btnHold.addEventListener('click',function(){
    //to store the total score and change
    if(playing===true){
        scores[activePlayer]+=currentScore
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
    // changing player logic
    // condition >20 player wins
    if(scores[activePlayer]>=20){
        //ending the game
        //setting the black theme
    playing=false
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

        
    }
    else{

        switchPlayer()
    }
    
    }
    
})


btnNew.addEventListener('click',function(){
    
    document.getElementById(`score--1`).textContent=0
    score0El.textContent=0
    current0El.textContent=0
    current1El.textContent=0
    diceEl.classList.add('hidden')
    player0E.classList.remove('player--winner')
    player1E.classList.remove('player--winner')
    player1E.classList.remove('player--active')
    player0E.classList.add('player--active')
    scores=[0,0];
    currentScore=0;
   activePlayer=0;
   playing=true;

})
