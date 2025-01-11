import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)

        this.items = [];
        
        this.el.addEventListener('click', event => {
            const { type } = event.target.dataset
            const module = this.items.find(m => m.type === type)
            if (module) {
                module.trigger()
                this.close()
            }
        })

    }
    open (event) {
        this.el.classList.add('open');
        this.el.style.top = `${event.clientY}px`;
        this.el.style.left = `${event.clientX}px`;
    }

    close () {
        this.el.classList.remove('open');
    }

    add (module) {
        this.items.push(module)
        this.el.insertAdjacentHTML('beforeend', module.toHTML())
    }
}