Test.Level0 = function(game){};
Test.Level0.prototype = {
	create: function() {

		this.game.stage.backgroundColor = '#9cd5f3';
		//this.game.input.mouse.capture = true;

		this.map = this.game.add.tilemap('level0');
		this.map.addTilesetImage('gamebackground', 'gameTiles');

		this.backgroundlayer = this.map.createLayer('Background');
		this.nodeslayer = this.map.createLayer('Nodes');

		nodesgroup = this.game.add.group();

        this.map.createFromObjects('Clicknodes', 81,'transparent',0, true, false, nodesgroup);
        
        nodesgroup.forEach(this.isclicked, this, true)
		//this.game.state.start('Congrats');
	},

	isclicked : function(item){
		item.inputEnabled = true;
		item.events.onInputDown.add(this.showconf, this);
	},	

	showconf : function(){
		this.game.add.text(39, 146, "Conf", {
                        font: "20px Arial",
                        fill: "#ffffff",
                        align: "center",
                        wordWrap: true,
                        wordWrapWidth :300
                        });
	},

	update : function(){ 

	}
};