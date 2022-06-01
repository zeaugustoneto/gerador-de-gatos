//const { response } = require("express")

let generate_btn = document.querySelector(".generate_btn")


generate_btn.addEventListener('click', fetchImg)

function fetchImg(){
let ImgElDiv = document.querySelector(".div-imagens-gatos")
ImgElDiv.innerHTML =''
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        let imgUrl = data[0].url

        let imgEl = document.createElement("img")
        imgEl.setAttribute('src', `${imgUrl}`)
        imgEl.classList.add("container")
        
        ImgElDiv.appendChild(imgEl)
    })
    .catch((err) => console.log(err))
}