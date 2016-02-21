Test.MainMenu = function(game) {};
Test.MainMenu.prototype = {
  create: function() {
    
    playbutton = this.game.add.button(100 + 215   ,this.game.world.centerY - 90,"play",this.play);
    rulesbutton = this.game.add.button(100 + 215+200+10  ,this.game.world.centerY -90,"rules",this.rules);
    aboutbutton = this.game.add.button(100 + 215+200+10+200+10 ,this.game.world.centerY -90,"about",this.about);

    jumpers = this.game.add.sprite(100 + (1028-600)/2,0,"jumpers");


    this.game.input.maxPointers = 1; 
  },

  play : function() {
    this.game.state.start('Level0');
  },

  rules : function() {
    this.game.state.start('StoryHowto');
  },

  about : function() {
    this.game.state.start('About');

  }


};