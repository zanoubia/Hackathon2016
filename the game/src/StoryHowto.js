Test.StoryHowto = function(game) {};
Test.StoryHowto.prototype = {
  create: function() {
    this.game.stage.backgroundColor = '#9cd5f3';
    this.game.add.text(39, 146, "StoryHowto", {
                        font: "20px Arial",
                        fill: "#ffffff",
                        align: "center",
                        wordWrap: true,
                        wordWrapWidth :300
                        });
    this.game.input.maxPointers = 1; 
  }
};