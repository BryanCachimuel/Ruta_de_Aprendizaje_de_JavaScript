const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);
    
    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if(bmi < 18.5){
        description = 'Cuidado Usted esta Bajo de Peso';
    }
    else if(bmi >= 18.5 && bmi <= 25) {
        description = 'Usted está con Peso Ideal';
        value.classList.remove('attention')
        value.classList.add('normal');
    }
    else if(bmi > 25 && bmi <= 30){
        description = 'Cuidado Usted está con Sobrepeso';
    }
    else if(bmi > 30 && bmi <= 35){
        description = 'Cuidado Usted está con Obesidad Moderada';
    }
    else if(bmi > 35 && bmi <= 40){
        description = 'Cuidado Usted está con Obesidad Severa';
    }
    else{
        description = 'Cuidadp Usted está con Obsesidad Morvida';
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;
}) 