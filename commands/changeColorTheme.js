const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

module.exports = async () => {
    const config = vscode.workspace.getConfiguration();
    
    const cssFilePath = config.get('wallpaperTheme.cssFilePath').replace("${env:HOME}", process.env.HOME);
    console.log(`Reading CSS file from: ${cssFilePath}`);

    fs.readFile(cssFilePath, 'utf8', (err, data) => {
      if (err) {
        vscode.window.showErrorMessage('Error reading CSS file');
        console.error('Error reading CSS file:', err);
        return;
      }

      console.log('CSS file read successfully');

      const colors = {};

      const lines = data.split('\n');
      lines.forEach(line => {
        const match = line.match(/@define-color\s+(\w+)\s+(#[0-9a-fA-F]{6});/);
        if (match) {
          const [, name, value] = match;
          colors[name] = value;
        }
      });

      console.log('Extracted colors:', colors);


      const newColors = {
        "terminal.background": colors["color1"] + '00', // cursor
        "terminalCursor.background": colors["color1"], // cursor
        "statusBar.background": colors["color1"], // color1
        "scrollbarSlider.background": colors["color5"] + '69', // color5 with 69

        "badge.background": colors["color6"], // color6
        "activityBarBadge.background": colors["color6"], // color6
        "button.background": colors["color1"], // color1
        "breadcrumb.focusForeground": colors["color6"], // color6
        "list.activeSelectionBackground": colors["color1"], // color1
        "list.inactiveSelectionBackground": colors["color1"], // color1
        "list.focusAndSelectionOutline": colors["color5"] + '69', // color5 with 69
        "focusBorder": colors["color6"], // color6
        
        "statusBar.noFolderBackground": colors["color0"], // color0
        "statusBar.debuggingBackground": colors["color6"], // color6
        // "titleBar.inactiveBackground": colors["color5"], // color5

        "titleBar.activeBackground": colors["color0"] + '00', // color2
        "activityBar.activeBackground": colors["color1"] + '69', // color1 with 69
        "tab.activeBackground": colors["color1"] + '69', // color1 with 69
        "minimapSlider.activeBackground": colors["color5"] + '69', // color5 with 69
        "scrollbarSlider.activeBackground": colors["color5"] + '69', // color5 with 69

        "titleBar.border": colors["color5"], // color5,
        "tab.activeBorder": colors["color5"], // color5
        // "sideBar.border": "//#6C4A97", // color5
        "activityBar.activeBorder": colors["color5"], // color5


        "terminalCursor.foreground": colors["cursor"], // cursor
        "statusBar.debuggingForeground": colors["cursor"], // cursor
        "titleBar.inactiveForeground": colors["cursor"], // cursor

        // HOVER
        "tab.hoverBackground": colors["color5"] + '69', // color5 with 69
        "extensionButton.hoverBackground": colors["color5"] + '69', // color5 with 69
        "list.hoverBackground": colors["color5"] + '69', // color5  with 69
        "toolbar.hoverOutline": colors["color5"], // color5
        "minimapSlider.hoverBackground": colors["color5"] + '69', // color5 with 69
        "tab.hoverBorder": colors["color5"], // color5
        "button.hoverBackground": colors["color5"] + '69', // color5 with 69
        "sash.hoverBorder": colors["color5"] + '69', // color5 with 69
        "settings.rowHoverBackground": colors["color5"] + '69', // color5 with 69
        "button.secondaryHoverBackground": colors["color5"] + '69', // color5 with 69
        "scrollbarSlider.hoverBackground": colors["color5"] + '69', // color5 with 69
        "editor.wordHighlightBackground":  colors["color5"] + '69', // color5 with 69
        "editor.lineHighlightBackground":  colors["color5"] + '69', // color5 with 69
        "editor.selectionHighlightBackground": colors["color5"] + '69', // color5 with 69
        "editor.selectionBackground": colors["color5"] + '69', // color5 with 69
      }

      const currentColors = config.get('workbench.colorCustomizations') || {};

      const dynamicColors = { 
        'workbench.colorCustomizations': {
          ...currentColors,
          ...newColors
        }
       };

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
}
