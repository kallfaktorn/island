function include(filename)
{
	var head = $('head'); //document.getElementsByTagName('head').item(0); //$('head'); //document.getElementsByTagName('head');
	var js = document.createElement('script');
	js.setAttribute('language', 'javascript');
	js.setAttribute('type', 'text/javascript');
	js.setAttribute('src', filename);
	head.appendChild(js)
}