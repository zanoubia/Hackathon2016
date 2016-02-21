Test.StoryHowto = function(game) {};
Test.StoryHowto.prototype = {
  create: function() {

    rule0 ='You are a sysadmin sitting peacefully in your desk, maintaining several linux servers. Suddenly, a call came telling you that some network requests are not delivered correctly ! You have now to get up and check what is wrong :s :s \n';

    rule1 = 'Each level handels a request with different servers configurations for each .\n ';
rule2 ='You can show a server configuration by clicking on it.\n';
rule3 ='For each server there are some configurations that you can edit and others which you cannot (the red ones) . Find the suitable configuration for each server. you can edit a server by selecting then click on edit button\n';
rule4 = 'If you need some help, you can hit the help button to show you some hints.\n '
rule5 = 'If you messed up everything you can always click on the reset button to comeback to the level initial state.\n'

rule6 = '\nOh what a tough life, sysadmins !!\n'

    this.game.stage.backgroundColor = '#9cd5f3';
    this.game.add.text(this.game.world.centerX -525, 30, rule0 + rule1 + rule2 +rule3+rule4+rule5+rule6, {
                        font: "25px Arial",
                        fill: "#00000",
                        align: "center",
                        wordWrap: true,
                        wordWrapWidth :1050
                        });


    backbutton = this.game.add.button(this.game.world.centerX - 128 ,this.game.world.centerY + 100,"back",this.back);

    this.game.input.maxPointers = 1; 
  },

  back  :  function(){
    this.game.state.start('MainMenu');
  }
};