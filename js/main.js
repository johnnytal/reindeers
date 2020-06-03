var gameMain = function(game){
 	max = 0;
 	var front_emitter, mid_emitter, back_emitter;
 	update_interval = 4 * 60;
 	i = 0;
};

gameMain.prototype = {
    create: function(){  
    	loadAudio();
    	
    	bg = game.add.image(0, 0, 'bg');
    	
    	deers = game.add.group();
    	
    	initAd();
    	
    	grey = deers.create(250, 220, 'grey');
     	brown = deers.create(287, 65, 'brown');
     	pink = deers.create(280, 340, 'pink');
     	
     	white = deers.create(480, 450, 'white');
     	brownWhite = deers.create(30, 370, 'brownWhite');
     	red = deers.create(810, 390, 'red');
     	
     	blue = deers.create(350, 645, 'blue');
     	yellow = deers.create(250, 475, 'yellow');
     	rudolf = deers.create(800, 490, 'rudolf');
     	
     	game.input.addPointer();
     	game.input.addPointer();
     	game.input.addPointer();
     	game.input.addPointer();
     	
     	game.input.addPointer();
     	game.input.addPointer();
     	game.input.addPointer();
     	game.input.addPointer();
     	
     	brown.scale.set(0.5, 0.5);
     	grey.scale.set(0.65, 0.65);
     	grey.angle = -6;
     	red.scale.set(0.65, 0.65);
     	brownWhite.scale.set(0.65, 0.65);
     	brownWhite.angle = 3;
     	pink.scale.set(0.65, 0.65);
     	pink.angle = 6;
     	blue.scale.set(0.85, 0.85);
     	
     	blue.scale.x *= -1;
     	red.scale.x *= -1;
     	grey.scale.x *= -1;
     	
     	deers.forEach(function(item) {
     		item.inputEnabled = true;
     	});
     	
     	createAnimations();
    	
    	brown.events.onInputDown.add(function(){
    		aeiouArray[game.rnd.integerInRange(0, aeiouArray.length-1)].play();
    		changeTexture_brown();
    	}, this);   	
    	brown.events.onInputUp.add(function(){
    		for (n = 0; n < aeiouArray.length; n++){
    			aeiouArray[n].pause();
    		}
    		changeTexture_brown();
    	}, this);

    	rudolf.events.onInputDown.add(function(){
    		divine.play();
    		changeTexture_rudolf();
    	}, this);
    	rudolf.events.onInputUp.add(function(){
    		divine.pause();
    		changeTexture_rudolf();
    	}, this);

    	grey.events.onInputDown.add(function(){
 			yodelArray[game.rnd.integerInRange(0, yodelArray.length-1)].play();
    		changeTexture_grey();
    	}, this);
    	grey.events.onInputUp.add(function(){
    		for (n = 0; n < yodelArray.length; n++){
    			yodelArray[n].pause();
    		}
    		changeTexture_grey();
    	}, this);
    	
    	yellow.events.onInputDown.add(function(){
 			pompedomArray[game.rnd.integerInRange(0, pompedomArray.length-1)].play();
    		changeTexture_yellow();
    	}, this);
    	yellow.events.onInputUp.add(function(){
    		for (n = 0; n < pompedomArray.length; n++){
    			pompedomArray[n].pause();
    		}
    		changeTexture_yellow();
    	}, this);
    	
    	pink.events.onInputDown.add(function(){
 			tertaArray[game.rnd.integerInRange(0, tertaArray.length-1)].play();
    		changeTexture_pink();
    	}, this);
    	pink.events.onInputUp.add(function(){
    		for (n = 0; n < tertaArray.length; n++){
    			tertaArray[n].pause();
    		}
    		changeTexture_pink();
    	}, this);
    	
    	blue.events.onInputDown.add(function(){
 			ohahArray[game.rnd.integerInRange(0, ohahArray.length-1)].play();
    		changeTexture_blue();
    	}, this);
    	blue.events.onInputUp.add(function(){
    		for (n = 0; n < ohahArray.length; n++){
    			ohahArray[n].pause();
    		}
    		changeTexture_blue();
    	}, this);
    	
    	red.events.onInputDown.add(function(){
 			bdArray[game.rnd.integerInRange(0, bdArray.length-1)].play();
    		changeTexture_red();
    	}, this);
    	red.events.onInputUp.add(function(){
    		for (n = 0; n < bdArray.length; n++){
    			bdArray[n].pause();
    		}
    		changeTexture_red();
    	}, this);
    	
    	white.events.onInputDown.add(function(){
 			perc.play();
    		changeTexture_white();
    	}, this);
    	white.events.onInputUp.add(function(){
			perc.pause();
    		changeTexture_white();
    	}, this);
    	
    	brownWhite.events.onInputDown.add(function(){
 			hh.play();
    		changeTexture_brownWhite();
    	}, this);
    	brownWhite.events.onInputUp.add(function(){
    		hh.pause();
    		changeTexture_brownWhite();
    	}, this);

    	setTimeout(function(){
            try{
                StatusBar.hide;
            } catch(e){}    
        }, 100);  
        
    	snow();
    },
    update: function(){ 
	    i++;
	
	    if (i === update_interval){
	        changeWindDirection();
	        update_interval = Math.floor(Math.random() * 20) * 60; // 0 - 20sec @ 60fps
	        i = 0;
	    }
	}
};



