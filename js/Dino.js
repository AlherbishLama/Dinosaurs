
export default class Dino {

    /**
     * @description Represents a dino
     * @constructor
     * @param {string} species - The species of the dino
     * @param {int} height - The height of the dino
     * @param {int} weight - The weight of the dino
     * @param {string} diet - The diet of the dino
     * @param {string} fact - The fact of the dino
     */
    constructor(species, height, weight, diet, fact) {
        this.species = species;
        this.height = height;
        this.weight = weight;
        this.fact = fact;
        this.diet = diet;
    }


    /**
     * @description Generate Tile for the dino.
     * @param object human
     * @returns object The dino tile object
     */
    generateDinoTile(human){
        return {
            name:this.species,
            image:'images/' + this.species.toLowerCase() + '.png',
            fact : this.species === 'Pigeon' || this.species === 'Pteranodon'? 'All birds are dinosaurs' :this.generateFacts(human)
        }
    }

    /**
     * @description Compare dino weight with human weight.
     * @param int humanWeight
     * @returns string The result of the weight comparison
     */

    compareWeight(humanWeight) {
        return this.weight === humanWeight ? 'we have the same weight' :
            this.weight > humanWeight ? 'I\'m heavier than you' : 'You\'re heavier than me';
    }

    /**
     * @description Compare dino height with human height.
     * @param int humanHeight
     * @returns string The result of the height comparison
     */

    compareHeight(humanHeight) {
        return this.height === humanHeight ? 'we have the same height' :
            this.height > humanHeight ? 'I\'m taller than you' : 'You\'re taller than me';
    }


    /**
     * @description Compare dino diet with human diet.
     * @param string humanDiet
     * @returns string The result of the diet comparison
     */
    compareDiet(humanDiet) {
        return this.diet === humanDiet ? 'we have the same diet' : 'we don\'t have the same diet';
    }



    /**
     * @description Generate random fact.
     * @param object human
     * @returns string The fact selected randomly
     */
    generateFacts(human){
        const facts = [
            'My height is ' +this.height ,
            'My weight is ' +this.weight ,
            this.fact
        ];

        facts.push(this.compareDiet(human.diet));
        facts.push(this.compareHeight(human.height));
        facts.push(this.compareWeight(human.weight));
        const randomNum = Math.floor(Math.random()* facts.length);
        return facts[randomNum] ;
    }

}