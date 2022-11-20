$(document).ready(function(){ 
    PopUpHide();
});
function PopUpShow(){
    $("#show").show();
}
function PopUpHide(){
    $("#show").hide();
}
function followLink(event, link)
{
	PopUpShow();
	var nameLink = link.innerHTML;
	window.history.pushState({title:nameLink}, null, "form");
	updateTitle(nameLink);
	event.preventDefault();
}

function updateTitle(title)
{
	var elm = document.getElementsByTagName('title')[0];
	elm.innerHTML = title;
}

window.addEventListener("popstate", function(e) {
	PopUpHide();									 
	updateTitle(e.state.title);
}, false );
