function Events() {
	
	this.initialize = function() {
		$(document).bind({
			dragleave: function (e) {
				e.preventDefault();                   
			},
			drop: function (e) {
				e.preventDefault();                  
			},
			dragenter: function (e) {
				e.preventDefault();                   
			},
			dragover: function (e) {
				e.preventDefault();                  
			}
		});
	}
}