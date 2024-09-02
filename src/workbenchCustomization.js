module.exports = (colors) => {
    if (!colors) {
        return;
    }

    return {
        "terminal.background": colors["color1"] + '00' || "", 
        "terminalCursor.background": colors["color1"] || "", 
        "statusBar.background": colors["color1"] || "", 
        "scrollbarSlider.background": colors["color5"] + '69' || "", 

        "badge.background": colors["color6"] || "", 
        "activityBarBadge.background": colors["color6"] || "", 
        "button.background": colors["color1"] || "", 
        "breadcrumb.focusForeground": colors["color6"] || "", 
        "list.activeSelectionBackground": colors["color1"] || "", 
        "list.inactiveSelectionBackground": colors["color1"] || "", 
        "list.focusAndSelectionOutline": colors["color5"] + '69' || "", 
        "focusBorder": colors["color6"] || "", 
        
        "statusBar.noFolderBackground": colors["color0"] || "", 
        "statusBar.debuggingBackground": colors["color6"] || "", 

        "titleBar.activeBackground": colors["color0"] + '00' || "", 
        "activityBar.activeBackground": colors["color1"] + '69' || "", 
        "tab.activeBackground": colors["color1"] + '69' || "", 
        "minimapSlider.activeBackground": colors["color5"] + '69' || "", 
        "scrollbarSlider.activeBackground": colors["color5"] + '69' || "", 

        "titleBar.border": colors["color5"] || "", 
        "tab.activeBorder": colors["color5"] || "", 
        "activityBar.activeBorder": colors["color5"] || "", 


        "terminalCursor.foreground": colors["cursor"] || "", 
        "statusBar.foreground": colors["cursor"] || "", 
        "statusBar.debuggingForeground": colors["cursor"] || "", 
        "titleBar.inactiveForeground": colors["cursor"] || "", 
        "editorCursor.foreground": colors["cursor"] || "",
        

        
        "tab.hoverBackground": colors["color5"] + '69' || "", 
        "extensionButton.hoverBackground": colors["color5"] + '69' || "", 
        "list.hoverBackground": colors["color5"] + '69' || "", 
        "toolbar.hoverOutline": colors["color5"] || "", 
        "minimapSlider.hoverBackground": colors["color5"] + '69' || "", 
        "tab.hoverBorder": colors["color5"] || "", 
        "button.hoverBackground": colors["color5"] + '69' || "", 
        "sash.hoverBorder": colors["color5"] + '69' || "", 
        "settings.rowHoverBackground": colors["color5"] + '69' || "", 
        "button.secondaryHoverBackground": colors["color5"] + '69' || "", 
        "scrollbarSlider.hoverBackground": colors["color5"] + '69' || "", 
        "editor.wordHighlightBackground":  colors["color5"] + '69' || "", 
        "editor.lineHighlightBackground":  colors["color5"] + '69' || "", 
        "editor.selectionHighlightBackground": colors["color5"] + '69' || "", 
        "editor.selectionBackground": colors["color5"] + '69' || "", 
    }

}