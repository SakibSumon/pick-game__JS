'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. generating random dice rol
  const dice = Math.trunc(Math.random() * 6) + 1;

  console.log(dice);

  // 2.display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. check for dice rolled 1, if 1:

  if (dice !== 1) {
    //add dice to current score

    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // move to the next player

    if (activePlayer === 0) {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      activePlayer = 1;

      player1El.classList.add('player--active');
      player0El.classList.remove('player--active');
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      activePlayer = 0;

      player1El.classList.remove('player--active');
      player0El.classList.add('player--active');
    }
  }
});

btnhold.addEventListener('click', function () {
  //add current score to active player

  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (activePlayer === 0) {
    if (scores[activePlayer] >= 10) {
      console.log(`player--${activePlayer} wins`);
      reset();

    
    }
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = 1;

    player1El.classList.add('player--active');
    player0El.classList.remove('player--active');
  } else {
    if (scores[activePlayer] >= 10) {
      console.log(`plaer--${activePlayer} wins`);
      reset();
    }

    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = 0;

    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
  }
});

const reset = function () {
  activePlayer = 0;
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
};

let bbb = btnNew.addEventListener('click', reset);
