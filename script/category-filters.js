const arrayChekbox = arrayData
let arrayfilter = []
let arrayPast = []
let arrayUpcoming = []
let checkcheckbox = document.getElementById("checkbox-category")

function filtraCategoriasRepetidas(arrayChekbox){
  const uniqueCategory = {}
  arrayfilter = arrayChekbox.filter(item => {
    if (uniqueCategory[item.category]) {
      return false;
    }
    uniqueCategory[item.category] = true;
    return true;
  })
  arrayfilter.sort((a,b) => a.category.localeCompare(b.category))
  return arrayfilter
  
}

function filtraEventosPasados(arrayChekbox){
  const uniqueCategory = {}
  arrayPast = arrayChekbox.filter(item => {
    if(fecha_actual>item.date){
    if (uniqueCategory[item.date]) {
      return false;
    }
    uniqueCategory[uniqueCategory[item.date]] = true;
    return true;
  }
  })
  return arrayPast
}


function filtraEventosNuevos(arrayChekbox){
  const uniqueCategory = {}
  arrayUpcoming = arrayChekbox.filter(item => {
    if(fecha_actual<item.date){
    if (uniqueCategory[item.date]) {
      return false;
    }
    uniqueCategory[uniqueCategory[item.date]] = true;
    return true;
  }
  })
  return arrayUpcoming
}

// uso este condicional para que evalue en que html estoy y no calcule por demas
if (window.location.href.endsWith("index.html")) {
  const filter_Home = filtraCategoriasRepetidas(arrayChekbox)  
  filter_Home.map((x) => {
    checkcheckbox.innerHTML += `<div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox${x._id}" value="${x.category}">
      <label class="form-check-label" for="inlineCheckbox${x._id}">${x.category}</label>
  </div>`
  })
} 

if (window.location.href.endsWith("past_events.html")) {
  const filter_Past = filtraCategoriasRepetidas(filtraEventosPasados(arrayChekbox))
  filter_Past.map((x) => {
    checkcheckbox.innerHTML += `<div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox${x._id}" value="${x.category}">
      <label class="form-check-label" for="inlineCheckbox${x._id}">${x.category}</label>
  </div>`
  })
}

if (window.location.href.endsWith("upcomig_events.html")) { 
  const filter_Upcoming = filtraCategoriasRepetidas(filtraEventosNuevos(arrayChekbox))
  filter_Upcoming.map((x) => {
    checkcheckbox.innerHTML += `<div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox${x._id}" value="${x.category}">
      <label class="form-check-label" for="inlineCheckbox${x._id}">${x.category}</label>
  </div>`
  })
}





