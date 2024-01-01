const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function generateLogo() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: (value) => value.length > 0 && value.length <= 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hex):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hex):',
        },
    ]);

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
            console.log('Invalid shape selection.');
            return;
    }

    logoShape.setText(userInput.text);
    logoShape.setTextColor(userInput.setTextColor);

    const logoSVG = logoShape.render();
    fs.writeFileSync('logo.svg', logoSVG);

    console.log('Generated logo.svg');
}

generateLogo();