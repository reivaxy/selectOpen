

var options = {
  jiraUrl: 'https://jira.corp.adobe.com/browse',
  minProject: 3,
  maxProject: 4,
  minID: 3,
  maxID: 5
};

// Restores state using the preferences
// stored in chrome.storage.
function restoreOptions(callBack) {
  chrome.storage.sync.get({
    // default values
    jiraUrl: options.jiraUrl,
    minProject: options.minProject,
    maxProject: options.maxProject,
    minID: options.minID,
    maxID: options.maxID
  }, function(items) {
    options.jiraUrl = items.jiraUrl;
    options.minProject = items.minProject;
    options.maxProject = items.maxProject;
    options.minID = items.minID;
    options.maxID = items.maxID;
    if(callBack) {
      callBack();
    }
  });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
