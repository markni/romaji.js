document.addEventListener('selectionchange', function() {
    var selection = window.getSelection().toString().trim();
    chrome.extension.sendMessage({
        request: 'updateContextMenu',
        selection: selection
    });
});