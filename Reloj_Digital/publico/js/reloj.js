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

        let semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];

        pYear.textContent = year;
       
    };

    actualizarHora();

}())