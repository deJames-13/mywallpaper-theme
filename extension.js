const css = require('css');
const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.changeColorTheme', async () => {
    const config = vscode.workspace.getConfiguration();
    
    // Path to the CSS file containing the color scheme
    const cssFilePath = path.join(process.env.HOME || '', '.cache/wal/colors-waybar.css');

    // Read the CSS file
    fs.readFile(cssFilePath, 'utf8', (err, data) => {
      if (err) {
        vscode.window.showErrorMessage('Error reading CSS file');
        return;
      }

      // Parse the CSS file
      const parsedCSS = css.parse(data);
      const colors = {};

      // Extract color definitions
      parsedCSS.stylesheet?.rules.forEach(rule => {
        if (rule.type === 'rule' && rule.declarations) {
          rule.declarations.forEach(declaration => {
            if (declaration.type === 'declaration' && declaration.property && declaration.value) {
              colors[declaration.property] = declaration.value;
            }
          });
        }
      });

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
        })
        .catch((error) => {
          vscode.window.showErrorMessage('Error updating color theme');
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