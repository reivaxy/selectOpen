# Select - Open

This is a tiny Chrome extension that allows to open Jira tickets from a page (let's say a Slack chat for instance) where only the ID of the ticket was given, without a proper link. For people whose co-workers can't just copy/paste a link but rather copy paste Jira ID's to FORCE you to copy paste it either in the Jira search box or the url of an already opened ticket. I just whish they stopped. But sometimes I do it too.

When a selection in the current page contains some Jira ticket IDs of the form ABCD-12345 (3 to 4 letters dash 3 to 5 digits) it adds a clickable tooltip to open the matching Jira ticket pages.

<img src='http://adgjm.eu/img/github/jira1.png'/>


The Jira url and the sizes of the project name and numeric part of the ID can be configured in the extension option page.


Check the Releases section of this repo, download the .crx file, and drag and drop it to a Chrome tab opened on the page chrome://extensions/

Awesome.

