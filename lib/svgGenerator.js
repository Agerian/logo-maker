const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');

function generateSVG(userInput) {
    let logoShape;

    switch (userInput.shape) {
        case 'Triangle':
            logoShape = new Triangle(userInput.shapeColor);
            break;
        case 'Circle':
            logoShape = new Circle(userInput.shapeColor);
            break;
        case 'Square':
            logoShape = new Square(userInput.shapeColor);
            break;
        default:
            console.log('Invalid shape Selection.');
            return;
    }

    logoShape.setText(userInput.text);
    logoShape.setTextColor(userInput.setTextColor);

    const svgString = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${logoShape.render()}
    </svg>
    `;

    fs.writeFileSync('logo.svg', svgString);

    console.log('Generated logo.svg');
}

module.exports = generateSVG;