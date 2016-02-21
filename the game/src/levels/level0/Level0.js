Test.Level0 = function(game){
	var levelconf = {};
	var playerconf = {};
	var selectednode = 'none' ;
	var conftexts = {};

};
Test.Level0.prototype = {
	create: function() {

		levelconf = {};
		playerconf = {};
		selectednode = "";
		conftexts = {'hoststext': ' ', 'ifconfigtext': ' ', 'hostname': ' '}

		this.loadlevel() ;
		


		this.game.stage.backgroundColor = '#9cd5f3';
		//this.game.input.mouse.capture = true;
		this.game.add.button(64 ,64,"help",this.help);
		this.game.add.button(64 ,128,"edit",this.edit);
		this.game.add.button(64,192,"reset",this.reset);

		this.map = this.game.add.tilemap('level0');
		this.map.addTilesetImage('gamebackground', 'gameTiles');

		this.backgroundlayer = this.map.createLayer('Background');
		this.nodeslayer = this.map.createLayer('Nodes');

		node1group = this.game.add.group();
		node2group = this.game.add.group();

        this.map.createFromObjects('Clicknode1', 81,'transparent',0, true, false, node1group);
        this.map.createFromObjects('Clicknode2', 81,'transparent',0, true, false, node2group);

        
		//this.game.state.start('Congrats');

		confpanel = this.game.add.group();
		confpanelbackground = this.game.add.sprite(this.game.world.centerX * 1/2 ,0,"confpanel");
		confpanel.add(confpanelbackground);
		exiticon = this.game.add.button(this.game.world.centerX * 1/2 + 600 ,0,"exit",this.closepanel);
		confpanel.add(exiticon);
		confpanel.visible = false ;

		helppanel = this.game.add.group();
		helppanelbackground = this.game.add.sprite(this.game.world.centerX * 1/2 ,0,"helppanel");
		helppanel.add(helppanelbackground);
		exitpanel = this.game.add.button(this.game.world.centerX * 1/2 + 600 ,0,"exit",this.closehelppanel);
		helppanel.add(exitpanel);
		helppanel.visible = false ;


		arrow = this.game.add.sprite(350 ,350,"arrow");


	},

	help : function(){
		hinttext1 = this.game.add.text(this.game.world.centerX * 1/2 +10, 50 , levelconf.hints[0] , {
                        font: "20px Arial",
                        fill: "#ffffff",
                        align: "left",
                        wordWrapWidth : helppanelbackground.width
                        });
		hinttext2 = this.game.add.text(this.game.world.centerX * 1/2 +10, 100 , levelconf.hints[1] , {
                        font: "20px Arial",
                        fill: "#ffffff",
                        align: "left",
                        wordWrapWidth : helppanelbackground.width
                        });
		helppanel.add(hinttext1);
		helppanel.add(hinttext2);
		helppanel.visible = true ;


	},
	closehelppanel : function() {
		helppanel.visible = false ;
	},

	edit : function(){

	},
	reset : function(){

	},

	closepanel : function(){
		confpanel.visible = false ;
		selectednode = 'none';
		conftexts.hoststext.destroy();
		conftexts.ifconfigtext.destroy();
		conftexts.hostname.destroy();
	},

	isclicked : function(item, itemname){
		item.inputEnabled = true;
		item.events.onInputDown.add(this.setselectednode, {'itemname':itemname});
		item.input.useHandCursor = true;
	},	

	setselectednode : function(){
		selectednode = this.itemname ;
		confpanel.visible = true ;
	},

	showconf : function(){
		//nodename = this.game.add.text(this.game.world.centerX * 1/2 , 50 , selectednode , {
        //                font: "40px Arial",
        //                fill: "#ffffff",
        //                align: "left",
        //                wordWrapWidth : confpanelbackground.width
        //                });
		if (selectednode != "null"){
		var i = 0 ;
		if (selectednode == 'node1') {
			i = 0 ;
		} else if (selectednode == 'node2'){
			i= 1 ;
		}
//////// hostname
		conftexts.hostname = this.game.add.text(this.game.world.centerX * 1/2 +10, 50 , "hostname      " , {
                        font: "20px Arial",
                        fill: "#ffffff",
                        align: "left",
                        wordWrapWidth : confpanelbackground.width
                        });
		confpanel.add(conftexts.hostname);
		conftexts.hostname.setText("hostname      " + levelconf.game.nodes[i].hostname.value);
/////// ifconfig
		ifconfig = this.game.add.text(this.game.world.centerX * 1/2 +10, 80 , "ifconfig      " , {
                        font: "20px Arial",
                        fill: "#ffffff",
                        align: "left",
                        wordWrapWidth : confpanelbackground.width
                        });
		confpanel.add(ifconfig);
		var style = { wordWrapWidth : confpanelbackground.width, font: "16px Courier", fill: "#fff", tabs: [ 164, 120, 80 ] };
		var headings = ['interface', 'ipaddress', 'mask'];
		ifconfigheadings = this.game.add.text(this.game.world.centerX * 1/2 +10, 100, '', style);
        ifconfigheadings.parseList(headings);
		var interfaces =[
			["eth0" , levelconf.game.nodes[i].ifconfig.interfaces[0].eth0.ipaddress ,levelconf.game.nodes[i].ifconfig.interfaces[0].eth0.mask]
		];
		conftexts.ifconfigtext = this.game.add.text(this.game.world.centerX * 1/2 +10 , 130, '', style);
   		conftexts.ifconfigtext.parseList(interfaces);
		confpanel.add(ifconfigheadings);
		confpanel.add(conftexts.ifconfigtext);

///////// hosts table
		hostable= this.game.add.text(this.game.world.centerX * 1/2 +10, 150 , "hosts table      " , {
                        font: "20px Arial",
                        fill: "#ffffff",
                        align: "left",
                        wordWrapWidth : confpanelbackground.width
                        });

		confpanel.add(hostable);

		hheadings = ['Host', 'ipaddress'];
		hostsheadings = this.game.add.text(this.game.world.centerX * 1/2 +10, 180, '', style);
		confpanel.add(hostsheadings);
        hostsheadings.parseList(hheadings);

        if (i==0) {
        	hostrules = [
        		["node-2" , "10.0.0.2" ]
        	] ;
        } else if (i==1){
        	hostrules = [
        		["empty" , " " ]
        	] ;
        }
        conftexts.hoststext = this.game.add.text(this.game.world.centerX * 1/2 +10 , 210, '', style);
   		conftexts.hoststext.parseList(hostrules);
		confpanel.add(conftexts.hoststext);

		

//////////// routing table
		routingtable= this.game.add.text(this.game.world.centerX * 1/2 +10, 240 , "routing table      " , {
                        font: "20px Arial",
                        fill: "#ffffff",
                        align: "left",
                        wordWrapWidth : confpanelbackground.width
                        });
		confpanel.add(routingtable);		

	}
		//levelconf
	},

	update : function(){
		node1group.forEach(this.isclicked, this, true,'node1')
        node2group.forEach(this.isclicked, this, true,'node2') 
		if (selectednode != 'none') {
			this.showconf();
		}
	},

	loadlevel :function(){

		//var request = new XMLHttpRequest();
   		//request.open("GET","level0.json", false);
   		//request.overrideMimeType("application/json")
        //request.send(null)
   		//var level0 = JSON.parse(request.responseText);	
   		jlevel = '{"level":"0","game":{"nodes":[{"source":true,"destination":false,"hostname":{"value":" node-1","editable":false},"ifconfig":{"editable":true,"interfaces":[{"eth0":{"ipaddress":"172.16.0.10","mask":"255.255.0.0"}}]},"hostable":{"editable":false,"rules":[{"node-2":"10.0.0.2"}]},"firewall":{"editable":false,"rules":[]},"routing":{"editable":false,"rules":[]}},{"source":false,"destination":true,"hostname":{"value":" node-2","editable":false},"ifconfig":{"editable":false,"interfaces":[{"eth0":{"ipaddress":"10.0.0.2","mask":"255.255.255.252"}}]},"hostable":{"editable":false,"rules":[]},"firewall":{"editable":false,"rules":[]},"routing":{"editable":false,"rules":[]}}]},"hints":["check network configuration","make sure you give the right ip address with the right mask"],"solution":{"nodes":[{"source":true,"destination":false,"hostname":{"value":" node-1","editable":false},"ifconfig":{"editable":true,"interfaces":[{"eth0":{"ipaddress":"10.0.0.1","mask":"255.255.255.252"}}]},"hostable":{"editable":false,"rules":[{"node-2":"10.0.0.2"}]},"firewall":{"editable":false,"rules":[]},"routing":{"editable":false,"rules":[]}},{"source":false,"destination":true,"hostname":{"value":" node-2","editable":false},"ifconfig":{"editable":false,"interfaces":[{"eth0":{"ipaddress":"10.0.0.2","mask":"255.255.255.253"}}]},"hostable":{"editable":true,"rules":[]},"firewall":{"editable":false,"rules":[]},"routing":{"editable":false,"rules":[]}}]}}' ;
		levelconf = JSON.parse(jlevel);
		//this.game.add.text(20  , 20, level0.level , {
        //                font: "40px Arial",
        //                fill: "#ffffff",
        //                align: "left"
        //                });
	}

};