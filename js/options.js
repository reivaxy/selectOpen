
// Saves options to chrome.storage
function saveOptions() {
  var jiraUrl = document.getElementById('jiraUrl');
  var minProject = document.getElementById('minProject');
  var maxProject = document.getElementById('maxProject');
  var minID = document.getElementById('minID');
  var maxID = document.getElementById('maxID');
  options.jiraUrl = jiraUrl.value;
  options.minProject = minProject.value;   
  options.maxProject = maxProject.value;   
  options.minID = minID.value;   
  options.maxID = maxID.value;
  
  minProject.setAttribute('max', options.maxProject);
  maxProject.setAttribute('min', options.minProject);
  minID.setAttribute('max', options.maxID);
  maxID.setAttribute('min', options.minID);
  
  chrome.storage.sync.set({
    jiraUrl: options.jiraUrl,
    minProject: options.minProject,
    maxProject: options.maxProject,
    minID: options.minID,
    maxID: options.maxID
  }, function() {
    refreshPreview();
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
  refreshPreview();
}

function refreshPreview() {
  var ticketID = '';
  var projectName = '';
  var digit = 1;
  for(var i = 0; i < options.maxID; i++) {
    ticketID += '' + digit%10;
    digit++
  }
  var A = 65;
  var letter = 0;
  for(var i = 0; i < options.maxProject; i++) {
    projectName += '' + String.fromCharCode(A + letter%26);
    letter++
  }
  document.getElementById('preview').textContent = options.jiraUrl + '/' + projectName + '-' + ticketID;
}


// document.getElementById('save').addEventListener('click', saveOptions);
document.addEventListener('DOMContentLoaded', restoreOptions(initOptionForm));
document.addEventListener('keyup', saveOptions);
document.addEventListener('mouseup', saveOptions);