function changeTexture_brown(){
    if (brown.key === 'brown'){
        brown.loadTexture('brown_sing', 0, false);
		brown.animations.play('sing', 30, true);
    }
    else if (brown.key === 'brown_sing'){
        brown.loadTexture('brown', 0, false);
        brown.animations.play('walk', 30, true);
    }
}

function changeTexture_rudolf(){
    if (rudolf.key === 'rudolf'){
        rudolf.loadTexture('rudolf_sing', 0, false);
		rudolf.animations.play('sing_r', 30, true);
    }
    else if (rudolf.key === 'rudolf_sing'){
        rudolf.loadTexture('rudolf', 0, false);
        rudolf.animations.play('walk', 30, true);
    }
}

function changeTexture_grey(){
    if (grey.key === 'grey'){
        grey.loadTexture('grey_sing', 0, false);
		grey.animations.play('sing_g', 30, true);
    }
    else if (grey.key === 'grey_sing'){
        grey.loadTexture('grey', 0, false);
        grey.animations.play('walk', 30, true);
    }
}

function changeTexture_yellow(){
    if (yellow.key === 'yellow'){
        yellow.loadTexture('yellow_sing', 0, false);
		yellow.animations.play('sing_y', 30, true);
    }
    else if (yellow.key === 'yellow_sing'){
        yellow.loadTexture('yellow', 0, false);
        yellow.animations.play('walk', 30, true);
    }
}

function changeTexture_pink(){
    if (pink.key === 'pink'){
        pink.loadTexture('pink_sing', 0, false);
		pink.animations.play('sing', 30, true);
    }
    else if (pink.key === 'pink_sing'){
        pink.loadTexture('pink', 0, false);
        pink.animations.play('walk', 30, true);
    }
}

function changeTexture_blue(){
    if (blue.key === 'blue'){
        blue.loadTexture('blue_sing', 0, false);
		blue.animations.play('sing', 30, true);
    }
    else if (blue.key === 'blue_sing'){
        blue.loadTexture('blue', 0, false);
        blue.animations.play('walk', 30, true);
    }	
}

function changeTexture_red(){
    if (red.key === 'red'){
        red.loadTexture('red_sing', 0, false);
		red.animations.play('sing', 30, true);
    }
    else if (red.key === 'red_sing'){
        red.loadTexture('red', 0, false);
        red.animations.play('walk', 30, true);
    }
}

function changeTexture_white(){
    if (white.key === 'white'){
        white.loadTexture('white_sing', 0, false);
		white.animations.play('sing', 30, true);
    }
    else if (white.key === 'white_sing'){
        white.loadTexture('white', 0, false);
        white.animations.play('walk_w', 30, true);
    }
}

function changeTexture_brownWhite(){
    if (brownWhite.key === 'brownWhite'){
        brownWhite.loadTexture('brownWhite_sing', 0, false);
		brownWhite.animations.play('sing', 30, true);
    }
    else if (brownWhite.key === 'brownWhite_sing'){
        brownWhite.loadTexture('brownWhite', 0, false);
        brownWhite.animations.play('walk_bw', 30, true);
    }	
}

function createAnimations(){   	
    walk = brown.animations.add('walk');
	sing = brown.animations.add('sing', [9, 10, 11]);
	brown.animations.play('walk', 20, true);

	walk_r = rudolf.animations.add('walk');
	sing_r = rudolf.animations.add('sing');
	rudolf.animations.play('walk', 20, true);

	walk_g = grey.animations.add('walk');
	sing_g = grey.animations.add('sing');
	grey.animations.play('walk', 55, true);
	
	walk_y = yellow.animations.add('walk');
	sing_y = yellow.animations.add('sing');
	yellow.animations.play('walk', 35, true);
    
    walk_b = blue.animations.add('walk');
	sing_b = blue.animations.add('sing', [9, 10, 11, 12]);
	blue.animations.play('walk', 20, true);

	walk_re = red.animations.add('walk');
	sing_re = red.animations.add('sing', [9, 10, 11]);
	red.animations.play('walk', 15, true);

	walk_bw = brownWhite.animations.add('walk');
	sing_bw = brownWhite.animations.add('sing',[4, 5, 6, 7, 8, 9, 10]);
	brownWhite.animations.play('walk', 40, true);
	
	walk_w = white.animations.add('walk');
	sing_w = white.animations.add('sing', [5, 6, 7, 8, 9, 10]);
	white.animations.play('walk', 25, true);
	
	walk_p = pink.animations.add('walk');
	sing_p = pink.animations.add('sing', [9, 10, 11]);
	pink.animations.play('walk', 35, true);
}

