
const vscode = require('vscode');
const extractJSON = require('./extractJSON.js');
const workbenchCustomization = require('./workbenchCustomization.js');

module.exports = async () => {
    const config = vscode.workspace.getConfiguration();
    const jsonFilePath = config.get('wallpaperTheme.jsonFilePath');

    console.log(`Reading JSON file from: ${jsonFilePath}`);
    
    const colors = extractJSON(jsonFilePath, (colors)=>{
      const currentColors = config.get('workbench.colorCustomizations') || {};
      const newColors = workbenchCustomization(colors);

      const dynamicColors = { 
        'workbench.colorCustomizations': {
          ...currentColors,
          ...newColors
        }
        };

      config.update(
        'workbench.colorCustomizations', 
        dynamicColors['workbench.colorCustomizations'], 
        vscode.ConfigurationTarget.Global)
        .then(() => {
          vscode.window.showInformationMessage('Color theme updated! Using Colors From: ', jsonFilePath);
          console.log('Color theme updated successfully');
        })
        .catch((error) => {
          vscode.window.showErrorMessage('Error updating color theme!');
          console.error('Error updating color theme:', error);
        });
    });





}
