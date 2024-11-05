
import Manager from './Manager.js';
import Recipe from '../entity/Recipe.js';
import Renderer from '../util/Renderer.js';

export default class RecipesManager extends Manager {
    constructor() {
        super();
    }

    load() {
        this.data = [
            new Recipe("receta-1", "Fideos", "Fideos con queso."),
            new Recipe("receta-2", "Ñoquis", "Ñoquis con papa."),
            new Recipe("receta-3", "Ravioles", "Ravioles de carne.")
        ];
    }

    render() {
        this.load();

        let loader = "";

        for (const recipe of this.data) {
            loader += recipe.toHTML();

        }

        Renderer.renderToHTML("body", loader);
    }
}
