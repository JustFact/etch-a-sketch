const canvasDimensions = 600;
let numberOfCells = 16;

let mainContainer = document.querySelector('.main-container');
mainContainer.addEventListener('mouseover', (event)=>{
    if(event.target.classList.contains('cell')){
        event.target.style.backgroundColor = 'purple'
    }
})

let gridCell = document.createElement('div');
gridCell.classList.add('cell')
function setCellSize(cellSize){
    gridCell.style.width = `${cellSize}px`
    gridCell.style.height = `${cellSize}px`
}
setCellSize(canvasDimensions/numberOfCells);

const nCells = document.querySelector('.set-ncell-btn');
nCells.addEventListener('click',setNumberOfCells)
function setNumberOfCells(){
    let newCellCount = 0;
    newCellCount = Number.parseInt(prompt('Enter Number of Cells'));
    if(newCellCount&&newCellCount>100){
        numberOfCells = 100;
    }else if(newCellCount){
        numberOfCells = newCellCount;
    }else{
        return;
    }
    updateGrid()
}

function createGrid(){
    let gridRow = document.createElement('div');
    gridRow.classList.add('row')
    
    for(let i = 1; i<=numberOfCells; i++){
        gridRow.appendChild(gridCell.cloneNode(true));
    }
    for(let i = 1; i<=numberOfCells; i++){
        mainContainer.appendChild(gridRow.cloneNode(true));
    }
}

function cleanGrid(){
    while(mainContainer.firstChild){
        while(mainContainer.firstChild.firstChild){
            mainContainer.firstChild.removeChild(mainContainer.firstChild.firstChild)
        }
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

function updateGrid(){
    cleanGrid();
    setCellSize(canvasDimensions/numberOfCells);
    createGrid();
}

createGrid();