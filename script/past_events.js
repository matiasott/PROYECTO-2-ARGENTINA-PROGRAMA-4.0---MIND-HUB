var data = data

const fecha_actual= data.currentDate

let arrayData = data.events

// for(i = 0;i < arrayData.length; i++){

//     let date = arrayData[i].date

//     if(fecha_actual > date){

//         let id = arrayData[i]._id
//         let image = arrayData[i].image
//         let name = arrayData[i].name
//         let description = arrayData[i].description
//         let category = arrayData[i].category
//         let place = arrayData[i].place
//         let capacity = arrayData[i].capacity
//         let assistance = arrayData[i].assistance
//         let price = arrayData[i].price

//         console.log("_________________________________________")

//         console.log(" ESTE ES EL ID:", id)
//         console.log("image:", image)
//         console.log("name:", name )
//         console.log("date:", date )
//         console.log("description:", description )
//         console.log("category:", category )
//         console.log("place:", place  )
//         console.log("capacity :", capacity )
//         console.log("assistance:", assistance )
//         console.log("price:", price )
//     }
// }


let card = document.getElementById("cart-past")

arrayData.map((x) => {
    if(fecha_actual>x.date){
    card.innerHTML += `<article class="article-home">
    <div class="card" style="width: 18rem;">
        <img src="${x.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class=${x.description}</p>
          <a href="./car_details.html" class="btn btn-primary">See more</a>
            <h6 class="precio">$ ${x.price}</h6>
        </div>
      </div>`}
})
