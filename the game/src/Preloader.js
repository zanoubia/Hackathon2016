Test.Preloader = function(game) {};
Test.Preloader.prototype = {
	preload: function() {
		this.game.stage.backgroundColor = '#9cd5f3';
		background = this.game.add.sprite(0,0,'preloadbackground');
		this.preloadBg = this.add.sprite(this.game.world.centerX - 500 , this.game.world.centerY , 'preloaderBarCont');
		this.preloadBar = this.add.sprite(this.game.world.centerX - 500 , this.game.world.centerY, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('gameTiles', 'assets/images/gamebackground.png');
		this.load.tilemap('level0', 'assets/tilemaps/level0.json', null, Phaser.Tilemap.TILED_JSON);


		this.load.image('transparent','assets/images/transparent.png')
		this.load.image('confpanel','assets/images/.confpanel656x656.png')
		
		//this.load.image('answerback', 'assets/images/answerback.png');
		

		//this.load.spritesheet('aboutmenu', 'assets/images/aboutmenu754x52.png',754,26,2,0,0);
		},
	create: function() {
		//this.game.state.start('MainMenu');
		this.game.state.start('Level0');
	}
};




