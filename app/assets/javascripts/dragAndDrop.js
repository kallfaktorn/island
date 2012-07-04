
function dragAndDrop() {

	var events = new Events();
	events.initialize();

	var canvas = new Canvas();
	canvas.initialize();
	canvas.addEventListenerDropImage();
	canvas.addEventListenerMouseMove();
	canvas.addEventListenerMouseDown();
	canvas.addEventListenerMouseUp();
}