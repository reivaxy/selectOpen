
// Saves options to chrome.storage
function saveOptions() {
  options.jiraUrl = document.getElementById('jiraUrl').value;
  options.minProject = document.getElementById('minProject').value;
  options.maxProject = document.getElementById('maxProject').value;
  options.minID = document.getElementById('minID').value;
  options.maxID = document.getElementById('maxID').value;
  chrome.storage.sync.set({
    jiraUrl: options.jiraUrl,
    minProject: options.minProject,
    maxProject: options.maxProject,
    minID: options.minID,
    maxID: options.maxID
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1200);
  });
}

function initOptionForm() {
  document.getElementById('jiraUrl').value = options.jiraUrl;
  document.getElementById('minProject').value = options.minProject;
  document.getElementById('maxProject').value = options.maxProject;
  document.getElementById('minID').value = options.minID;
  document.getElementById('maxID').value = options.maxID;
}

document.getElementById('save').addEventListener('click', saveOptions);
document.addEventListener('DOMContentLoaded', restoreOptions(initOptionForm));
