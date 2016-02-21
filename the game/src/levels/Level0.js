Test.Level0 = function(game){};
Test.Level0.prototype = {
	create: function() {

		this.game.stage.backgroundColor = '#9cd5f3';

		this.map = this.game.add.tilemap('level0');
		this.map.addTilesetImage('gamebackground', 'gameTiles');

		this.backgroundlayer = this.map.createLayer('Background');
		this.nodeslayer = this.map.createLayer('Nodes');

        this.map.createFromObjects('Clickabal', 81,'Node',0, true, false, 'transparent');
		//this.game.state.start('Congrats');
	}
};