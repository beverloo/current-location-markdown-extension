chrome.tabs.getSelected(null, function(tab) {
  var markdownCode = document.getElementById('markdown_code'),
      tabTitle = tab.title,
      tabUrl = tab.url;

  // Normalize the title, as auto-link can't handle "Bug X" very well..
  tabTitle = tabTitle.replace(/Bug\s+(\d+)/g, 'Bug  $1');

  // Remove phrases from titles I don't care about, which just add extra cruft.
  var titlePhrasesToRemove = [
    ' - An open-source browser project to help move the web forward. - Google Project Hosting',
    ' - An open-source project to help move the web forward. - Google Project Hosting'
  ];

  for (var index = 0, length = titlePhrasesToRemove.length; index < length; ++index)
    tabTitle = tabTitle.replace(titlePhrasesToRemove[index], '');

  // TODO: Remove ampersands from the URL in a way that does not choke the parser.
  markdownCode.value = '[' + tabTitle + '](' + tabUrl + ')';
});
