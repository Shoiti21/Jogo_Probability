Smaug.Stage2_default = function(){}

Smaug.Stage2_default.prototype = {
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
        game.world.setBounds(0, 0, 11326, 768);
        fundo = game.add.tileSprite(0, 31, 11326,700,'stage2');
        fundo.tileScale.set(1.61,1.61);

        plataforma = game.add.sprite(0,31,'stage2_obj');
        game.physics.arcade.enable(plataforma);
        plataforma.body.immovable = true;
        plataforma.body.setSize(11326,70,0,630);

        if(Stage_Porta==1){
            PosicaoTesseX=780;
        }
        else if(Stage_Porta==2){
            PosicaoTesseX=3522;
        }
        CreateJogador(PosicaoTesseX, 450);

        iluminacao(11326);

        UIX=game.add.sprite(100, 700, 'UI_X');
        UIX.fixedToCamera=true;
        UIX.alpha=0;
    },
    update:function(){
        UpdateJogador(false);
        updateEscuro(11326);
        if (Tesse.x>3415 && Tesse.x<3630){
            if(interacao.isDown && cooldownX==false){
                this.start_Stage3();
            }
            UIX.alpha=1;   
            UIX.frame=1;
        }
        else if (Tesse.x>673 && Tesse.x<887){
            if(interacao.isDown && cooldownX==false){
                this.start_Stage1();
            }
            UIX.alpha=1;   
            UIX.frame=1;
        }
        else if (Tesse.x>8895 && Tesse.x<9110){
            if(interacao.isDown && cooldownX==false){
                this.start_Stage4();
            }
            UIX.alpha=1;   
            UIX.frame=1;
        }
        else{
            UIX.alpha=0; 
        } 
    },
    start_Stage3:function(){
        game.state.start('Stage3_default');
    },
    start_Stage1:function(){
        game.state.start('Stage1_default');
    },
    start_Stage4:function(){
        game.state.start('Stage4_gerador');
    },
}