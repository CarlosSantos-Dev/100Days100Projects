const initial_screen = document.getElementById("initialScreen")
const insect_screen = document.getElementById("insectScreen")
const game_screen = document.getElementById("gameScreen")
const html_timer = document.getElementById("time")

insect_screen.style.display = "none"
game_screen.style.display = "none"

let insect

let count = 0
let sec_count = 0
let min_count = 0

let generate_two = false

var Game = {}

Game.fps = 50

Game.update = () => {
    timer()
    addInsect()
    destroyInsect()
}

function startGame() {
    setInterval(Game.update, 1000 / Game.fps)
}

function destroyInsect() {

}

function addInsect() {
    let insectOnScreen = document.getElementsByClassName("insect")

    if(generate_two) {
        if(insectOnScreen.length === 2) {
            return
        } else {
            game_screen.innerHTML += `
                <div class="insect" style="left: ${horizontalPos()}px; top: ${verticalPos()}px;">asdfasdf</div>
            `
        }
    } else {
        if(insectOnScreen.length !== 1) {
            game_screen.innerHTML += `
                <div class="insect" style="left: ${horizontalPos()}px; top: ${verticalPos()}px;">asdfasdf</div>
            `
        }
    }
}

function horizontalPos() {
    return (Math.random() * (window.innerWidth - 1)) + 1
}

function verticalPos() {
    return (Math.random() * (window.innerHeight - 120)) + 120
}

function timer() {
    count++

    if(count === 40) {
        sec_count++

        if(sec_count % 60 === 0) {
            sec_count = 0
            min_count++
        }

        html_timer.innerText = `Tempo: ${addZero(min_count, 2)}:${addZero(sec_count, 2)}`

        count = 0
    }
}

function addZero(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}


function nextPage() {
    initial_screen.style.display = "none"
    insect_screen.style.display = "flex"
}

function setInsect(selectedInsect) {
    insect = document.getElementById(selectedInsect)

    insect_screen.style.display = "none"
    game_screen.style.display = "block"

    startGame()
}