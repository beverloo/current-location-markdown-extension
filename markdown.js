chrome.tabs.getSelected(null, function(tab) {
  var markdownCode = document.getElementById('markdown_code'),
      tabTitle = tab.title,
      tabUrl = tab.url;

  // Normalize the title, as auto-link can't handle "Bug X" very well..
  tabTitle = tabTitle.replace(/Bug\s+(\d+)/g, 'Bug  $1');

  // TODO: Remove ampersands from the URL in a way that does not choke the parser.
  markdownCode.value = '[' + tabTitle + '](' + tabUrl + ')';
});
