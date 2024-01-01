class Shape {
    constructor(color) {
        this.color = color || 'black';
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    render() {
        return '';
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.sideLength = 50;
    }

    render() {
        return `<polygon points="0,0 ${this.sideLength},0 0,${this.sideLength}" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
        this.radius = 25;
    }

    render() {
        return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}">`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
        this.sideLength = 50;
    }

    render() {
        return `<rect x="0" y="0" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square,
};