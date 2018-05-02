/**
 * 动画引擎
 * var CONFIG = {
    status: 'start', // 游戏开始默认为开始中
    level: 1, // 游戏默认等级
    totalLevel: 6, // 总共6关
    numPerLine: 6, // 游戏默认每行多少个怪兽
    canvasPadding: 30, // 默认画布的间隔
    bulletSize: 10, // 默认子弹长度
    bulletSpeed: 10, // 默认子弹的移动速度
    enemySpeed: 2, // 默认敌人移动距离
    enemySize: 50, // 默认敌人的尺寸
    enemyGap: 10,  // 默认敌人之间的间距
    enemyIcon: './img/enemy.png', // 怪兽的图像
    enemyBoomIcon: './img/boom.png', // 怪兽死亡的图像
    enemyDirection: 'right', // 默认敌人一开始往右移动
    planeSpeed: 5, // 默认飞机每一步移动的距离
    planeSize: {
      width: 60,
      height: 100
    }, // 默认飞机的尺寸,
    planeIcon: './img/plane.png',
  };

  var opt = {
	x : opt.x,
	y : opt.y,
	width : this.config.enemySize,
	height : this.config.enemySize,
	src : this.config.opt.enemyIcon,
	boomSrc : this.config.opt.enemyBoomIcon,
	status : 'alive',
	type : 'enemy'
	}
 */
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

(function() {
	function Engine(config) {
		this.config = CONFIG;
	}

	Engine.prototype.start = function() {
		// draw enemy
		var enemyArr = [];
		for (var i = 0; i < this.config.numPerLine; i++) {
			enemyArr.push(new Engine.Enemy({
				x : 30 + (i * this.config.enemySize) + (i * this.config.enemyGap),
				y : 30,
				width : this.config.enemySize,
				height : this.config.enemySize,
				src : this.config.enemyIcon,
				boomSrc : this.config.enemyBoomIcon,
				status : 'alive',
				type : 'enemy'
			}));
		}
		var enemyCtn = new Engine.EnemyCtn(enemyArr);
		enemyCtn.childrenArr.forEach(function(item, index) {
			var oPlane = item;
			oPlane.draw(context);
		});
		// draw plane
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