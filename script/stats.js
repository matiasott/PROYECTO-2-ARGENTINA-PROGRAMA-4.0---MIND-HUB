getEvents().then(data => {

    //variables id
    let id_eventsEstadisticas = document.getElementById('event_stadistics')
    let id_Upcoming = document.getElementById('upcoming')
    let id_Past = document.getElementById('past')


    function capturaUpcoming(arrayData){
        let datos = [];
        arrayData.forEach(x=>{
            if(fecha_actual<x.date){
            const categoria = x.category;
            const precio = x.price
            const asistencia = isNaN(x.assistance)?x.estimate:x.assistance
            const capacidad =x.capacity
            const ingreso=precio*asistencia
            const porcentaje = (asistencia/capacidad)*100
            const obj={
                categoria: categoria,
                ingreso:ingreso,
                porcentaje:porcentaje                
            };
            datos.push(obj);
            }
                })
        const valores = datos.reduce((acumulador, actual) => {
            if (!acumulador[actual.categoria]) {
                acumulador[actual.categoria] = {
                    totalIngresos: 0,
                    totalPorcentaje: 0,
                    count: 0
                };
            }
            acumulador[actual.categoria].totalIngresos += actual.ingreso;
            acumulador[actual.categoria].totalPorcentaje += actual.porcentaje;
            acumulador[actual.categoria].count++;
            return acumulador;
        }, {});
        for (let categoria in valores) {
            id_Upcoming.innerHTML += `
            <tr><td>${categoria}</td>
            <td>${valores[categoria].totalIngresos}</td>
            <td>${(valores[categoria].totalPorcentaje/valores[categoria].count).toFixed(2)+" %"}</td></tr>`
        }
    }

    function capturaPast(arrayData){
        let datos = [];
        arrayData.forEach(x=>{
            if(fecha_actual>x.date){
            const categoria = x.category;
            const precio = x.price
            const asistencia = isNaN(x.assistance)?x.estimate:x.assistance
            const capacidad =x.capacity
            const ingreso=precio*asistencia
            const porcentaje = (asistencia/capacidad)*100
            const obj={
                categoria: categoria,
                ingreso:ingreso,
                porcentaje:porcentaje                
            };
            datos.push(obj);
            }
                })
        const valores = datos.reduce((acumulador, actual) => {
            if (!acumulador[actual.categoria]) {
                acumulador[actual.categoria] = {
                    totalIngresos: 0,
                    totalPorcentaje: 0,
                    count: 0
                };
            }
            acumulador[actual.categoria].totalIngresos += actual.ingreso;
            acumulador[actual.categoria].totalPorcentaje += actual.porcentaje;
            acumulador[actual.categoria].count++;
            return acumulador;
        }, {});
        for (let categoria in valores) {
            id_Past.innerHTML += `
            <tr><td>${categoria}</td>
            <td>${valores[categoria].totalIngresos}</td>
            <td>${(valores[categoria].totalPorcentaje/valores[categoria].count).toFixed(2)+" %"}</td></tr>`
        }
    }

    function general(arrayData){
        let maximaCapacidad = -Infinity;
        let nombreMaximaCapacidad;

        arrayData.forEach(evento => {
        if (evento.capacity > maximaCapacidad) {
            maximaCapacidad = evento.capacity;
            nombreMaximaCapacidad=evento.name
        }
        });



        let maximoPorsentaje=-Infinity;
        let minimoPorsenyaje=Infinity;
        let nombreMaxPorsentaje;
        let nombreMinPorsentaje;

        arrayData.forEach(x => {
            if(fecha_actual>x.date){
            let porcentaje=((isNaN(x.assistance)?x.estimate:x.assistance)/x.capacity)*100

            if(porcentaje<minimoPorsenyaje){
                minimoPorsenyaje = porcentaje;
                nombreMinPorsentaje = x.name;
            }
            if(porcentaje>maximoPorsentaje){
                maximoPorsentaje = porcentaje;
                nombreMaxPorsentaje = x.name;
            }
        }
        })

        id_eventsEstadisticas.innerHTML = `
            <tr><td>${nombreMaxPorsentaje+ " ( "+maximoPorsentaje.toFixed(2)+" % )"}</td>
            <td>${nombreMinPorsentaje+ " ( "+minimoPorsenyaje.toFixed(2)+" % )"}</td>
            <td>${nombreMaximaCapacidad+ "("+maximaCapacidad+")"}</td></tr>`

        
    }

capturaUpcoming(arrayData)

capturaPast(arrayData)

general(arrayData)








});