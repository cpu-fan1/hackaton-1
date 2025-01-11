import {Module} from '../core/module.js'

export class ShapeModule extends Module {
    constructor() {
        super('shapeModule', 'Случайная фигура'); 
        this.name = 'ShapeModule';
        
        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.appendChild(this.canvas);

        this.context = this.canvas.getContext('2d')
        this.shapes = []; 

        this.trigger = this.trigger.bind(this);
    }
    

    trigger() {
        this.createRandomShape()
    }

    createRandomShape() {
        const shapeType = Math.random() < 0.5 ? 'circle' : 'rectangle'; 
        const color = this.getRandomColor();

        const size = Math.random() * 50 + 10; 
        const x = Math.random() * (this.canvas.width - size);
        const y = Math.random() * (this.canvas.height - size);

        const shape = { type: shapeType, color, x, y, size };
        this.shapes.push(shape);
        this.drawShape(shape);
    }

    
    drawShape(shape) {
        this.context.fillStyle = shape.color;

        if (shape.type === 'circle') {
            this.context.beginPath();
            this.context.arc(shape.x + shape.size / 2, shape.y + shape.size / 2, shape.size / 2, 0, Math.PI * 2);
            this.context.fill();
        } else if (shape.type === 'rectangle') {
            this.context.fillRect(shape.x, shape.y, shape.size, shape.size);
        }
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.shapes = []; 
    }

}