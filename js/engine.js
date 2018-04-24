/**
 * 动画引擎
 */
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

(function() {
	function Engine(config) {
		this.config = CONFIG;
	}

	Engine.prototype.start = function() {
		var plane = new Plane({
			x : 30,
			y : 470,
			width : this.config.planeSize.width,
			height : this.config.planeSize.height,
			src : this.config.planeIcon,
			type : 'plane'
		});
		plane.draw(context);
	}

	window.Engine = Engine;
})(window);