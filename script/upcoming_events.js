var data = data

const fecha_actual= data.currentDate

let arrayData = data.events

let card = document.getElementById("cart-upcoming")

arrayData.forEach(x =>{
    if(fecha_actual<x.date){
      card.innerHTML += `<article class="article-home">
      <div class="card" style="width: 18rem;">
          <img src="${x.image}" class="card-img-top" alt="${x.name} event image">
          <div class="card-body">
            <h5 class="card-title">${x.name}</h5>
            <p class=${x.description}</p>
            <a href="./car_details.html?id=${x._id}" class="btn btn-primary">See more</a>
              <h6 class="precio">$ ${x.price}</h6>
          </div>
        </div>
        </article>`}
})

