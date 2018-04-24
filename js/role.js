/**
  * 角色
  * @opt {Object}
  */
function Role(opt) {
	this.x = opt.x;
	this.y = opt.y;
	this.width = opt.width;
	this.height = opt.height;
	this.src = opt.src;
	this.type = opt.type;
}
Role.prototype.draw = function (context) {
	var _self = this;
	var image = new Image();
	image.src = _self.src;
	image.onload = function() {
		context.drawImage(image, _self.x, _self.y, _self.width, _self.height);
	};
	image.onerror = function() {
		console.log(_self.type + '加载图片失败');
	};
};

/**
  * 飞机
  * @opt {Object}
  */
function Plane(opt) {
	Role.call(this, opt);
}
Plane.prototype = Object.create(Role.prototype);
Plane.prototype.constructor = Plane;

/**
  * 敌人
  * @opt {Object}
  */
function Enemy(opt) {
	Role.call(this, opt);
}
Enemy.prototype = Object.create(Role.prototype);
Enemy.prototype.constructor = Enemy;

/**
  * 敌人容器
  */
function EnemyCtn(arr) {
	this.boundaryLeft = arr[0].x;
	this.boundaryLeft = arr[length - 1].x + arr[length - 1].width;
}


/**
  * 子弹
  * @opt {Object}
  */
function Bullet(opt) {
	Role.call(this, opt);
}
Bullet.prototype = Object.create(Role.prototype);
Bullet.prototype.constructor = Bullet;

/**
  * 引擎静态方法
  */
var Engine = window.Engine;
Engine.Plane = Plane;
Engine.Enemy = Enemy;
Engine.Bullet = Bullet;