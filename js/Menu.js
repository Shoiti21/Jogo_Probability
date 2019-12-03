Smaug.Menu = function(){}

Smaug.Menu.prototype = {
    create: function () {
        interacao_audio = game.add.audio('interacao_audio');

        fundo=game.add.sprite(0,0,'MenuFundo');
        fundo.animations.add('fundo_efeito', [0,1], 2, false);
        fundo.alpha=0;
        
        game.time.events.loop(2500, this.menufundo, this);
        game.time.events.loop(1500, this.menulogo, this);
     
        titulo_logo=game.add.sprite(game.world.centerX,game.world.centerY,'Logo');
        titulo_logo.scale.setTo(2,2);
        titulo_logo.anchor.setTo(0.5);
        titulo_logo.alpha=0;
        titulo_logo.frame=2;
        titulo_logo.animations.add('logo_efeito', [0,1,2], 6, false);

        texto_menu=game.add.sprite(0,0,'texto_menu');

        game.add.tween(fundo).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        game.add.tween(titulo_logo).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true);

        var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.addOnce(this.comecar, this);
    },
    update:function(){
        if(texto_menu.alpha==1){
            game.add.tween(texto_menu).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
        }
        else if(texto_menu.alpha==0){
            game.add.tween(texto_menu).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
        }
    },
    comecar: function () {
        interacao_audio.play();
        game.camera.fade('rgb(0,0,0)',1000);
        game.time.events.add(1000,this.start,this);
    },
    start: function () {
        game.state.start('Stage4_gerador');
    },
    menufundo:function(){
        fundo.animations.play('fundo_efeito');
    },
    menulogo:function(){
        titulo_logo.animations.play('logo_efeito');
    },
}



