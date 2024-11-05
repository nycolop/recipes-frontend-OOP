
import DataManager from './manager/DataManager.js';

class Main {
    static start() {
        const dataManager = DataManager.getInstance();

        dataManager.render();
    }
}

Main.start();
