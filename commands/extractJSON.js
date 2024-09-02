
const fs = require('fs');
const vscode = require('vscode');
const defaultColors = require('./defaultColors.js')


const validateColors = (colors) => {
    if (!(colors.special && colors.colors)) return false;
    return true;
}


module.exports = (jsonFilePath) => {
    return fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        vscode.window.showErrorMessage('Error reading JSON file. Using default instead.');
        return defaultColors;
    }
    console.log('JSON file read successfully');

    let colors;
    try {
        const parsedData = JSON.parse(data);
        colors = {
        ...parsedData.special,
        ...parsedData.colors
        };
        console.log('Extracted colors:', colors);

        if (validateColors(colors)) return colors;
        else vscode.window.showErrorMessage('Invalid JSON format.');

    } catch (parseErr) {
        console.error('Error parsing JSON file:', parseErr);
        vscode.window.showErrorMessage('Error parsing JSON file. Using default instead.');
        return defaultColors;
    }

    });
}