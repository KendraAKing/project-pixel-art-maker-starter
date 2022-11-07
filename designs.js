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
var chooseHeight = document.getElementById('inputHeight');
var chooseWidth = document.getElementById('inputWidth');
var artCanvas = document.getElementById('pixelCanvas');
function makeGrid() 
{
// Your code goes here!
    for (x = 0; x <= chooseHeight.value; x++)
    {
        var row = artCanvas.insertRow(x);
        for (y=0; y<= chooseWidth.value; y++)
        {   
            var column = row.insertCell(y);
            column.addEventListener("click", function(event)
            {
                column.style.backgroundColor = chooseColor.value; 
            });
        }
    }   
}
function clearGrid()
{
    for (x = 0; x <= chooseHeight.value; x++)
    {
        var row = artCanvas.insertRow(x);
        for (y=0; y<= chooseWidth.value; y++)
        {
            var column = row.insertCell(y);
            column.addEventListener("click",function(event)
            {
                column.style.backgroundColor = 'white';
            });
        }
    }       
}