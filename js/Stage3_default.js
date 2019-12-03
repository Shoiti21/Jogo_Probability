Smaug.Stage3_default = function(){}

Smaug.Stage3_default.prototype = {
    create: function () {
        game.sound.stopAll();
        cooldownX=true;
        game.time.events.add(2000, function(){cooldownX=false;}, this);

        Amb_Escuro = game.add.audio('Amb_Escuro');
        Amb_Escuro.loop = true;
        Amb_Escuro.play();

        porta=game.add.audio('Porta');
        porta.play();
        game.camera.flash('rgb(0,0,0)',1500);
        game.world.setBounds(0, 0, 1577, 700);
        fundo=game.add.tileSprite(0, 31, 1577, 700, 'stage3');
        fundo.tileScale.set(1.61,1.61);

        plataforma = game.add.sprite(0,50,'stage3_obj');
        game.physics.arcade.enable(plataforma);
        plataforma.body.immovable = true;
        plataforma.body.setSize(1577,70,0,630);

        CreateJogador(100, 450);

        iluminacao(1577);
        UIX=game.add.sprite(100, 700, 'UI_X');
        UIX.fixedToCamera=true;
        UIX.alpha=0;
    },
    update:function(){
        UpdateJogador(false);
        updateEscuro(1577);
        if (Tesse.x>1 && Tesse.x<85){
            if(interacao.isDown && cooldownX==false){
                this.start_Stage2();
            }
            UIX.alpha=1;   
            UIX.frame=1;
        }
        else{
            UIX.alpha=0
        }
    },
    start_Stage2:function(){
        Stage_Porta=2;
        game.state.start('Stage2_default');
    },
}
