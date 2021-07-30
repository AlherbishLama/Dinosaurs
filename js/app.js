import Human from './Human.js';
import Dino from './Dino.js';

let dinos = [];

//read json file
fetch('/projects/Javascript-master/dino.json')
    .then(res => res.json())
    .then(data => {
        // Create Dino Objects
        dinos = createDinoObjects(data.Dinos);
    });


function createDinoObjects (dinos){
    return dinos.map(
        element =>
            new Dino(
                element.species,
                element.height,
                element.weight,
                element.diet,
                element.fact
            )
    );
}


// On button click, prepare and display infographic
const compare_btn = document.getElementById('btn');

compare_btn.addEventListener('click' , () => {
    // Use IIFE to get human data from form

    const human_Data = (function getHumanData(){
        const form = document.querySelector('form');
        return Object.fromEntries(new FormData(form).entries());
    })();

    // Create Human Object
    const human = new Human(
        human_Data.name,
        human_Data.inches,
        human_Data.weight,
        human_Data.diet,
    );

    // Remove form from screen
    const form = document.getElementById('dino-compare');
    form.style.display="none";

    // Add tiles to DOM
    const grid = document.querySelector('#grid');

    // Generate Tiles for each Dino in Array
    const tiles = dinos.map(dino => {
        return dino.generateDinoTile(human);
    });

    const human_Tile = human.humanTile();

    // add human tail in the middle
    tiles.splice(tiles.length/2, 0, human_Tile);


    const createTile = (tile) => {
        const tile_div = document.createElement('div');
        tile_div.classList.add('grid-item');
        let tile_ele = `
        <h3> ${tile.name}</h3>
        <img src="./${tile.image}"/> `

        if(!tile.image.includes('human'))
            tile_ele = tile_ele.concat(`<p> ${tile.fact}</p>`)
        tile_div.innerHTML = tile_ele;
        return tile_div;
    }

    // Add tiles to the DOM grid element
    tiles.forEach((tile) => {
        const tile_div = createTile(tile)
        grid.appendChild(tile_div)
    })


});