// creates var to store data in
let colorPicker = document.querySelector('#colorPicker');

let sizePicker = document.getElementById('sizePicker');
let canvas = document.getElementById('pixelCanvas');
// assigns var to the submit button using event listeners
sizePicker.addEventListener('submit', (e) => {
    e.preventDefault();
    let x = document.getElementById('inputHeight').value;
    let y = document.getElementById('inputWidth').value;
    makeGrid(x, y);
});
// makes a grid or canvas
function makeGrid(x, y) {
    canvas.innerHTML = "";
    for (let row = 0; row < x; row++) {
        let newRow = canvas.insertRow();
        for (let col = 0; col < y; col++) {
            let newCol = newRow.insertCell();
            newCol.addEventListener('click', (event) => { //allows for color to be added
                event.target.style.background = colorPicker.value;
            });
        };
    };

};