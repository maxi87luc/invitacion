const DateTime = luxon.DateTime;

const timer = document.getElementById('timer')







let dt = DateTime.now();
const horaBoda = DateTime.local(2022, 11, 11, 18, 0, 0, 0)



const actualizarHora = (horaBoda, dt)=>{
    
    const intervalo = horaBoda.ts - dt.ts
    
    let dias = parseInt(intervalo/1000/60/60/24)
    let horas = parseInt((intervalo-(dias*1000*60*60*24))/1000/60/60) 
    let minutos = parseInt((intervalo-(dias*1000*60*60*24)-(horas*1000*60*60))/1000/60)
    let segundos = parseInt((intervalo-(dias*1000*60*60*24)-(horas*1000*60*60)-(minutos*1000*60))/1000)

    
    timer.innerHTML = `
            <p class="time col-3">${dias}</p>
            <p class="time col-3">${horas}</p>
            <p class="time col-3">${minutos}</p>
            <p class="time col-3">${segundos}</p>        
        
        `
}



setInterval(()=>{
        actualizarHora(horaBoda, dt) 
        console.log("se ejecuto el setInterval")
        dt = DateTime.now();
        

              
    }, 1000)
    
