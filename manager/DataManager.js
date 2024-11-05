
import RecipesManager from './RecipesManager.js';

export default class DataManager {
    constructor() {
        this.datas = [
            new RecipesManager()
        ];
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new DataManager();
        }

        return this.instance;
    }

    render() {
        for (const data of this.datas) {
            data.render();
        }
    }
}
