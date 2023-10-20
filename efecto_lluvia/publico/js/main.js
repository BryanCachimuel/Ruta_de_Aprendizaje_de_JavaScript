function rain(){
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');

    e.classList.add('drop');
    cloud.appendChild(e);

    setTimeout(function() {
        cloud.removeChild(e)
    },2000);
}

setInterval(function(){
    rain()
},20);