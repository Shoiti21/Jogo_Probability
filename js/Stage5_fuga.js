Smaug.Stage5_fuga = function(){}

Smaug.Stage5_fuga.prototype = {
    create: function () {
        game.sound.stopAll();
        pisca_luz = false;
        start_fuga = false;
        forca_shake = 0.00005;
        game.world.setBounds(0, 0, 11326, 768);
        fundo = game.add.tileSprite(0, 31, 11326,700,'stage5');
        fundo.tileScale.set(1.61,1.61);

        fala1=game.add.audio('fala14');
        fala2=game.add.audio('fala15');
        fala3=game.add.audio('fala16');
        fala4 = game.add.audio('fala17');
        Amb_Stage5 = game.add.audio('Amb_Stage5');
        Amb_Stage5.loop = true;
        Monstro_transfor = game.add.audio('Monstro_transfor');
        Monstro_Efeito = game.add.audio('Monstro_Efeito');
        Monstro_Correndo = game.add.audio('Monstro_Correndo');
        Monstro_Correndo.volume = 0;
        Monstro_Correndo2 = game.add.audio('Monstro_Correndo2');
        Monstro_Correndo2.volume = 0;
        Monstro_Correndo2.loop = true;
        Monstro_Efeito.loop = true;
        Luz_acende = game.add.audio('Luz_acende');
        Luz_acende.play();

        plataforma = game.add.sprite(0,31,'stage5_obj');
        game.physics.arcade.enable(plataforma);
        plataforma.body.immovable = true;
        plataforma.body.setSize(11326,70,0,630);

        CreateJogador(10600, 450);
        Cutscene = true;

        Monstro = game.add.sprite(10870, 200, 'monstro');
        Monstro.alpha=0;
        Monstro.animations.add('parado_monstro', [0, 1, 2], 4, true);
        Monstro.animations.add('andando_monstro', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 8, false);
        Monstro.animations.add('andando_mao', [12, 13, 14], 4, true);
        game.physics.arcade.enable(Monstro);
        VelocidadeMons = 2;

        Sombra_stage5 = game.add.sprite(10450, 0, 'sombra_monstro');
        Sombra_stage5.scale.setTo(2,2);
        Sombra_stage5.alpha=0;

        iluminacao(11326);
        game.time.events.add(5000,this.Fala1,this);
        Monstro.animations.play('parado_monstro');

        branco = game.add.sprite(0, 0, 'branco');
        branco.scale.setTo(3, 3);
        branco.fixedToCamera = true;
        game.add.tween(branco).to({ alpha: 0 }, 6000, Phaser.Easing.Linear.None, true);
        game.camera.x += 9901;

    },
    update: function () {
        game.physics.arcade.overlap(Tesse, Monstro, this.Morte, null, this);
        UpdateJogador(false);
        updateLumi_Stage5();
        if (start_fuga == true) {
            if (VelocidadeMons < 7) {
                VelocidadeMons += 0.015
            }
            forca_shake += 0.00001;
            game.camera.shake(forca_shake, 100000);
            Monstro_Correndo.volume+=0.001
            Monstro.x -= VelocidadeMons;
            Sombra_stage5.x -= VelocidadeMons;
            ativar_piscar_luz = game.rnd.integerInRange(0, 100);
            if (ativar_piscar_luz == 1) {
                pisca_luz = true;
                game.time.events.add(500, function () { pisca_luz = false; }, this);
            }
        }
        if (Tesse.x<100) {
            this.start_fim();
        }
    },
    Morte: function () {
        game.state.start('GameOver');
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
        game.add.tween(Monstro).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil1).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox(text_Stage5[0], 500);
        game.time.events.add(2000, function () { Monstro_Efeito.play(); } , this);
        game.time.events.add(4000,this.Fala2,this);
    },
    Fala2:function() {
        game.add.tween(perfil1).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil2).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        fala2.play(); 
        game.world.remove(diag);
        DiagBox(text_Stage5[1],350);
        game.time.events.add(4000,this.Fala3,this)
    },
    Fala3:function() {
        game.add.tween(perfil1).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil2).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        fala3.play(); 
        game.world.remove(diag);
        DiagBox(text_Stage5[2],350);
        game.time.events.add(4000, this.Fim_Fala3, this)
    },
    Fim_Fala3:function() {
        game.add.tween(diag).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil1).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        Monstro_transfor.play();
        game.time.events.add(1500,this.Monstro_trans,this)
    },
    Monstro_trans:function(){
        game.add.tween(Sombra_stage5).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        Monstro.animations.play('andando_monstro');
        game.time.events.add(1500,Begin_monstro,this)
        function Begin_monstro(){
            Monstro.animations.play('andando_mao');
            game.time.events.add(1000,this.Fala4,this)  
        }
    },
    Fala4:function() {
        game.add.tween(perfil2).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        fala4.play(); 
        game.world.remove(diag);
        DiagBox(text_Stage5[3],350);
        game.time.events.add(3500,this.Fim_Fala4,this)
    },
    Fim_Fala4:function() {
        game.add.tween(diag).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil2).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(1000,this.FimFala,this)
    },
    FimFala:function() {
        game.world.remove(diag);
        game.world.remove(box);
        game.world.remove(perfil1);
        game.world.remove(perfil2);
        Cutscene = false;
        start_fuga = true;
        Monstro_Correndo.play();
        Monstro_Correndo2.play();
        Amb_Stage5.play();
    },
    start_fim:function(){
        game.state.start('Final');
    },

}