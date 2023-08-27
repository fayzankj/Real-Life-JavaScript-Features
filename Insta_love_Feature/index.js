let main = document.querySelector(".main")
let love = document.querySelector("i")

main.addEventListener("dblclick", () => {
    love.style.transform = " translate(-50%, -50%) scale(2.5)"
    love.style.color = "red"
    setTimeout(() => {
        love.style.transform = " translate(-50%, -50%) scale(0)"
    }, 1500);
})

