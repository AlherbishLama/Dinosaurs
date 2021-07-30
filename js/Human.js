
export default class Human {

    /**
     * @description Represents a human
     * @constructor
     * @param {string} name - The name of the human
     * @param {int} heightInches - The heightInches of the human
     * @param {int} weight - The weight of the human
     * @param {string} diet - The diet of the human
     */
    constructor(name, heightInches, weight, diet){
        this.name = name;
        this.heightInches = heightInches;
        this.weight = weight;
        this.diet = diet;
    }


    /**
     * @description Generate Tile for the human.
     * @returns {object} The human tile object.
     */
    humanTile () {
        return {
            name : this.name,
            image: 'images/human.png',
        }
    }
}