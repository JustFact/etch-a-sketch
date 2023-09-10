const canvasDimensions = 600;
const numberOfCells = 20;

const mainContainer = document.querySelector('.main-container');
mainContainer.addEventListener('mouseover', (event)=>{
    if(event.target.classList.contains('cell')){
        event.target.style.backgroundColor = 'purple'
    }
})

const gridCell = document.createElement('div');
gridCell.classList.add('cell')
function setCellSize(cellSize){
    gridCell.style.width = `${cellSize}px`
    gridCell.style.height = `${cellSize}px`
}
setCellSize(canvasDimensions/numberOfCells);

const gridRow = document.createElement('div');
gridRow.classList.add('row')


for(let i = 1; i<=numberOfCells; i++){
    gridRow.appendChild(gridCell.cloneNode(true));
}
for(let i = 1; i<=numberOfCells; i++){
    mainContainer.appendChild(gridRow.cloneNode(true));
}