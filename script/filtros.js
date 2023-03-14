const arrayChekbox = arrayData

function noExisteEvento(id) {
    let container = document.querySelector(id)
    container.innerHTML = `
    <div class="card m-2 card-box">
        <div class="card-body d-flex flex-column align-items-center">
            <h4 class="card-title d-flex flex-column align-items-center justify-center">Event not found</h3>
        </div>
    </div>
    `
}

function cartsfiltradas(x) {
    if (window.location.href.endsWith("index.html")) {
        return `<article class="article-home">
    <div class="card" style="width: 18rem;">
        <img src="${x.image}" class="card-img-top" alt="${x.name} event image">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class=${x.description}</p>
          <a href="./car_details.html?id=${x._id}" class="btn btn-primary">See more</a>
            <h6 class="precio">$ ${x.price}</h6>
        </div>
      </div>
      </article>`
    }
    
    if (window.location.href.endsWith("past_events.html")) {
        if(fecha_actual>x.date){
        return `<article class="article-home">
    <div class="card" style="width: 18rem;">
        <img src="${x.image}" class="card-img-top" alt="${x.name} event image">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class=${x.description}</p>
          <a href="./car_details.html?id=${x._id}" class="btn btn-primary">See more</a>
            <h6 class="precio">$ ${x.price}</h6>
        </div>
      </div>
      </article>`
    }
}
    
    
    if (window.location.href.endsWith("upcomig_events.html")) {
        if(fecha_actual<x.date){
        return `<article class="article-home">
    <div class="card" style="width: 18rem;">
        <img src="${x.image}" class="card-img-top" alt="${x.name} event image">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class=${x.description}</p>
          <a href="./car_details.html?id=${x._id}" class="btn btn-primary">See more</a>
            <h6 class="precio">$ ${x.price}</h6>
        </div>
      </div>
      </article>`
    }
}

    
}

function generacartsfiltradas(id,array_eventos) {
    let container = document.querySelector(id) 
    array_eventos = array_eventos.map(cartsfiltradas)
    container.innerHTML = array_eventos.join('')
}




function capturaFiltros() {
    let texto = document.getElementById('searchInput').value.toLowerCase()
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
    let filtro = arrayChekbox.filter(each => {
        return (each.name.toLowerCase().includes(texto)) && (checks.length === 0 || checks.includes(each.category))
    })
    
    let etiqueta = ""
    if (window.location.href.endsWith("index.html")) {
        etiqueta='#cart-home'
    }

    if (window.location.href.endsWith("past_events.html")) {
        etiqueta = '#cart-past'
    }
    
    
    if (window.location.href.endsWith("upcomig_events.html")) {
        etiqueta = '#cart-upcoming'
    }

    if (filtro.length>0) {
        generacartsfiltradas(etiqueta,filtro)
    } else {
        noExisteEvento(etiqueta)
    }
}


