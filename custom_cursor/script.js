let main = document.querySelector(".main")
let csr = document.querySelector(".cursor")

main.addEventListener("mousemove", (dets) => {
    csr.style.left = dets.x + "px"
    csr.style.top = dets.y + "px"
})
