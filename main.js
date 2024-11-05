
import DataManager from './manager/DataManager.js';

class Main {
    static start() {
        const dataManager = DataManager.getInstance();

        dataManager.recipes.render();
    }
}

Main.start();
