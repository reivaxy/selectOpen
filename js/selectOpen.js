

(function() {
  if (!window.getSelection) {
    return
  }
  var regexp, link;
  
  restoreOptions(function(){
    link = document.createElement('div');
    link.className = 'selectOpenlLink';
    link.addEventListener('mousedown', function(evt) {
      var url = evt.target.getAttribute('title');
      if(url) {
        window.open(url);
      }
    });
  
    document.body.appendChild(link);
    regexp = new RegExp('[a-z]{' + options.minProject + ',' + options.maxProject + 
      '}-[0-9]{'+ options.minID + ',' + options.maxID + '}', 'ig');
  });
  
  // Called when mouse down on document
  function mouseDownHandler(e) {
    link.removeAttribute('style');
  };
  
  // Called when mouse up on document
  function mouseUpHandler(evt) {
    var sel = window.getSelection().toString();
    // Make array with ticket patterns: 3 or 4 letters dash 3 to 5 digits (for now)
    var tickets = sel.match(regexp);
    
    if(tickets && tickets.length) {
      link.innerHTML = '';
      var already = {};
      var count = 0;
      // Add one link per ticket matched
      for(var i = 0; i < tickets.length; i ++) {
        var ticketTxt = tickets[i].toUpperCase();
        if(!already[ticketTxt]) {
          already[ticketTxt] = true;
          count ++;
          var ticketDiv = document.createElement('div');
          ticketDiv.appendChild(document.createTextNode('Open ' + ticketTxt + ' in Jira'));
          var url = options.jiraUrl.replace(/\/?$/, '/') + ticketTxt;
          ticketDiv.setAttribute('title', url);
          link.appendChild(ticketDiv);
        }
      // Position the ticket link container near the mouse
      var yOffset = count + 0.3;
      link.setAttribute('style', 'display: block;position:fixed;top:calc(' + evt.clientY + 'px - ' + yOffset + 'em);left: calc(' + evt.clientX + 'px + 1em)');
      }
    }
  };
  
  // Set the handlers for mouse events on current document
  document.addEventListener('mouseup', mouseUpHandler, true);
  document.addEventListener('mousedown', mouseDownHandler, true);
  
  
})();