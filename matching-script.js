const icons = ['💌', '🐱', '🐰', '🍓', '💖'];
const cardGrid = document.getElementById('cardGrid');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const winModal = document.getElementById('winModal');

let cardValues = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false; // Prevents clicking more than two cards
let score = 0;
let matchedPairs = 0;
let timer = 0;
let timerInterval;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startGame() {
  // Reset game state
  score = 0;
  matchedPairs = 0;
  timer = 0;
  lockBoard = false;
  firstCard = null;
  secondCard = null;

  // Update UI
  scoreEl.innerText = 'Score: 0';
  timerEl.innerText = 'Time: 0s';
  winModal.style.display = 'none';

  // Stop previous timer and start a new one
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timer++;
    timerEl.innerText = `Time: ${timer}s`;
  }, 1000);
  
  // Create and render cards
  cardValues = shuffle([...icons, ...icons]);
  renderCards();
}

function renderCards() {
  cardGrid.innerHTML = '';
  cardValues.forEach((value) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;

    // Create front and back faces for the 3D flip
    card.innerHTML = `
      <div class="card-face card-front">💖</div>
      <div class="card-face card-back">${value}</div>
    `;
    
    card.addEventListener('click', () => flipCard(card));
    cardGrid.appendChild(card);
  });
}

function flipCard(card) {
  if (lockBoard || card.classList.contains('flipped') || card === firstCard) {
    return;
  }

  card.classList.add('flipped');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true; // Lock the board while checking for a match
  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.value === secondCard.dataset.value;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  // It's a match!
  firstCard.classList.add('matched');
  secondCard.classList.add('matched');

  score++;
  matchedPairs++;
  scoreEl.innerText = `Score: ${score}`;

  if (matchedPairs === icons.length) {
    endGame();
  }

  resetBoard();
}

function unflipCards() {
  // Not a match, add shake animation
  firstCard.classList.add('wrong');
  secondCard.classList.add('wrong');

  setTimeout(() => {
    // Remove animation class and flip back
    firstCard.classList.remove('wrong', 'flipped');
    secondCard.classList.remove('wrong', 'flipped');
    resetBoard();
  }, 1000); // Wait for the shake animation to finish
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

function endGame() {
  clearInterval(timerInterval);
  document.getElementById('finalStats').innerText = `Your time was ${timer} seconds!`;
  winModal.style.display = 'flex';
}