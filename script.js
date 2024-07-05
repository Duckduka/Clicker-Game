let score = 0;

const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');

clickButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
});
