let openaction = document.getElementById("testact")
let targetaction = openaction.querySelector(".submenu")

openaction.addEventListener("click", ()=> {
    targetaction.classList.toggle('d-block')
})