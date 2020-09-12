const screens = document.querySelectorAll(".screen")
const startBtn = document.querySelector("#startBtn")
const insectBtns = document.querySelectorAll(".chooseInsectBtn")
const gameScreen = document.querySelector("#gameScreen")
const scoreDiv = document.querySelector("#score")

startBtn.addEventListener("click", () => {
    screens[0].classList.add("up")
})

let selecedInsect = {}
let sec = 0
let min = 0
let score = 0

insectBtns.forEach(insectBtn => {
    insectBtn.addEventListener("click", () => {
        let img = insectBtn.querySelector("img")
        selecedInsect["src"] = img.getAttribute("src")
 
        screens[1].classList.add("up")

        setTimeout(createInsect, 1000)
        startGame()
    })
})

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function createInsect() {
    const insect = document.createElement("div")
    const { x, y } = getRamdomLocate()
    insect.classList.add("insect")
    insect.style.left = `${x}px`
    insect.style.top = `${y}px`
    insect.innerHTML = `<img src="${selecedInsect.src}" style="transform: rotate(${Math.random() * 360}deg)"/>`
    insect.addEventListener("click", catchInsect)

    gameScreen.appendChild(insect)
}

function catchInsect() {
    increaseScore()
    this.classList.add("catched")
    setTimeout(() => {
        this.remove()
    }, 2000)
    addInsects()
}

function increaseScore() {
    score++

    if(score > 19) {
        document.getElementById("annoyingMessage").classList.add("visible")
    }

    scoreDiv.innerText = `Pontuação: ${score}`
}

function startGame() {
    setInterval(timer, 1000)
}

function timer() {
    sec++

    if(sec % 60 === 0) {
        min++
        sec = 0
    }

    let s = sec < 10 ? `0${sec}` : sec
    let m = min < 10 ? `0${min}` : min
    document.getElementById("time").innerText = `Tempo: ${m}:${s}`
}

function getRamdomLocate() {
    let width = window.innerWidth
    let height = window.innerHeight
    let x = Math.random() * (width - 200) + 100
    let y = Math.random() * (height - 200) + 100

    return {
        x,
        y
    }
}