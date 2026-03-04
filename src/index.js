import { PardusLibrary } from 'pardus-library';
import {
    Main,
    Msgframe,
    Options
} from './classes/pages/index.js';

export default class PardusQuickCommands {
    constructor() {
        const pardus = new PardusLibrary();

        switch (document.location.pathname) {
            case '/main.php':
                new Main(pardus.currentPage);
                break;
            case '/options.php':
                new Options();
                break;
            case '/msgframe.php':
                new Msgframe();
                break;
            default:
                console.log(`Page '${document.location.pathname}' not implemented!`);
        }
    }
}
