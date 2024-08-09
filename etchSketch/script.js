function hover(element, enter, leave){
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave', leave)
  }
  document.addEventListener('DOMContentLoaded', function() {
    //TODO: add the hover behaviour
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function() {
        const squareNum = document.getElementById('squareNum').value;
        createGrid(parseInt(squareNum));
    });
});
function createGrid(squares){
    //TODO: everytime this starts it should empty out the contaner first
    const containerLink = document.querySelector(".container"); //we're gonna appendchild on this grid container
    //the idea here is to use flex, define a direction make n=squares divs in 2 nested loops
    //on the outside loop we go to the next row?
    const rows = squares;
    for(row = 0; row < rows; ++row){
        const myRow = document.createElement("div");
        myRow.classList.add("row");
        containerLink.appendChild(myRow);   
        for(square = 0; square < squares; ++square){
           const mySquare = document.createElement("div");
           mySquare.classList.add("square");
            myRow.appendChild(mySquare);
        }                 
        //go to the next row???        
    }
}

