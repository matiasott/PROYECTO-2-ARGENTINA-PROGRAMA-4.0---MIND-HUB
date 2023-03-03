const urlParams = new URLSearchParams(window.location.search);
const parametro = urlParams.get('parametro');
const valor = localStorage.getItem('mi_parametro');

const arrayData = data.events

function details(id){
    let cardDetails = document.getElementById("card-details")
    arrayData.map((x) => {
        if(id==x._id){
            cardDetails.innerHTML += `<div class="card mb-3" style="max-width: auto;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${x.image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${x.name}</h5>
              <p class="card-text">${x.description}</p>
              <p>Date: ${x.category}</p>
              <p>Place: ${x.place}</p>
              <p>Capacity: ${x.capacity}</p>
              <p>Assistance: ${x.assistance}</p>
              <h6>Price: ${x.price}</h6>
            </div>
          </div>
        </div>
      </div>`}
    })


}

details(valor)
