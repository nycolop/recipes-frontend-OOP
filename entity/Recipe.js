
export default class Recipe {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    toHTML() {
        return `
            <article id=${this.id} class="recipe">
                <h3>${this.name}</h3>
                <p>${this.description}</p>
            </article>
        `;
    }
}
