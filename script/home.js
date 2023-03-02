var data = data

const fecha_actual= data.currentDate


let arrayData = data.events

for(i = 0;i < arrayData.length; i++){
    let id = arrayData[i]._id
    let image = arrayData[i].image
    let name = arrayData[i].name
    let date = arrayData[i].date
    let description = arrayData[i].description
    let category = arrayData[i].category
    let place = arrayData[i].place
    let capacity = arrayData[i].capacity
    let assistance = arrayData[i].assistance
    let price = arrayData[i].price

    console.log("_________________________________________")

    console.log(" ESTE ES EL ID:", id)
    console.log("image:", image)
    console.log("name:", name )
    console.log("date:", date )
    console.log("description:", description )
    console.log("category:", category )
    console.log("place:", place  )
    console.log("capacity :", capacity )
    console.log("assistance:", assistance )
    console.log("price:", price )
}


