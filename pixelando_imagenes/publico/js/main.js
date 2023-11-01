let w = 5;
let h = 5;

function pixel(){
    for(var i = 0; i < h; i++){
        for(var j = 0; j < w; j++){
            let span = document.createElement('span');
            document.getElementById('pixel').appendChild(span);
        }
    }
}

pixel();