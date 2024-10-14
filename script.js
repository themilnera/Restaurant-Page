const URL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";
const button = document.querySelector(".button");
let busObjs = [];

button.addEventListener("click", (e) => {
    button.classList.toggle("hidden");
    fetchBusinesses();
    
});

function fetchBusinesses(){
    fetch(URL)
    .then((response) => response.json())
        .then((jsObject) => {
            jsObject.business.forEach(e => {
                displayBusinesses(e);
            });
        });
}

function displayBusinesses(e){
    let cards = document.querySelector(".card-container");
    console.log(e);

    cards.innerHTML += `<div class='card'> 
    <div class='name'>${e.name}</div>
    <img src="${e.imageurl}" class="image">
    <div class='description'>${e.description}</div>
    <div class='address'>${e.address}</div>
    </div>`;
}




