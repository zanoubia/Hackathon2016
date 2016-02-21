Test.About = function(game) {};
Test.About.prototype = {
  create: function() {
    this.game.stage.backgroundColor = '#9cd5f3';
    this.game.add.text(this.game.world.centerX - 128, 146, "NextHop is a game conceived and developed by team YopZ as part of hack.summit() Virtual Hackathon.", {
                        font: "20px Arial",
                        fill: "#000000",
                        align: "center",
                        wordWrap: true,
                        wordWrapWidth :300
                        });

    backbutton = this.game.add.button(this.game.world.centerX - 128 ,this.game.world.centerY -100,"back",this.back);

    this.game.input.maxPointers = 1; 
  },
  back  :  function(){
    this.game.state.start('MainMenu');
  }

};