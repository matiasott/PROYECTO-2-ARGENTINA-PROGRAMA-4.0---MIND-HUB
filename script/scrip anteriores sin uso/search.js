const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

const arraySearch = arrayData

let searchValue = ""
let valorBuscar = ""

let cardFilterHome = document.getElementById("cart-home")
let cardFilterPast = document.getElementById("cart-past")
let cardFilterUpcoming = document.getElementById("cart-upcoming")

searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que se envíe el formulario
        searchValue = searchInput.value;
        valorBuscar = searchValue.toLowerCase();
        console.log(valorBuscar);
        if (window.location.href.endsWith("index.html")) {
            ingresoSeachHome(valorBuscar,cardFilterHome)
        }
        if (window.location.href.endsWith("past_events.html")) {
            ingresoSeachPast(valorBuscar,cardFilterPast)
        }
        if (window.location.href.endsWith("upcomig_events.html")) {
            ingresoSeachUpcoming(valorBuscar,cardFilterUpcoming)
        }
        
        
});


function ingresoSeachHome(valorBuscar,carts){
        carts.innerHTML = '';
        arraySearch.map((x) => {
            if(x.name.toLowerCase().includes(valorBuscar)){
            carts.innerHTML += `<article class="article-home">
            <div class="card" style="width: 18rem;">
                <img src="${x.image}" class="card-img-top" alt="${x.name} event image">
                <div class="card-body">
                  <h5 class="card-title">${x.name}</h5>
                  <p class=${x.description}</p>
                  <a href="./car_details.html" onclick="guardarParametro(${x._id})" class="btn btn-primary">See more</a>
                    <h6 class="precio">$ ${x.price}</h6>
                </div>
              </div>`
            }
        }) 
}

function ingresoSeachPast(valorBuscar,carts){
    carts.innerHTML = '';
    arraySearch.map((x) => {
        if(fecha_actual>x.date){
        if(x.name.toLowerCase().includes(valorBuscar)){
        carts.innerHTML += `<article class="article-home">
        <div class="card" style="width: 18rem;">
            <img src="${x.image}" class="card-img-top" alt="${x.name} event image">
            <div class="card-body">
              <h5 class="card-title">${x.name}</h5>
              <p class=${x.description}</p>
              <a href="./car_details.html" onclick="guardarParametro(${x._id})" class="btn btn-primary">See more</a>
                <h6 class="precio">$ ${x.price}</h6>
            </div>
          </div>`
        }
    }
    }) 
}



function ingresoSeachUpcoming(valorBuscar,carts){
    carts.innerHTML = '';
    arraySearch.map((x) => {
        if(fecha_actual<x.date){
        if(x.name.toLowerCase().includes(valorBuscar)){
        carts.innerHTML += `<article class="article-home">
        <div class="card" style="width: 18rem;">
            <img src="${x.image}" class="card-img-top" alt="${x.name} event image">
            <div class="card-body">
              <h5 class="card-title">${x.name}</h5>
              <p class=${x.description}</p>
              <a href="./car_details.html" onclick="guardarParametro(${x._id})" class="btn btn-primary">See more</a>
                <h6 class="precio">$ ${x.price}</h6>
            </div>
          </div>`
        }
    }
    }) 
}