import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
    }
    open (event) {
        this.el.style.display = 'block';
        this.el.style.top = `${event.clientY}px`;
        this.el.style.left = `${event.clientX}px`;
    }

    close () {
        this.el.style.display = 'none';
    }

    add (text) {
        const menuItem = document.createElement('li');
        menuItem.textContent = text;
        menuItem.className = 'menu-item';
        this.el.append(menuItem);
    }
}