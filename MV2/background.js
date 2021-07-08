chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.executeScript(tab.id, {
        file: 'toggleDark.js'
    });
});

chrome.commands.onCommand.addListener((command) => {
    if (command === 'hello') {
        console.log("Hello there!");
    } else {
        console.log("Date: " + (new Date).toDateString());
    }
});