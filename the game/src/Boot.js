var Test = {} ;

Test.Boot = function(game) {};
Test.Boot.prototype = {
  preload: function() {
    this.load.image('preloadbackground', 'assets/images/bootbackground1280x720.jpg');
    this.load.image('preloaderBar', 'assets/images/loadingbar1000*30.png');
    this.load.image('preloaderBarCont', 'assets/images/loadingcontainer1000x30.png');
  },
  create: function() {
    
    console.log("Boot");
    this.game.input.maxPointers = 1;
    //this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
    this.game.stage.scale.pageAlignHorizontally = true;
    this.game.stage.scale.pageAlignVertically = true;
    //this.game.stage.scale.setScreenSize(true);
    this.game.state.start('Preloader');
  }
};