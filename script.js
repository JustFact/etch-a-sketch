const mainContainer = document.querySelector('.main-container');

const gridCell = document.createElement('div');
gridCell.classList.add('cell')
gridCell.innerText = 'Hello'

const gridRow = document.createElement('div');
gridRow.classList.add('row')


for(let i = 1; i<=16; i++){
    gridCell.innerText = i;
    gridRow.appendChild(gridCell.cloneNode(true));
}
for(let i = 1; i<=16; i++){
    mainContainer.appendChild(gridRow.cloneNode(true));
}


console.log(mainContainer)