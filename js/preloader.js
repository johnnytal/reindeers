var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
    	progressTxt = this.progress = this.game.add.text(0, this.game.world.centerY - 30, '0%',{
             font: '32px', fill: 'darkgrey', fontWeight: 'lighter', align: 'center'
        });
        progressTxt.x = this.game.world.centerX - progressTxt.width / 2;
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
  
        loadingTxt = this.add.text(0,  this.game.world.centerY - 150, "Loading...", {
            font: '24px', fill: 'grey', fontWeight: 'lighter', align: 'center'
        });
        loadingTxt.x = this.game.world.centerX - loadingTxt.width / 2;
        
        this.game.load.image("bg", "assets/images/bg.png");
        
        this.game.load.spritesheet("brown", "assets/images/brown_idle.png", 1482/5, 1035/4);
        this.game.load.spritesheet("brown_sing", "assets/images/brown_sing.png", 1482/5, 776/3);
        
        this.game.load.spritesheet("rudolf", "assets/images/rudolf_idle.png", 1112/5, 777/4);
        this.game.load.spritesheet("rudolf_sing", "assets/images/rudolf_sing.png", 1112/5, 582/3);
        
        this.game.load.spritesheet("grey", "assets/images/grey_idle.png", 1482/5, 1035/4);
        this.game.load.spritesheet("grey_sing", "assets/images/grey_sing.png", 1482/5, 776/3);

        this.game.load.spritesheet("white", "assets/images/white_idle.png", 1334/5, 932/4);
        this.game.load.spritesheet("white_sing", "assets/images/white_sing.png", 1334/5, 699/3);
      
        this.game.load.spritesheet("brownWhite", "assets/images/brown_white_idle.png", 1482/5, 1035/4);
        this.game.load.spritesheet("brownWhite_sing", "assets/images/brown_white_sing.png", 1482/5, 776/3);
        
        this.game.load.spritesheet("blue", "assets/images/blue_idle.png", 1482/5, 1035/4);
        this.game.load.spritesheet("blue_sing", "assets/images/blue_sing.png", 1482/5, 776/3);
        
        this.game.load.spritesheet("red", "assets/images/red_eat.png", 1482/5, 1035/4);
        this.game.load.spritesheet("red_sing", "assets/images/red_sing.png", 1482/5, 776/3);
        
        this.game.load.spritesheet("yellow", "assets/images/yellow_eat.png", 1334/5, 932/4);
        this.game.load.spritesheet("yellow_sing", "assets/images/yellow_sing.png", 1334/5, 699/3);
        
        this.game.load.spritesheet("pink", "assets/images/pink_eat.png", 1482/5, 1035/4);
        this.game.load.spritesheet("pink_sing", "assets/images/pink_sing.png", 1482/5, 776/3);
        
        this.game.load.spritesheet('snowflakes', 'assets/images/snowflakes.png', 17, 17);
    	this.game.load.spritesheet('snowflakes_large', 'assets/images/snowflakes_large.png', 64, 64);

        this.game.load.audio('aeiou1', 'assets/audio/aeiou1.ogg');
        this.game.load.audio('aeiou2', 'assets/audio/aeiou2.ogg');
        this.game.load.audio('aeiou3', 'assets/audio/aeiou3.ogg');
        this.game.load.audio('aeiou4', 'assets/audio/aeiou4.ogg');
        this.game.load.audio('aeiou5', 'assets/audio/aeiou5.ogg');
        
        this.game.load.audio('bd1', 'assets/audio/bd1.ogg');
        this.game.load.audio('bd2', 'assets/audio/bd2.ogg');
        
        this.game.load.audio('divine', 'assets/audio/divine.ogg');
        
        this.game.load.audio('hh', 'assets/audio/hh.ogg');
        
        this.game.load.audio('ohah1', 'assets/audio/ohah1.ogg');
        this.game.load.audio('ohah3', 'assets/audio/ohah3.ogg');
        
        this.game.load.audio('perc', 'assets/audio/perc.ogg');
        
        this.game.load.audio('pompedom1', 'assets/audio/pompedom1.ogg');
        this.game.load.audio('pompedom2', 'assets/audio/pompedom2.ogg');
        this.game.load.audio('pompedom3', 'assets/audio/pompedom3.ogg');
        
        this.game.load.audio('terta1', 'assets/audio/terta1.ogg');
        this.game.load.audio('terta2', 'assets/audio/terta2.ogg');
        
        this.game.load.audio('yodel1', 'assets/audio/yodel1.ogg');
        this.game.load.audio('yodel2', 'assets/audio/yodel2.ogg');
        this.game.load.audio('yodel3', 'assets/audio/yodel3.ogg');
    },
    
    create: function(){
        this.game.state.start("Game");  
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};