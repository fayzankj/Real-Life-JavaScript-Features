let addfriend = document.querySelector("#add")
let istatus = document.querySelector("h5")

let flag = 0;
addfriend.addEventListener("click", () => {
    if (flag === 0 || flag % 2 === 0) {
        istatus.textContent = "You are now Friends";
        istatus.style.color = "green"
        flag++
    } else {
        istatus.textContent = "Strangers";
        istatus.style.color = "red"
        flag++
    }
})