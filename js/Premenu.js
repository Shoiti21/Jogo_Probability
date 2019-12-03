Smaug.Premenu = function(){}

Smaug.Premenu.prototype = {
    create:function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;

        game.scale.fullScreenScaleMode=Phaser.ScaleManager.EXACT_FIT;
        game.input.onDown.add(TelaCheia,this);

        studio=game.add.image(game.world.centerX, game.world.centerY, 'studio');
        studio.anchor.setTo(0.5);
        studio.scale.setTo(.15,.15);
        studio.alpha=0;

        logo_phaser=game.add.image(game.world.centerX, game.world.centerY, 'phaser');
        logo_phaser.anchor.setTo(0.5);
        logo_phaser.scale.setTo(1,1);
        logo_phaser.alpha=0;

        var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        game.time.events.add(500,this.apar_logo_studio,this);
        space.onDown.addOnce(this.comecar, this);
        musica=game.add.audio('musica');
        musica.play(); 
    },
    apar_logo_studio:function(){
        game.add.tween(studio).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(3000,this.sumir_logo_studio,this);
    },
    sumir_logo_studio:function(){
        game.add.tween(studio).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(2000,this.apar_logo_phaser,this);
    },
    apar_logo_phaser:function(){
        game.add.tween(logo_phaser).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(3000,this.sumir_logo_phaser,this);
    },
    sumir_logo_phaser:function(){
        game.add.tween(logo_phaser).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(2000,this.start,this);
    },
    comecar: function(){
        game.camera.fade('rgb(0,0,0)',1000);
        game.time.events.add(1000,this.start,this);
    },
    start: function(){
        game.state.start('Menu');
    }
}
function TelaCheia(){
    if(game.scale.isFullScreen){
        game.scale.stopFullScreen();
    }
    else{
        game.scale.startFullScreen(false);
    }
}


