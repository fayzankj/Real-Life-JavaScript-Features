let elem = document.querySelectorAll(".elem")

elem.forEach((elems) => {
    elems.addEventListener("mouseenter", () => {
        elems.childNodes[3].style.opacity = 1
    });
    elems.addEventListener("mousemove", (dets) => {
        elems.childNodes[3].style.left = dets.x + "px"
        elems.childNodes[3].style.top = dets.y + "px"
    })
    elems.addEventListener("mouseleave", () => {
        elems.childNodes[3].style.opacity = 0
    })

})