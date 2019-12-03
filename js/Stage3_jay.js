Smaug.Stage3_jay = function(){}

Smaug.Stage3_jay.prototype = {
    create: function () {
        game.sound.stopAll();
        cooldownX=true;
        game.time.events.add(2000, function(){cooldownX=false;}, this);
        
        jay_efeito = game.add.audio('jay_efeito');
        Jay_virando = game.add.audio('Jay_virando');
        porta=game.add.audio('Porta');
        monstro_passos=game.add.audio('monstro_passos');
        monstro_passos.volume=0.3;
        porta.play();
        UmaVez=false;
        Stage_Porta=2;
        fala1=game.add.audio('fala6');
        fala2=game.add.audio('fala7');
        fala3=game.add.audio('fala8');
        fala4 = game.add.audio('fala10');
        fala9 = game.add.audio('fala9');

        game.camera.flash('rgb(0,0,0)',1500);
        game.world.setBounds(0, 0, 1577, 700);
        fundo=game.add.tileSprite(0, 31, 1577, 700, 'stage3');
        fundo.tileScale.set(1.61,1.61);

        plataforma = game.add.sprite(0,50,'stage3_obj');
        game.physics.arcade.enable(plataforma);
        plataforma.body.immovable = true;
        plataforma.body.setSize(1577,70,0,630);

        CreateJogador(100, 450);
        
        Jay = game.add.sprite(1400, 580, 'jaysprite');
        Jay.anchor.setTo(0.5);
        //Jay.scale.setTo(3, 3);
        anim=Jay.animations.add('virando', [0, 1, 2], 1, false);

        iluminacao(1577);

        box=game.add.image(0, 0, 'diag_box');
        box.fixedToCamera=true;
        box.alpha=0;
        perfil1=game.add.image(0, 0, 'perfil_tesse');
        perfil1.fixedToCamera=true;
        perfil1.alpha=0;
        perfil2=game.add.image(0, 0, 'perfil_jay');
        perfil2.fixedToCamera=true;
        perfil2.alpha=0;

        UIX=game.add.sprite(100, 700, 'UI_X');
        UIX.fixedToCamera=true;
        UIX.alpha=0;
    },
    update:function(){
        UpdateJogador(false);
        updateEscuro(1577);
        if(Cutscene==false){
            if (Tesse.x>0 && Tesse.x<150){
                if(UmaVez==true){
                    if(interacao.isDown && cooldownX==false){
                        this.start_Stage2();
                    }
                }
                else{
                    if(interacao.isDown && cooldownX==false){
                        this.Des_Porta();
                    }
                    
                }
                UIX.alpha=1;
            }
            else if (Tesse.x>1200 && Tesse.x<1600){
                if(interacao.isDown && cooldownX==false){
                    this.Des_Jay();
                }
            }
            else{
                UIX.alpha=0;
            }
        }
        if(UmaVez==false){
            if (Tesse.x>930){
                Cutscene=true;
                UmaVez=true;
                isqueiro=true;
                game.time.events.add(0,this.Fala1,this);
            }
        }
    },
    Des_Porta:function(){
        Cutscene=true;
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox("Você ainda não vaculhou a sala",100);
        game.time.events.add(3000,this.Fim_Fala4,this)
    },
    Des_Jay:function(){
        Cutscene=true;
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox("Jay sumiu em segundos sem deixar um resquício.",100);
        game.time.events.add(3000,this.Fim_Fala4,this)
    },
    Fala1: function () {
        passo_andando.pause();
        passo_correndo.pause();
        fala1.play();
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil1).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox(text_Stage3[0],400);
        game.time.events.add(6000,this.Fala2,this);
    },
    Fala2:function() {
        fala2.play();
        monstro_passos.play();
        game.world.remove(diag);
        DiagBox(text_Stage3[1],500);
        game.time.events.add(4000,this.Fala3,this)
    },
    Fala3: function () {
        Jay_virando.play();
        anim.play('virando');
        CutsceneEfeito=true;
        fala3.play();
        game.add.tween(perfil1).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil2).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.world.remove(diag);
        DiagBox(text_Stage3[2],500);
        game.time.events.add(11000,this.Fala3_Cutscene,this)
    },
    Fala3_Cutscene:function() {
        isqueiroAPAGA=true;
        game.camera.shake(0.01, 1000);
        game.world.remove(Jay);
        game.world.remove(diag);
        fala9.play();
        jay_efeito.play();
        DiagBox(text_Stage3[3],500);
        game.time.events.add(2000,this.Fala4,this)
    },
    Fala4:function() {
        isqueiroAPAGA=false;
        fala4.play();
        game.add.tween(perfil2).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil1).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.world.remove(diag);
        DiagBox(text_Stage3[4],500);
        game.time.events.add(11000,this.Fim_Fala4,this)
    },
    Fim_Fala4:function() {
        game.add.tween(diag).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil1).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(1000,this.FimFala,this)
    },
    FimFala:function() {
        game.world.remove(diag);
        Cutscene=false;
    },
    start_Stage2:function(){
        game.state.start('Stage2_default');
    },
}
