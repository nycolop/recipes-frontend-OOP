
import RecipesManager from './RecipesManager.js';

export default class DataManager {
    constructor() {
        this.recipes = new RecipesManager();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new DataManager();
        }

        return this.instance;
    }
}
