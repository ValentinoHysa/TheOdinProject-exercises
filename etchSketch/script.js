function hover(element, enter) {
    element.addEventListener('mouseenter', enter);
}
  document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function() {
        const squareNum = document.getElementById('squareNum').value;
        if((squareNum > 100) || (!typeof squareNum === 'number')){
            alert("Please insert an integer up to 100")
        } else {
            createGrid(parseInt(squareNum));
        }
    });
});
function createGrid(squares){
    const containerLink = document.querySelector(".container");

    containerLink.innerHTML = ''; //empty out the container
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
    }
    const squareDivs = document.querySelectorAll(".square");
    squareDivs.forEach(squareDiv => {
        let opacity = 0;
        hover(squareDiv, e => {
            opacity += 0.1;
            if (opacity > 1) opacity = 1;
            e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        });
    });
}

