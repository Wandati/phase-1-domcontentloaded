// Your code goes here
/*document.addEventListener("DOMContentLoaded",function(){
    console.log("The DOM has loaded")
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);*/

const p = document.querySelector("p")
//p.textContent = "This is really cool!"

document.addEventListener("DOMContentLoaded",function(){
    return p.textContent = "This is really cool!"
})
