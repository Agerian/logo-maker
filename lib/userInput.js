const inquirer = require('inquirer');

async function getUserInput() {
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

    return userInput;
}

module.exports = getUserInput;