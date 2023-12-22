const score = document.getElementById('score');
const timeLeft = document.getElementById('timeLeft');
const squares = document.querySelectorAll('.square');
const darkBtn = document.getElementById('darkMode');
const darkSquare = document.querySelector('.darkSquare')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')

const skins = document.querySelectorAll('.skin')
const defaultButton = document.getElementById('default')
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const redButton = document.getElementById('red');
const blueButton = document.getElementById('blue');

let currentTime = 10
let result = 0
let checked = true;
let currentColor;
let randomSquare;
let randomIndex;
let currentIndex;
let clickIt;
let randomizer
let SetCountDown

plus.addEventListener('click', () => {
    currentTime = currentTime + 1
    console.log(currentTime);
    timeLeft.innerHTML = currentTime
})

minus.addEventListener('click', () => {
    currentTime--
    console.log(currentTime);

    timeLeft.innerHTML = currentTime
})
timeLeft.innerHTML = currentTime

darkBtn.addEventListener('click', () => {
    if (darkBtn.checked === checked) {
        document.body.style.transition = '0.3s';
        document.body.style.backgroundColor = 'gray';
        squares.forEach((square) => {
        square.classList.add('darkSquare');
        });
    } else {
        document.body.style.transition = '0.3s';
        document.body.style.backgroundColor = 'lightblue';
        squares.forEach((square) => {
        square.classList.remove('darkSquare');
        });
    }
    randomSquare.classList.remove('darkSquare')
});

if(defaultButton.checked == checked){
    currentColor = 'default'
} else{
    currentColor = ""
}

skins.forEach(skin => skin.addEventListener('click', () => {
    randomSquare.classList.remove(currentColor)
    if(defaultButton.checked == checked){
        currentColor = 'default'
    } else if (blueButton.checked == checked){
        currentColor = 'blue'
    } else if (yellowButton.checked == checked){
        currentColor = 'yellow'
    } else if (redButton.checked == checked){
        currentColor = 'red'
    } else if (greenButton.checked == checked){
        currentColor = 'green'
    }
    console.log(currentColor);
    randomSquare.classList.add(currentColor)
}))

function randomSquares() {
    squares.forEach((square) => {
        square.classList.remove('green', 'yellow', 'red', 'blue', 'default');
        square.classList.remove('mark');
        if(darkBtn.checked === checked){
            square.classList.add('darkSquare')
        }
    });

    do {
        randomIndex = Math.floor(Math.random() * 9);
    } while (randomIndex === currentIndex);

    randomSquare = squares[randomIndex];
    randomSquare.classList.add('mark');
    randomSquare.classList.remove('darkSquare')
    randomSquare.classList.add(currentColor)
    clickIt = randomSquare.id;
    currentIndex = randomIndex;
}

randomSquares();

squares.forEach(square => square.addEventListener('click', () => {
    if(clickIt === square.id){
    result++
    score.innerHTML = result
    randomSquares()
    clearInterval(randomizer)
    randomizer = setInterval(randomSquares, 700)
    if(result === 1){
        SetCountDown = setInterval(countDown, 1000)
    }
    }
    
}))

function countDown() {
    currentTime--
    timeLeft.innerHTML = currentTime
    if(currentTime <= 0){
        setTimeout(finish, 998)
    }
}

function finish(){
    clearInterval(SetCountDown)
    alert(`your score is ${result}`)
    clearInterval(randomizer)
    result = 0
    currentTime = 10
    score.innerHTML = result
    timeLeft.innerHTML = currentTime
}