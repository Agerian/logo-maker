class Shape {
    constructor() {
        this.shapeColor = '';
        this.text = '';
        this.textColor = '';
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    setText(text) {
        this.text = text;
    }

    render() {
        return '';
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="50%" y="60%" fill="${this.textColor}" font-size="70" text-anchor="middle" dy=".3em">${this.text}</text>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="50%" y="50%" fill="${this.textColor}" font-size="70" text-anchor="middle" dy=".3em">${this.text}</text>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}" />
        <text x="50%" y="50%" fill="${this.textColor}" font-size="70" text-anchor="middle" dy=".3em">${this.text}</text>`;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square,
};