function loadAudio(){
	aeiou1 = game.add.audio('aeiou1', 1, true);
	aeiou2 = game.add.audio('aeiou2', 1, true);
	aeiou3 = game.add.audio('aeiou3', 1, true);
	aeiou4 = game.add.audio('aeiou4', 1, true);
	aeiou5 = game.add.audio('aeiou5', 1, true);
	aeiouArray = [aeiou1, aeiou2, aeiou3, aeiou4, aeiou5];
	
	bd1 = game.add.audio('bd1', 1, true);
	bd2 = game.add.audio('bd2', 1, true);
	bdArray = [bd1, bd2];
	
	divine = game.add.audio('divine', 1, true);

	hh = game.add.audio('hh', 1, true);
	
	ohah1 = game.add.audio('ohah1', 1, true);
	ohah3 = game.add.audio('ohah3', 1, true);
	
	ohahArray = [ohah1, ohah3];
	
	perc = game.add.audio('perc', 1, true);
	
	pompedom1 = game.add.audio('pompedom1', 1, true);
	pompedom2 = game.add.audio('pompedom2', 1, true);
	pompedom3 = game.add.audio('pompedom3', 1, true);
	
	pompedomArray = [pompedom1, pompedom2, pompedom3];
	
	terta1 = game.add.audio('terta1', 1, true);
	terta2 = game.add.audio('terta2', 1, true);
	
	tertaArray = [terta1, terta2];
	
	yodel1 = game.add.audio('yodel1', 1, true);
	yodel2 = game.add.audio('yodel2', 1, true);
	yodel3 = game.add.audio('yodel3', 1, true);
	
	yodelArray = [yodel1, yodel2, yodel3];
}

function snow(){
    back_emitter = game.add.emitter(game.world.centerX, -32, 600);
    back_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
    back_emitter.maxParticleScale = 0.5;
    back_emitter.minParticleScale = 0.1;
    back_emitter.setYSpeed(20, 100);
    back_emitter.gravity = 0;
    back_emitter.width = game.world.width * 1.5;
    back_emitter.minRotation = 0;
    back_emitter.maxRotation = 40;

    mid_emitter = game.add.emitter(game.world.centerX, -32, 250);
    mid_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
    mid_emitter.maxParticleScale = 1.2;
    mid_emitter.minParticleScale = 0.8;
    mid_emitter.setYSpeed(50, 150);
    mid_emitter.gravity = 0;
    mid_emitter.width = game.world.width * 1.5;
    mid_emitter.minRotation = 0;
    mid_emitter.maxRotation = 40;

    front_emitter = game.add.emitter(game.world.centerX, -32, 50);
    front_emitter.makeParticles('snowflakes_large', [0, 1, 2, 3, 4, 5]);
    front_emitter.maxParticleScale = 1;
    front_emitter.minParticleScale = 0.5;
    front_emitter.setYSpeed(100, 200);
    front_emitter.gravity = 0;
    front_emitter.width = game.world.width * 1.5;
    front_emitter.minRotation = 0;
    front_emitter.maxRotation = 40;

    changeWindDirection();

    back_emitter.start(false, 14000, 20);
    mid_emitter.start(false, 12000, 40);
    front_emitter.start(false, 6000, 1000);
}

function changeWindDirection() {
    var multi = Math.floor((max + 200) / 4),
        frag = (Math.floor(Math.random() * 100) - multi);
    max = max + frag;

    if (max > 200) max = 150;
    if (max < -200) max = -150;

    setXSpeed(back_emitter, max);
    setXSpeed(mid_emitter, max);
    setXSpeed(front_emitter, max);
}

function setXSpeed(emitter, max) {
    emitter.setXSpeed(max - 20, max);
    emitter.forEachAlive(setParticleXSpeed, this, max);
}

function setParticleXSpeed(particle, max) {
    particle.body.velocity.x = max - Math.floor(Math.random() * 30);
}

function initAd(){
	var admobid = {};

    admobid = {
        banner: 'ca-app-pub-9795366520625065/4621108851'
    };

    if(AdMob) AdMob.createBanner({
       adId: admobid.banner,
       position: AdMob.AD_POSITION.BOTTOM_CENTER,
       autoShow: true
    });
}