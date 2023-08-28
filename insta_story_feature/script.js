let clutter = "";
let stories = document.querySelector(".stories");
let fullscreen = document.querySelector(".fullscreen")

var arr = [
    {
        dp: "https://images.unsplash.com/photo-1440508319978-8b67875e39d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
        story:
            "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
        dp: "https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        story:
            "https://images.pexels.com/photos/17591291/pexels-photo-17591291/free-photo-of-close-up-of-fountain-reliefs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
        dp: "https://media.istockphoto.com/id/666989188/photo/north-american-woman-with-blank-expression.webp?s=170667a&w=0&k=20&c=yJX8EKprzOPLQL5Xk4iGehWxARQFCG1C9dhHkz_5qps=",
        story:
            "https://images.pexels.com/photos/17592733/pexels-photo-17592733/free-photo-of-food-restaurant-drinks-dinner.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
        dp: "https://images.unsplash.com/photo-1681570678457-96fe73f1285d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        story:
            "https://images.pexels.com/photos/5525077/pexels-photo-5525077.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
        dp: "https://images.unsplash.com/photo-1682917265562-139c5aa7070c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        story:
            "https://images.pexels.com/photos/16550526/pexels-photo-16550526/free-photo-of-grassy-lakeshore-in-summer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },

];

arr.forEach((elem, idx) => {
    clutter += `<div class="story"><img id="${idx}" src="${elem.dp}" alt=""></div> `;
});
stories.innerHTML = clutter;

stories.addEventListener("click", (dets) => {
    fullscreen.style.display = "block";
    fullscreen.style.backgroundImage = `url(${arr[dets.target.id].story})`
})
fullscreen.addEventListener("click", (dets) => {
    fullscreen.style.display = "";
})