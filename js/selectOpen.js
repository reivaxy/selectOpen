

(function() {
  if (!window.getSelection) {
    return
  }

  var link = document.createElement('div');
  link.className = 'selectOpenlLink';
  link.addEventListener('mousedown', function(evt) {
    if(evt.target._data) {
      window.open('https://jira.corp.adobe.com/browse/' + evt.target._data);
    }
  });
  
  document.body.appendChild(link);
  
  // Called when mouse down on document
  function mouseDownHandler(e) {
    link.removeAttribute('style');
  };
  
  // Called when mouse up on document
  function mouseUpHandler(evt) {
    var sel = window.getSelection().toString();
    // Make array with ticket patterns: 3 or 4 letters dash 3 to 5 digits (for now)
    var tickets = sel.match(/[a-z]{3,4}-[0-9]{3,5}/ig);
    
    if(tickets && tickets.length) {
      // Position the ticket link container near the mouse
      var yOffset = 2 * tickets.length + 0.3;
      link.setAttribute('style', 'display: block;position:fixed;top:calc(' + evt.clientY + 'px - ' + yOffset + 'em);left: calc(' + evt.clientX + 'px + 1em)');
      link.innerHTML = '';
      // Add one link per ticket matched
      for(var i = 0; i < tickets.length; i ++) {
        var ticketTxt = tickets[i].toUpperCase();
        var ticketDiv = document.createElement('div');
        ticketDiv.appendChild(document.createTextNode('Open ' + ticketTxt + ' in Jira'));
        // Keep ticket id to build link
        ticketDiv._data = ticketTxt;
        link.appendChild(ticketDiv);
      }
    }
  };
  
  // Set the handlers for mouse events on current document
  document.addEventListener('mouseup', mouseUpHandler, true);
  document.addEventListener('mousedown', mouseDownHandler, true);
  
  
})();