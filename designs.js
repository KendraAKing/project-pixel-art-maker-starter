// Select color input using name from html code
var chooseColor = document.getElementById('colorPicker');
// Select size input using name from html code
var chooseSize = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()

var chooserows = document.getElementById('inputHeight');
var choosecolumns = document.getElementById('inputWidth');
var pxCanvas = document.getElementById('pixelCanvas');
chooseSize.addEventListener("submit", function(event) {
    pxCanvas.innerHTML = "";
    event.preventDefault();
    makeGrid();    
});
function makeGrid()
{
// Your code goes here!
    for (r = 0; r <= chooserows.value; r++) {
        var row = pxCanvas.insertRow(r);
        for (c = 0; c <= choosecolumns.value; c++) {
            var column = row.insertCell(c);
            };
        }
    }   
