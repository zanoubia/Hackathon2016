Test.MainMenu = function(game) {};
Test.MainMenu.prototype = {
  create: function() {
    
    playbutton = this.game.add.button(200   ,this.game.world.centerY - 100,"play",this.play);
    rulesbutton = this.game.add.button(200+256+10  ,this.game.world.centerY -100,"rules",this.rules);
    aboutbutton = this.game.add.button(200+256+10+256+10 ,this.game.world.centerY -100,"about",this.about);



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