var load_state = {  
    preload: function() { 
        this.game.stage.backgroundColor = '#46caff';
        this.game.load.image('bird', 'assets/bird.png');  
        this.game.load.image('pipe', 'assets/pipe.png');  
        this.game.load.audio('jump', 'assets/jump.wav');

   // Load the highscore from localstorage
    if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    var local_highscore = localStorage.getItem("highscore");
        //only set the score if there is actually a value in localstorage
        if(local_highscore) {
            highscore = local_highscore;
        }
      } 
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};