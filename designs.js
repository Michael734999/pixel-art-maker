let colorPicker = document.querySelector('#colorPicker');

let sizePicker = document.getElementById('sizePicker');
let canvas = document.getElementById('pixelCanvas');

sizePicker.addEventListener('submit', (e) => {
    e.preventDefault();
    let x = document.getElementById('inputHeight').value;
    let y = document.getElementById('inputWidth').value;
    makeGrid(x, y);
});

function makeGrid(x, y) {
    canvas.innerHTML = "";
    for (let row = 0; row < x; row++) {
        let newRow = canvas.insertRow();
        for (let col = 0; col < y; col++) {
            let newCol = newRow.insertCell();
            newCol.addEventListener('click', (event) => {
                event.target.style.background = colorPicker.value;
            });
        };
    };

};