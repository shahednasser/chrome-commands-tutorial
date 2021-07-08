chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: toggleDark
    });
});

function toggleDark () {
    if (!document.body.getAttribute('data-ext-dark')) {
        document.body.setAttribute('data-ext-dark', true);
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
    } else {
        document.body.setAttribute('data-ext-dark', false);
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    }
}

chrome.commands.onCommand.addListener((command) => {
    if (command === 'hello') {
        console.log("Hello there!");
    } else {
        console.log("Date: " + (new Date).toDateString());
    }
});