const mainContainer = document.querySelector('.main-container');

const gridCell = document.createElement('div');
gridCell.classList.add('cell')

const gridRow = document.createElement('div');
gridRow.classList.add('row')


for(let i = 1; i<=16; i++){
    gridRow.appendChild(gridCell.cloneNode(true));
}
for(let i = 1; i<=16; i++){
    mainContainer.appendChild(gridRow.cloneNode(true));
}


console.log(mainContainer)