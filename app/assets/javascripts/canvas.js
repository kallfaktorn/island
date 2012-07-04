	
function Canvas() {

	this.canvas;
	this.ctx;
	this.images = new Array();
	this.nrOfImages = 0;
	this.mousePos = new MousePos();
	
	this.selectedImage = null;
	this.offsetX = null;
	this.offsetY = null;
	this.latestSelectedImageLayer = 0;
	
	var self = this;

	this.initialize = function() {

		canvas = document.getElementById("canvas");
		ctx = canvas.getContext('2d');	 
	}
	
	this.addEventListenerMouseDown = function() {
		canvas.addEventListener('mousedown', function (e) {
		
			self.selectedImage = selectImage(self.mousePos);
			
			if(self.selectedImage != null) {
				
				self.latestSelectedImageLayer++;
				self.selectedImage.layer = self.latestSelectedImageLayer;
				self.offsetX = self.mousePos.x - self.selectedImage.x;
				self.offsetY = self.mousePos.y - self.selectedImage.y;
			}
			
		}, false);
	}
	
	this.addEventListenerMouseUp = function() {
		canvas.addEventListener('mouseup', function (e) {
			
			self.selectedImage = null;
			
			self.offsetX = null;
			self.offsetY = null;
			
		}, false);
	}

	this.addEventListenerMouseMove = function() {
		canvas.addEventListener('mousemove', function (e) {
			self.mousePos.update(e);
			
			if(self.selectedImage != null) {
			
				var position = new Position(self.mousePos.x - self.offsetX, self.mousePos.y - self.offsetY);
				self.selectedImage.setPosition(position);
				
				redraw();
			}
		
		}, false);
	}

	this.addEventListenerDropImage = function() {

		canvas.addEventListener("drop", function (e) {
			e.preventDefault();
			
			alert("hla");
			
			var files = e.dataTransfer.files;	
			
			if (typeof files !== "undefined") {
			
				for (var i=0, l=files.length; i<l; i++) {
					
					file = files[i];
					self.readAsDataURL(file, e);
				}
			} else {
			
				area.html(nosupport);
			}
		}, false);
	}

	this.readAsDataURL = function(file, event) {

		reader = new FileReader;

		reader.onload = function(event) {
		
			alert("gala");
			
			var img = new Image;
			
			img.onload = function() {
			
				
				self.latestSelectedImageLayer++;
				var image = new ImageOnCanvas(self.mousePos.x, self.mousePos.y, img, self.latestSelectedImageLayer);
				self.images[self.nrOfImages] = image;
				self.nrOfImages++;
				
				redraw();
			};

			img.src = event.target.result;
		};
		
		reader.readAsDataURL(file);
	}
	
	function redraw() {
		
		// Refresh the canvas
		clear();
		
		//Sort the images before drawing
		sortImagesByLayer();
		
		//Draw all images again
		//TODO: draw images in correct order
		for(i = 0; i < self.nrOfImages; i++) {
			
			var image = self.images[i];
			drawImage(image);
		}
	
	}
	
	function drawImage(image) {
		ctx.drawImage(image.buffer, image.x, image.y, image.w, image.h);
	}
	
	function clear() {
		canvas.width = canvas.width;
	}
	
	function selectImage(position) {
		
		for(i = self.nrOfImages - 1; i >= 0; i--) {
			if(self.images[i].intersects(self.mousePos)) {
				return self.images[i];
			}
		}
	}
	
	function sortImagesByLayer() {
		self.images.sort(function(image1,image2){return image1.layer - image2.layer});
	}
}