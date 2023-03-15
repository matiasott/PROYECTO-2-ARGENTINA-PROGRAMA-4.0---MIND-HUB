
const API_URL_EVENTS = "https://mindhub-xj03.onrender.com/api/amazing";

const getEvents = async () => {
    const response = await fetch(API_URL_EVENTS);
    const dataEvents = await response.json();
    // console.log(dataEvents);
    return dataEvents;
};


var arrayData=[]
var arrayChekbox =[]
fecha_actual=""

getEvents().then(data => {
    fecha_actual= data.currentDate
    arrayData = data.events
    arrayChekbox = arrayData
    
});



