function MousePos() {
    this.x = 0;
    this.y = 0;

    this.update = function(e) {
        if(e.offsetX) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
        else if(e.layerX) {
            this.x = e.layerX;
            this.y = e.layerY;
        }

        var tmp = getAbsolutePosition(canvas);
        this.x = this.x - tmp.x;
        this.y = this.y - tmp.y;
    }
	
	function getAbsolutePosition(element) {
		var r = { x: element.offsetLeft, y: element.offsetTop };
		if (element.offsetParent) {
			var tmp = getAbsolutePosition(element.offsetParent);
			r.x += tmp.x;
			r.y += tmp.y;
		}
		return r;
	}
}