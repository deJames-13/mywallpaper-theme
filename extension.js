
const vscode = require('vscode');
const changeColorTheme = require('./commands/changeColorTheme.js');
const removeColorTheme = require('./commands/removeColorTheme.js');

function activate(context) {
  let changeCommand = vscode.commands.registerCommand('my-wallpaper-theme.changeColorTheme', changeColorTheme);
  context.subscriptions.push(changeCommand);

  let removeCommand = vscode.commands.registerCommand('my-wallpaper-theme.removeColorTheme', removeColorTheme)
  context.subscriptions.push(removeCommand);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};