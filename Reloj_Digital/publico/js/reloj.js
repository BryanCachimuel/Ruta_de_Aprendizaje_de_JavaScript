(function(){
    
    let actualizarHora = function(){
        let fecha = new Date();
        let horas = fecha.getHours;
        let ampm;
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        let diaSemana = fecha.getDay();
        let dia = fecha.getDate();
        let mes = fecha.getMonth();
        let year = fecha.getFullYear();

        let parrafo_horas =  document.getElementById('horas');
        let pAMPM = document.getElementById('ampm');
        let pMinutos = document.getElementById('minutos');
        let pSegundos = document.getElementById('segundos');
        let pDiaSemana = document.getElementById('diaSemana');
        let pDia = document.getElementById('dia');
        let pMes = document.getElementById('mes');
        let pYear = document.getElementById('year');

        
       
    };

    actualizarHora();

}())