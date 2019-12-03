Smaug.Stage2_corredor = function(){}

Smaug.Stage2_corredor.prototype = {
    create: function () {
        game.sound.stopAll();
        cooldownX=true;
        game.time.events.add(2000, function(){cooldownX=false;}, this);
        UmaVez=false;
        tutorial_action = true;

        porta=game.add.audio('Porta');
        porta.play();
        CutsceneEfeito=true;
        blackout=game.add.audio('Blackout');
        fala1=game.add.audio('fala3');
        fala2 = game.add.audio('fala4');
        fala3 = game.add.audio('fala5');
        Amb_Escuro = game.add.audio('Amb_Escuro');
        Amb_Escuro.loop = true;

        game.camera.flash('rgb(0,0,0)',1500);
        game.world.setBounds(0, 0, 4500, 768);
        fundo=game.add.tileSprite(0, 31,4500,700,'stage2');
        fundo.tileScale.set(1.61,1.61);

        plataforma = game.add.group();
            chao = game.add.sprite(0,31,'stage2_obj');
            game.physics.arcade.enable(chao);
            chao.body.immovable = true;
            chao.body.setSize(4500,70,0,630);
        plataforma.add(chao);
            parede = game.add.sprite(0,31,'stage2_obj');
            game.physics.arcade.enable(parede);
            parede.body.immovable = true;
            parede.body.setSize(10,768,3874,0);
        plataforma.add(parede);

        CreateJogador(780, 450);
        Cutscene=true;

        iluminacao(7035);

        game.time.events.add(3000,this.Fala1,this);

        UIX=game.add.sprite(100, 700, 'UI_X');
        UIX.fixedToCamera=true;
        UIX.alpha=0;
    },
    update: function () {
        if(UmaVez==false){
            game.physics.arcade.collide(Tesse, parede, this.CutsceneParede, null, this);
        }
        UpdateJogador(false);
        if(CutsceneEfeito==false){
            updateEscuro(4500);
        }
        else{
            sombra.context.fillStyle='rgb(100,100,100)';
            sombra.context.fillRect(0,0,4500,768);
        }
        if(Cutscene==false){
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
            else{
                UIX.alpha=0; 
            }
        }
    },
    CutsceneParede: function () {
        passo_andando.pause();
        passo_correndo.pause();
        UmaVez = true;
        Cutscene = true;
        box=game.add.image(0, 0, 'diag_box');
        box.fixedToCamera=true;
        box.alpha=0;
        perfil1=game.add.image(0, 0, 'perfil_tesse');
        perfil1.fixedToCamera=true;
        perfil1.alpha=0;

        fala3.play();
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil1).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox(text_Stage2[2],400);
        game.time.events.add(5000,this.Fim_CutsceneParede,this);
    },
    Fim_CutsceneParede:function() {
        game.add.tween(diag).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil1).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(1000,this.FimCutsceneParede,this)
    },
    FimCutsceneParede:function() {
        game.world.remove(box);
        game.world.remove(perfil1);
        game.world.remove(diag);
        Cutscene=false;
    },
    start_Stage3:function(){
        game.state.start('Stage3_jay');
    },
    start_Stage1:function(){
        box=game.add.image(0, 0, 'diag_box');
        box.fixedToCamera=true;
        box.alpha=0;
        Cutscene=true;
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox("Procure a sala do gerador",100);
        game.time.events.add(4000,this.FimDes,this)
    },
    Fala1:function() {
        box=game.add.image(0, 0, 'diag_box');
        box.fixedToCamera=true;
        box.alpha=0;
        perfil1=game.add.image(0, 0, 'perfil_tesse');
        perfil1.fixedToCamera=true;
        perfil1.alpha=0;
        perfil2=game.add.image(0, 0, 'perfil_monstro');
        perfil2.fixedToCamera=true;
        perfil2.alpha=0;
        fala1.play();
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil2).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox(text_Stage2[0],400);
        game.time.events.add(14000,this.Fala2,this);
    },
    Fala2:function() {
        game.camera.shake(0.03, 200);
        CutsceneEfeito=false;
        fala2.play();
        blackout.play();
        game.add.tween(perfil2).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil1).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.world.remove(diag);
        DiagBox(text_Stage2[1],500);
        game.time.events.add(18000,this.Fim_Fala2,this)
    },
    Fim_Fala2:function() {
        game.add.tween(diag).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil1).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(1000, this.FimFala, this)
        Amb_Escuro.play(true);
    },
    FimFala:function() {
        game.world.remove(box);
        game.world.remove(perfil1);
        game.world.remove(perfil2);
        game.world.remove(diag);
        game.time.events.add(500, this.Tut_Isq, this)
        Cutscene=false;
    },
    Tut_Isq:function() {
        tut_z=game.add.image(683, 200, 'tutorial_z');
        tut_z.anchor.setTo(0.5);
        tut_z.fixedToCamera=true;
        tut_z.alpha=0;
        game.add.tween(tut_z).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(2500, this.FimTut_Isq, this)
    },
    FimTut_Isq:function() {
        game.add.tween(tut_z).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(1000, this.remTut_Isq, this)
    },
    remTut_Isq:function() {
        game.world.remove(tut_z);
    },
    FimDes: function(){
        game.world.remove(diag);
        game.world.remove(box);
        Cutscene=false;
    }
}