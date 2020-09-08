const screens = document.querySelectorAll(".screen")
const startBtn = document.querySelector("#startBtn")

startBtn.addEventListener("click", () => {
    screens[0].classList.add("up")
})