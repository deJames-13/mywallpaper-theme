const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.changeColorTheme', async () => {
    const config = vscode.workspace.getConfiguration();
    
    // Path to the CSS file containing the color scheme
    const cssFilePath = path.join(process.env.HOME || '', '.cache/wal/colors-waybar.css');
    console.log(`Reading CSS file from: ${cssFilePath}`);

    // Read the CSS file
    fs.readFile(cssFilePath, 'utf8', (err, data) => {
      if (err) {
        vscode.window.showErrorMessage('Error reading CSS file');
        console.error('Error reading CSS file:', err);
        return;
      }

      console.log('CSS file read successfully');

      const colors = {};

      // Manually parse the CSS file to extract color definitions
      const lines = data.split('\n');
      lines.forEach(line => {
        const match = line.match(/@define-color\s+(\w+)\s+(#[0-9a-fA-F]{6});/);
        if (match) {
          const [, name, value] = match;
          colors[name] = value;
        }
      });

      console.log('Extracted colors:', colors);

      // Define your dynamic colors here based on the color scheme
      const dynamicColors = {
        "workbench.colorCustomizations": {
          "terminal.background": colors['color0'],
          "terminal.foreground": colors['foreground'],
          "terminalCursor.background": colors['cursor'],
          "terminalCursor.foreground": colors['cursor'],
          "statusBar.background": colors['color1'],
          "statusBar.foreground": colors['foreground'],
          "statusBar.noFolderBackground": colors['color2'],
          "statusBar.noFolderForeground": colors['foreground'],
          "statusBar.debuggingBackground": colors['color3'],
          "statusBar.debuggingForeground": colors['foreground'],
          "titleBar.activeBackground": colors['color4'],
          "titleBar.activeForeground": colors['foreground'],
          "titleBar.inactiveBackground": colors['color5'],
          "titleBar.inactiveForeground": colors['foreground'],
        }
      };

      // Update the settings.json with dynamic colors
      config.update('workbench.colorCustomizations', dynamicColors['workbench.colorCustomizations'], vscode.ConfigurationTarget.Global)
        .then(() => {
          vscode.window.showInformationMessage('Color theme updated!');
          console.log('Color theme updated successfully');
        })
        .catch((error) => {
          vscode.window.showErrorMessage('Error updating color theme');
          console.error('Error updating color theme:', error);
        });
    });
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};