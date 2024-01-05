const getUserInput = require('./lib/userInput');
const generateSVG = require('./lib/svgGenerator');

async function runApp() {
    try {
        const userInput = await getUserInput();
        generateSVG(userInput);
    } catch(error) {
        console.error(`Error: ${error.message}`);
    }
}

runApp();