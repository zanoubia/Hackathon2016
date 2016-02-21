Test.Level0 = function(game){
	var level = {};

};
Test.Level0.prototype = {
	create: function() {

		level = {};
		this.loadlevel() ;
		this.game.add.text(20  , 20, level.level , {
                        font: "40px Arial",
                        fill: "#ffffff",
                        align: "left"
                        });

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

	},

	loadlevel :function(){

		//var request = new XMLHttpRequest();
   		//request.open("GET","level0.json", false);
   		//request.overrideMimeType("application/json")
        //request.send(null)
   		//var level0 = JSON.parse(request.responseText);	
   		jlevel = '{"level":"0","game":{"nodes":[{"source":true,"destination":false,"hostname":{"value":" node-1","editable":false},"ifconfig":{"editable":true,"interfaces":[{"eth0":{"ipaddress":"172.16.0.10","mask":"255.255.0.0"}}]},"hostable":{"editable":false,"rules":[{"node-2":"10.0.0.2"}]},"firewall":{"editable":false,"rules":[]},"routing":{"editable":false,"rules":[]}},{"source":false,"destination":true,"hostname":{"value":" node-2","editable":false},"ifconfig":{"editable":false,"interfaces":[{"eth0":{"ipaddress":"10.0.0.2","mask":"255.255.255.252"}}]},"hostable":{"editable":false,"rules":[]},"firewall":{"editable":false,"rules":[]},"routing":{"editable":false,"rules":[]}}]},"hints":["check network configuration","make sure you give the right ip address with the right mask"],"solution":{"nodes":[{"source":true,"destination":false,"hostname":{"value":" node-1","editable":false},"ifconfig":{"editable":true,"interfaces":[{"eth0":{"ipaddress":"10.0.0.1","mask":"255.255.255.252"}}]},"hostable":{"editable":false,"rules":[{"node-2":"10.0.0.2"}]},"firewall":{"editable":false,"rules":[]},"routing":{"editable":false,"rules":[]}},{"source":false,"destination":true,"hostname":{"value":" node-2","editable":false},"ifconfig":{"editable":false,"interfaces":[{"eth0":{"ipaddress":"10.0.0.2","mask":"255.255.255.253"}}]},"hostable":{"editable":true,"rules":[]},"firewall":{"editable":false,"rules":[]},"routing":{"editable":false,"rules":[]}}]}}' ;
		level = JSON.parse(jlevel);
		//this.game.add.text(20  , 20, level0.level , {
        //                font: "40px Arial",
        //                fill: "#ffffff",
        //                align: "left"
        //                });
	}

};