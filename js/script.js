window.addEventListener('load', start);

function start() {
    function changeColor() {
        // BACKGROUND
    var red = document.getElementById('range-red').value;
    var green = document.getElementById('range-green').value;
    var blue = document.getElementById('range-blue').value;

    document.getElementById('input-red').value = red;
    document.getElementById('input-green').value = green;
    document.getElementById('input-blue').value = blue;

    // FONT
    var redFont = document.getElementById('range-red-color').value;
    var greenFont = document.getElementById('range-green-color').value;
    var blueFont = document.getElementById('range-blue-color').value;
    
    document.getElementById('input-red-color').value = redFont;
    document.getElementById('input-green-color').value = greenFont;
    document.getElementById('input-blue-color').value = blueFont;

    var recebeCor = document.querySelector('.recebeCor');
    recebeCor.style.backgroundColor = `rgb(${red},${green},${blue})`;

    var recebeCor = document.querySelector('.recebeCorFont');
    recebeCor.style.color = `rgb(${redFont},${greenFont},${blueFont})`;

    document.querySelector('.recebeAnimacao').classList.toggle('pulse');
}

document.getElementById('range-red').addEventListener('change', changeColor);
document.getElementById('range-green').addEventListener('change', changeColor);
document.getElementById('range-blue').addEventListener('change', changeColor);

document.getElementById('range-red-color').addEventListener('change', changeColor);
document.getElementById('range-green-color').addEventListener('change', changeColor);
document.getElementById('range-blue-color').addEventListener('change', changeColor);
}