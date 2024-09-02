const vscode = require('vscode');

module.exports = async () => {
    const config = vscode.workspace.getConfiguration();
    config.update('workbench.colorCustomizations', {}, vscode.ConfigurationTarget.Global)
        .then(() => {
          vscode.window.showInformationMessage('Color customization theme removed!');
          console.log('Color theme removed successfully');
        })
        .catch((error) => {
          vscode.window.showErrorMessage('Error removing color theme');
          console.error('Error removing color theme:', error);
        });
}