var data = data

const fecha_actual= data.currentDate

const arrayData = data.events

// for(i = 0;i < arrayData.length; i++){
//     let id = arrayData[i]._id
//     let image = arrayData[i].image
//     let name = arrayData[i].name
//     let date = arrayData[i].date
//     let description = arrayData[i].description
//     let category = arrayData[i].category
//     let place = arrayData[i].place
//     let capacity = arrayData[i].capacity
//     let assistance = arrayData[i].assistance
//     let price = arrayData[i].price

//     console.log("_________________________________________")

//     console.log(" ESTE ES EL ID:", id)
//     console.log("image:", image)
//     console.log("name:", name )
//     console.log("date:", date )
//     console.log("description:", description )
//     console.log("category:", category )
//     console.log("place:", place  )
//     console.log("capacity :", capacity )
//     console.log("assistance:", assistance )
//     console.log("price:", price )
// }

let card = document.getElementById("cart-home")

arrayData.map((x) => {
    card.innerHTML += `<article class="article-home">
    <div class="card" style="width: 18rem;">
        <img src="${x.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class=${x.description}</p>
          <a href="./car_details.html" onclick="guardarParametro(${x._id})" class="btn btn-primary">See more</a>
            <h6 class="precio">$ ${x.price}</h6>
        </div>
      </div>`
})


function guardarParametro(parametro) {
  localStorage.setItem('mi_parametro', parametro);
  window.location.href = "./car_details.html" + encodeURIComponent(parametro);
}