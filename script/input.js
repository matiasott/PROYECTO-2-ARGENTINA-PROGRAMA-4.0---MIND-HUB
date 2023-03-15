
getEvents().then(data => {

let categorias = [] 
arrayChekbox.forEach(each => {
    if ( ! categorias.includes(each.category) ) {
        categorias.push(each.category)
    }    
})

function printChecks(id_etiqueta,array_categorias) {
    let container = document.querySelector(id_etiqueta)
    array_categorias = array_categorias.map(each=> {
        
        return `
        <div class="category" id="checkbox-category">
        <div class="form-check form-check-inline">
            <input onclick="capturaFiltros()" class="class_checks form-check-label" type="checkbox" value="${each}" name="tipo" id="${each}">
            <label class="form-check-label" for="${each}">${each}</label>
        </div>
        </div>`
    })
    array_categorias.push(`<div class="container-fluid">
    <form class="d-flex" role="search" id="searchForm">
    <input onkeyup="capturaFiltros()" class="form-control me-2" type="text" placeholder="Search" aria-label="Search" id="searchInput" name="texto">
    </form>
</div>`)
    container.innerHTML = array_categorias.join('')
}
printChecks('#serch-categorias',categorias);



});



