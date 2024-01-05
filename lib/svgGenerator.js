const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');

function generateSVG(userInput) {

    let logoShape;

    switch (userInput.shape) {
        case 'Triangle':
            logoShape = new Triangle();
            break;
        case 'Circle':
            logoShape = new Circle();
            break;
        case 'Square':
            logoShape = new Square();
            break;
        default:
            console.log('Invalid shape Selection.');
            return;
    }

    logoShape.setText(userInput.text);
    logoShape.setTextColor(userInput.textColor);
    logoShape.setColor(userInput.shapeColor);

    const svgString = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${logoShape.render()}
    </svg>
    `;

    fs.writeFileSync('logo.svg', svgString);

    console.log('Generated logo.svg');
}

module.exports = generateSVG;