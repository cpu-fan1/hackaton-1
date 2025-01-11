import {Module} from '../core/module';
import { random } from '../utils';

export class BackgroundModule extends Module {
    constructor() {
        super('background', 'Поменять цвет');
        this.name = 'Поменять цвет';
    }

    trigger() {
        document.body.style.backgroundColor = `rgb(
            ${random(0, 255)},
            ${random(0, 255)},
            ${random(0, 255)}
        )`
    }
}