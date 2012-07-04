
function ImageOnCanvas(x, y, buffer, layer) {
	
	this.x = x;
	this.y = y;
	this.w = 50;
	this.h = 50;
	this.buffer = buffer;
	
	if(this.layer == null) {
		this.layer = 0;
	}
	
	this.layer = layer;
	
	var self = this;
	
	this.setPosition = function(position) {
		self.x = position.x;
		self.y = position.y;
	}
	
	this.intersects = function(position) {
	
		if(position.x < self.x) return false;
		if(position.x > (self.x + self.w)) return false;
		if(position.y < self.y) return false;
		if(position.y > (self.y + self.h)) return false;
		
		return true;
	}
}