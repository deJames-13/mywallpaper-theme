
const fs = require('fs');
const path = require('path');
const vscode = require('vscode');
const defaultColors = require('./defaultColors.js')


const validateColors = (colors) => {
    if (!(colors.special && colors.colors)) return false;
    return true;
}


module.exports = (jsonFilePath, callback) => {
    let colors;

    jsonFilePath = path.resolve(jsonFilePath);
    console.log('JSON file path:', jsonFilePath);

    if (!fs.existsSync(jsonFilePath)) {
        console.error('JSON file does not exist');
        vscode.window.showErrorMessage('JSON file does not exist. Using default instead.');
        colors = defaultColors;
    }

    return fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        vscode.window.showErrorMessage('Error reading JSON file. Using default instead.');
        colors = defaultColors;
    }
    else console.log('JSON file read successfully');

    try {
        const parsedData = JSON.parse(data);
        if (!validateColors(parsedData)) 
            return vscode.window.showErrorMessage('Invalid JSON format.');
        
        colors = {
        ...parsedData.special,
        ...parsedData.colors
        };
        console.log('Extracted colors:', colors);

    } catch (parseErr) {
        console.error('Error parsing JSON file:', parseErr);
        vscode.window.showErrorMessage('Error parsing JSON file. Using default instead.');
        colors = defaultColors;
    }

    callback(colors);

    });
}