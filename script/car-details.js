getEvents().then(data => {

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const cart = arrayData.find(valor => valor._id == id)

let cardDetails = document.getElementById("card-details")
arrayData.map((x) => {
    if(id==x._id){
        cardDetails.innerHTML += `<div class="card mb-3" style="max-width: auto;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${x.image}" class="img-fluid rounded-start" alt="${x.name} event image">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title titulo-car">${x.name}</h5>
          <p class="card-text">${x.description}</p>
          <p><strong>Date:</strong> ${x.category}</p>
          <p><strong>Place:</strong> ${x.place}</p>
          <p><strong>Capacity:</strong> ${x.capacity}</p>
          <p><strong>Assistance:</strong> ${x.assistance}</p>
          <p class="precio"><strong>Price:</strong> $${x.price}</p>
        </div>
      </div>
    </div>
  </div>`}
})


});
