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
function back(){
	PopUpHide();
	window.history.back();
	updateTitle(e.state.title);
}


$(".ajaxForm").submit(function(e){
e.preventDefault();
var href = $(this).attr("action");
$.ajax({
    type: "POST",
    dataType: "json",
    url: href,
    data: $(this).serialize(),
    success: function(response){
	if( response.status == "success"){
	    alert("We received your submission, thank you!");
	}else{
	    alert("An error occured: " + response.message);
	}
    }
});
});

window.addEventListener("popstate", function(e) {
	PopUpHide();									 
	updateTitle(e.state.title);
}, false );
// ($('#name').val().length === 0 || !$('#name').val().trim()) && $('#textarea').val().length != 0 && input[type="checkbox"].is(':checked') &&
