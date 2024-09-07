const defaultColors = require('./defaultColors.js')

module.exports = (colors) => {
    if (!colors) {
        colors = defaultColors
    }

    let transparent = "#00000000"
    let primary = colors["color5"] || defaultColors["color5"]
    let secondary = colors["color11"] || defaultColors["color11"]
    let tertiary = colors["color6"] || defaultColors["color6"]
    let foreground = colors["cursor"] || defaultColors["cursor"]
    let background = colors["color0"] || defaultColors["color0"]

    return {
        "terminal.background": transparent,
        "terminal.foreground": foreground,
        "terminalCursor.background": foreground,
        "statusBar.background": primary + '69',
        "scrollbarSlider.background": primary + '69',

        "badge.background": secondary,
        "activityBarBadge.background": tertiary,
        "button.background": secondary,
        "breadcrumb.focusForeground": tertiary,
        "list.activeSelectionBackground": primary + '69',
        "list.inactiveSelectionBackground": primary + '69',
        "list.focusAndSelectionOutline": primary + '69',
        "focusBorder": tertiary,
        
        "statusBar.noFolderBackground": background,
        "statusBar.debuggingBackground": foreground + '69',

        "titleBar.activeBackground": background + '00',
        "activityBar.activeBackground": primary + '69',
        "tab.activeBackground": secondary + '69',
        "minimapSlider.activeBackground": primary + '69',
        "scrollbarSlider.activeBackground": primary + '69',

        "titleBar.border": primary,
        "tab.activeBorder": primary,
        "activityBar.activeBorder": primary,

        "terminalCursor.foreground": foreground,
        "statusBar.foreground": foreground,
        "statusBar.debuggingForeground": foreground,
        "titleBar.inactiveForeground": foreground,
        "editorCursor.foreground": foreground,

        "tab.hoverBackground": primary + '69',
        "extensionButton.hoverBackground": primary + '69',
        "list.hoverBackground": primary + '69',
        "toolbar.hoverOutline": primary,
        "minimapSlider.hoverBackground": primary + '69',
        "tab.hoverBorder": primary,
        "button.hoverBackground": primary + '69',
        "sash.hoverBorder": primary + '69',
        "settings.rowHoverBackground": primary + '69',
        "button.secondaryHoverBackground": primary + '69',
        "scrollbarSlider.hoverBackground": primary + '69',
        "editor.wordHighlightBackground": primary + '69',
        "editor.lineHighlightBackground": primary + '69',
        "editor.selectionHighlightBackground": primary + '69',
        "editor.selectionBackground": primary + '69',
    }

}