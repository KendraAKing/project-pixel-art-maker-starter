// Select color input using name from html code
var chooseColor = document.getElementById('colorPicker');
// Select size input using name from html code
var chooseSize = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
chooseSize.addEventListener("submit", function(event)
{
    event.preventDefault();
    clearGrid();
    makeGrid();    
});
// When size is submitted by the user, call makeGrid()
var chooserows = document.getElementById('inputHeight');
var choosecolumns = document.getElementById('inputWidth');
var artCanvas = document.getElementById('pixelCanvas');
function makeGrid() 
{
// Your code goes here!
    for (r = 0; r <= chooserows.value; r++)
    {
        var row = artCanvas.insertRow(r);
        for (c=0; c <= choosecolumns.value; c++)
        {   
            var column = row.insertCell(c);
            column.addEventListener("click", function(event) {
                event.preventDefault();
                column.style.backgroundColor = chooseColor.value; 
            });
        }
    }   
}
function clearGrid()
{
    for (r = 0; r <= chooserows.value; r++)
    {
        var row = artCanvas.insertRow(r);
        for (c=0; c <= choosecolumns.value; c++)
        {
            var column = row.insertCell(c);
            column.addEventListener("click",function(event) {
                event.preventDefault();
                column.style.backgroundColor = 'white';
            });
        }
    }       
}