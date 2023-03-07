
let arrayActivos = []

let arrayCartFilter = []

const arrayDataCategoryFilters = arrayData

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      
      for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        
        checkbox.addEventListener('change', (event) => {
          if (event.target.checked) {
            arrayActivos.push(`${label.textContent}`)
            variablecarts(arrayActivos)
          } else {
            let index = arrayActivos.indexOf(`${label.textContent}`)
            if (index > -1) { 
                arrayActivos.splice(index, 1);
                variablecarts(arrayActivos)
            }
          }
        });
      }



function filtroCheckbox(arrayActivos){
    const uniqueCategory = {}
    arrayCartFilter = arrayDataCategoryFilters.filter(item => {
        if(arrayActivos.includes(item.category)){
        if (uniqueCategory[item.date]) {
          return false;
        }
        uniqueCategory[uniqueCategory[item.date]] = true;
        return true;
      }
      })
      return arrayCartFilter

      
    }

function ingresoCartHome(arrayCartFilter,carts){
    carts.innerHTML = '';
    arrayCartFilter.map((x) => {
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
    })    
}

function ingresoCartPast(arrayCartFilter,carts){
    carts.innerHTML = '';
    arrayCartFilter.map((x) => {
        if(fecha_actual>x.date){
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

function ingresoCartUpcoming(arrayCartFilter,carts){
    carts.innerHTML = '';
    arrayCartFilter.map((x) => {
        if(fecha_actual<x.date){
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




function variablecarts(arrayActivos){
    if (window.location.href.endsWith("index.html")) {
        let cardFilterHome = document.getElementById("cart-home")
        ingresoCartHome(filtroCheckbox(arrayActivos),cardFilterHome)
        if(arrayActivos.length==0){
            arrayData.map((x) => {
                cardFilterHome.innerHTML += `<article class="article-home">
                <div class="card" style="width: 18rem;">
                    <img src="${x.image}" class="card-img-top" alt="${x.name} event image">
                    <div class="card-body">
                      <h5 class="card-title">${x.name}</h5>
                      <p class=${x.description}</p>
                      <a href="./car_details.html" onclick="guardarParametro(${x._id})" class="btn btn-primary">See more</a>
                        <h6 class="precio">$ ${x.price}</h6>
                    </div>
                  </div>`
            }) 
        }
    }
    
    if (window.location.href.endsWith("past_events.html")) {
        let cardFilterPast = document.getElementById("cart-past")
        ingresoCartPast(filtroCheckbox(arrayActivos),cardFilterPast)
        if(arrayActivos.length==0){
            arrayData.map((x) => {
                if(fecha_actual>x.date){
                cardFilterPast.innerHTML += `<article class="article-home">
                <div class="card" style="width: 18rem;">
                    <img src="${x.image}" class="card-img-top" alt="${x.name} event image">
                    <div class="card-body">
                      <h5 class="card-title">${x.name}</h5>
                      <p class=${x.description}</p>
                      <a href="./car_details.html" onclick="guardarParametro(${x._id})" class="btn btn-primary">See more</a>
                        <h6 class="precio">$ ${x.price}</h6>
                    </div>
                  </div>`}
            })
        }

    }
    
    if (window.location.href.endsWith("upcomig_events.html")) {
        let cardFilterUpcoming = document.getElementById("cart-upcoming")
        ingresoCartUpcoming(filtroCheckbox(arrayActivos),cardFilterUpcoming)
        if(arrayActivos.length==0){
            arrayData.map((x) => {
                if(fecha_actual<x.date){
                cardFilterUpcoming.innerHTML += `<article class="article-home">
                <div class="card" style="width: 18rem;">
                    <img src="${x.image}" class="card-img-top" alt="${x.name} event image">
                    <div class="card-body">
                      <h5 class="card-title">${x.name}</h5>
                      <p class=${x.description}</p>
                      <a href="./car_details.html" onclick="guardarParametro(${x._id})" class="btn btn-primary">See more</a>
                        <h6 class="precio">$ ${x.price}</h6>
                    </div>
                  </div>`}
            })  
        }
    }
}

