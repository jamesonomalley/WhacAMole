const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 10
let timerId = null
var countDownTimerId
var playButton = document.getElementById('showButton')

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    } )

    
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

function playGame() {
    moveMole()
    countDownTimerId = setInterval(countDown, 1000)
}

document.getElementById('showButton').addEventListener('click', hidePlayButton, false)

function hidePlayButton() {
    playButton.style.display = 'none'
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        squares.forEach(square => {
            square.classList.remove('mole')
        } )
        alert('GAME OVER! Your final score is ' + result)
        playButton.style.display = 'block'  
        currentTime = 10
    }
}

