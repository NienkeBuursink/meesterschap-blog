// cursor
const glow = document.querySelector(".glow")
const flame = document.querySelector(".flame")

let x = 0
let y = 0

document.addEventListener("mousemove", (e) => {
    x = e.clientX
    y = e.clientY

    glow.style.left = x + "px"
    glow.style.top = y + "px"

    flame.style.position= "relative"
    flame.style.left = x + "px"
    flame.style.top = y + "px"
})


