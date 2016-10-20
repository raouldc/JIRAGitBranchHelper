$(document).ready(function() {
	$(".loading").on('DOMNodeRemoved', function(e) {
    	console.log(e.target, ' was removed');
    	var buttonToolbar = document.getElementsByClassName("toolbar-split-right")[0];

    	if(buttonToolbar === undefined) return;

		var newButton = document.createElement("ul");
		newButton.className = "toolbar-group pluggable-ops";

		var s = '<li class="toolbar-item toolbar-analytics"><a id="jira-new-branch-trigger" class="toolbar-trigger viewissue-share" href="#" title="Create a new local Git branch for this issue"><span class="new-git-branch"></span> <span class="trigger-label"></span></a></li>';

		newButton.innerHTML = s;

		buttonToolbar.insertBefore(newButton, buttonToolbar.childNodes[0]);

		$('#jira-new-branch-trigger').click( function(e) {
			e.preventDefault();
			/*call git through native messaging protocol
			https://developer.chrome.com/extensions/nativeMessaging
			*/ 
			return false; 
		} );

	});
});