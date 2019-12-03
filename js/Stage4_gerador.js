Smaug.Stage4_gerador = function(){}

Smaug.Stage4_gerador.prototype = {
    create: function () {
        game.sound.stopAll();
        cooldownX = true;
        game.time.events.add(2000, function () { cooldownX = false; }, this);
        porta=game.add.audio('Porta');
        porta.play();
        Amb_Stage4 = game.add.audio('Amb_Stage4');
        interacao_audio = game.add.audio('interacao_audio');
        peg_fusivel_audio = game.add.audio('peg_fusivel_audio');
        fala1=game.add.audio('fala11');
        fala2 = game.add.audio('fala13');
        fala3 = game.add.audio('fala12');
        encaixando_fusivel = game.add.audio('encaixando_fusivel');
        Tesse_Damage = game.add.audio('Tesse_Damage');

        //Amb_Escuro.pause();

        pegoufusivel = false;
        ligado = false;
        UmaVez = false;
        UmaVez1 = false;

        game.camera.flash('rgb(0,0,0)',3000);
        game.world.setBounds(0, 0, 6731, 1190);

        video1=game.add.video('Video_Stage4');
        video1.play(true);
        video1.addToWorld(4035, 806, 0.5, 0.5, 3, 2);

        fundo=game.add.tileSprite(0, 0,6731,1190,'stage4');
        fundo.tileScale.set(1.61,1.61);
        
        plataforma = game.add.group();
            chao1 = game.add.sprite(0,0,'stage4_obj');
            game.physics.arcade.enable(chao1);
            chao1.body.immovable = true;
            chao1.body.setSize(2485,70,0,1135);
        plataforma.add(chao1);
            chao2 = game.add.sprite(0,31,'stage4_obj');
            game.physics.arcade.enable(chao2);
            chao2.body.immovable = true;
            chao2.body.setSize(1161,70,5570,1135);
        plataforma.add(chao2);
            parede = game.add.sprite(0, 0, 'stage4_obj');
            game.physics.arcade.enable(parede);
            parede.body.immovable = true;
            parede.body.setSize(1, 1190, 0, 0);
        plataforma.add(parede);
            parede = game.add.sprite(0, 0, 'stage4_obj');
            game.physics.arcade.enable(parede);
            parede.body.immovable = true;
            parede.body.setSize(1, 1190, 6730, 0);
        plataforma.add(parede);
            deadline = game.add.sprite(0, 31, 'stage4_obj');
            game.physics.arcade.enable(deadline);
            deadline.body.immovable = true;
            deadline.body.setSize(6731, 1, 0, 1490);
        plataforma.add(deadline);
            piso1 = game.add.sprite(2850,1135,'plat1');
            piso1.anchor.setTo(0.5);
            game.physics.arcade.enable(piso1);
            piso1.body.immovable = true;
            piso1.body.setSize(313,33,40,34);
        plataforma.add(piso1);
            piso2 = game.add.sprite(3397,1135,'plat2');
            piso2.anchor.setTo(0.5);
            game.physics.arcade.enable(piso2);
            piso2.body.immovable = true;
            piso2.body.setSize(487, 33, 40, 34);
        plataforma.add(piso2);
            piso3 = game.add.sprite(4500,1135,'plat1');
            piso3.anchor.setTo(0.5);
            game.physics.arcade.enable(piso3);
            piso3.body.immovable = true;
            piso3.body.setSize(313, 33, 40, 34);
        plataforma.add(piso3);
            piso4 = game.add.sprite(5100, 1100, 'plat2');
            piso4.anchor.setTo(0.5);
            game.physics.arcade.enable(piso4);
            piso4.body.immovable = true;
            piso4.body.setSize(487, 33, 40, 34);
        plataforma.add(piso4);

        fusivel = game.add.sprite(6400, 1000, 'objeto');
        game.physics.arcade.enable(fusivel);
        fusivel.body.immovable = true;
        fusivel.scale.setTo(2, 2);

        gerador = game.add.sprite(1200, 737, 'gerador');
        gerador.animations.add('piscando', [0, 1], 3, false);

        CreateJogador(100, 920);
        Tesse.body.collideWorldBounds = false;
        Cutscene=true;
        game.camera.target = null;

        iluminacao_stage4();

        game.time.events.add(1500,this.Fala1,this);

        UIX=game.add.sprite(100, 700, 'UI_X');
        UIX.fixedToCamera=true;
        UIX.alpha = 0;

        piso2.body.velocity.x = 200;
        piso3.body.velocity.y = -300;
        fusivel.body.velocity.y = -100;
    },
    update: function () {
        game.physics.arcade.collide(fusivel, Tesse, this.pegar, null, this);
        game.physics.arcade.collide(deadline, Tesse, this.morte, null, this);
        UpdateJogador(false);
        updateLumi_Stage4();
        if (ligado == false) {
            gerador.animations.play('piscando');
        }
        else {
            gerador.frame = 2;
        }
        if (Tesse.x > 0 && Tesse.x < 150 && Cutscene == false) {
            if (interacao.isDown && cooldownX == false) {
                this.Des_Porta();
            }
            UIX.alpha = 1;
            UIX.frame = 1;
        }
        else {
            UIX.alpha = 0;
        }
        if (UmaVez1==false && Tesse.x > 1000) {
            game.time.events.add(0, this.Fala3, this);
        }
        if (Tesse.x > 1200 && Tesse.x < 1743 && Cutscene == false) {
            if (pegoufusivel == false) {
                if (interacao.isDown && cooldownX == false) {
                    this.Des_Porta();
                }
            }
            else {
                if (interacao.isDown && cooldownX == false) {
                    this.LigandoGerador();
                }
            }
            UIX.alpha = 1;
            UIX.frame = 0;
        }
        else{
            UIX.alpha=0;
        }
        if (Cutscene==true && UmaVez==false){
            game.camera.y=422;
            game.camera.x+=7;
        }
        if(piso2.x>4097){
            piso2.body.velocity.x = -200;
        }
        else if(piso2.x<3397){
            piso2.body.velocity.x = 200;
        }

        if(piso3.y>1120){
            piso3.body.velocity.y = -200;
        }
        else if(piso3.y<900){
            piso3.body.velocity.y = 200;
        }
        if (fusivel.y > 1020) {
            fusivel.body.velocity.y = -30;
        }
        else if (fusivel.y < 1000) {
            fusivel.body.velocity.y = 30;
        }

    },
    pegar: function (sprite1,sprite2) {
        sprite1.kill();
        peg_fusivel_audio.play();
        pegoufusivel = true;
    },
    morte: function () {
        if (pegoufusivel == false) {
            Tesse.x = 100;
            Tesse.y = 920;
        }
        else {
            Tesse.x = 6400;
            Tesse.y = 920;
        }
        Tesse_Damage.play();
        game.camera.flash('rgb(0,0,0)', 3000);
    },
    Des_Porta:function(){
        box=game.add.image(0, 0, 'diag_box');
        box.fixedToCamera=true;
        box.alpha = 0;
        interacao_audio.play();
        Cutscene=true;
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox("Você tem que ligar o gerador",100);
        game.time.events.add(3000,this.FimDes,this);
    },
    LigandoGerador: function () {
        encaixando_fusivel.play();
        ligado = true;
        Cutscene = true;
        game.time.events.add(3500, this.LigandoGerador1, this);
    },
    LigandoGerador1: function () {
        game.state.start('Stage5_fuga');
    },
    Fala1:function() {
        box=game.add.image(0, 0, 'diag_box');
        box.fixedToCamera=true;
        box.alpha=0;
        perfil=game.add.image(0, 0, 'perfil_tesse');
        perfil.fixedToCamera=true;
        perfil.alpha=0;
        fala1.play();
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox(text_Stage4[0],400);
        game.time.events.add(5000,this.Fim_Fala1,this);
    },
    Fim_Fala1:function() {
        game.add.tween(diag).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(2000,this.Fala2,this);
    },
    Fala2:function() {
        game.world.remove(diag);
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        fala2.play();
        game.world.remove(diag);
        DiagBox(text_Stage4[2],500);
        game.time.events.add(4000,this.Fim_Fala2,this)
    },
    Fim_Fala2:function() {
        game.add.tween(diag).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(1000, this.FimFala, this)
        UmaVez = true;
        game.camera.follow(Tesse, Phaser.Camera.FOLLOW_LOCKON, 0.06, 0.1);
    },
    Fala3: function () {
        passo_andando.pause();
        passo_correndo.pause();
        UmaVez1 = true;
        box = game.add.image(0, 0, 'diag_box');
        box.fixedToCamera = true;
        box.alpha = 0;
        perfil = game.add.image(0, 0, 'perfil_tesse');
        perfil.fixedToCamera = true;
        perfil.alpha = 0;
        Cutscene = true;
        fala3.play();
        game.add.tween(box).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox(text_Stage4[1], 300);
        game.time.events.add(3000, this.Fim_Fala3, this);
    },
    Fim_Fala3:function() {
        game.add.tween(diag).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(1000,this.FimFala,this)
    },
    FimFala:function() {
        game.world.remove(diag);
        game.world.remove(box);
        game.world.remove(perfil);
        Cutscene = false;
        game.time.events.add(500, this.Tut_Pulo, this)
    },
    FimDes:function() {
        game.world.remove(diag);
        game.world.remove(box);
        Cutscene=false;
    },
    Tut_Pulo: function () {
        tut_pulo = game.add.image(683, 200, 'tutorial_pulo');
        tut_pulo.anchor.setTo(0.5);
        tut_pulo.fixedToCamera = true;
        tut_pulo.alpha = 0;
        game.add.tween(tut_pulo).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(2500, this.FimTut_Pulo, this)
    },
    FimTut_Pulo: function () {
        game.add.tween(tut_pulo).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(1000, this.remTut_Pulo, this)
    },
    remTut_Pulo: function () {
        game.world.remove(tut_pulo);
    },

}