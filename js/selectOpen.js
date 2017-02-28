

(function() {
  if (!window.getSelection) {
    return
  }

  var link = document.createElement('div');
  link.appendChild(document.createTextNode("Open in Jira"));
  link.className = 'selectOpenlLink';
  link.addEventListener('mousedown', function(e) {
    var txt = link._data.replace(/^.*(camp-[0-9]{3,5}).*$/i, '$1').replace(/^.*(neo-[0-9]{3,5}).*$/i, '$1');
    window.open('https://jira.corp.adobe.com/browse/' + txt.toUpperCase());    
  });
  
  document.body.appendChild(link);
  
  // Called when mouse down on document
  function mouseDownHandler(e) {
    link.removeAttribute('style');
  };
  
  // Called when mouse up on document
  function mouseUpHandler(e) {
    var sel = window.getSelection();
    if (sel.rangeCount>0) {
      var range = sel.getRangeAt(0);
    } else {
      return;
    }
  
    var txt = range.toString();
    txt = txt.replace(/^\s+|\s+$/,"");
    if(txt.length && txt.match(/[a-z]{3,4}-[0-9]{3,5}/i)) {
      link.setAttribute('style', 'display: block;position:fixed;top:calc(' + e.clientY + 'px - 2em);left: calc(' + e.clientX + 'px + 1em)');
      link._data = txt;
    }
  };
  
  // Set the handlers for mouse events on current document
  document.addEventListener('mouseup', mouseUpHandler, true);
  document.addEventListener('mousedown', mouseDownHandler, true);
  
  
})();