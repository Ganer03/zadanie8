function followLink(event, link)
{
	var nameLink = link.innerHTML;
	uploadContent(link.href);
	window.history.pushState({title:nameLink}, null, "form");
	updateTitle(nameLink);
	event.preventDefault();
}

function updateTitle(title)
{
	var elm = document.getElementsByTagName('title')[0];
	elm.innerHTML = title;
}

function uploadContent(link)
{
	//тут реализуем загрузку части страницы с помощью AJAX
}

window.addEventListener("popstate", function(e) {
	uploadContent(e.state.href);									 
	updateTitle(e.state.title);
}, false );
