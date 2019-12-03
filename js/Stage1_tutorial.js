Smaug.Stage1_tutorial = function(){}

Smaug.Stage1_tutorial.prototype = {
    create: function () {
        game.sound.stopAll();
        video1.stop();
        cooldownX=true;
        game.time.events.add(2000, function(){cooldownX=false;}, this);

        interacao_audio = game.add.audio('interacao_audio');
        Amb_Stage1=game.add.audio('Amb_Stage1');
        Amb_Stage1.loop = true;
        fala1=game.add.audio('fala1');
        fala2=game.add.audio('fala2');

        Amb_Stage1.play('loop');
        
        game.camera.flash('rgb(0,0,0)',3000);
        game.world.setBounds(0, 0, 2699, 768);
        fundo=game.add.tileSprite(0, 31,2700,700,'stage1');
        fundo.tileScale.set(1.61,1.61);
        
        plataforma = game.add.group();
            chao = game.add.sprite(0,31,'stage1_obj');
            game.physics.arcade.enable(chao);
            chao.body.immovable = true;
            chao.body.setSize(2699,70,0,630);
        plataforma.add(chao);
            parede = game.add.sprite(0,31,'stage1_obj');
            game.physics.arcade.enable(parede);
            parede.body.immovable = true;
            parede.body.setSize(820,700,0,0);
        plataforma.add(parede);

        CreateJogador(1125, 450);
        Cutscene=true;
        
        game.add.tileSprite(10, 40, 2699, 700, 'stage1_barra');

        iluminacao(2699);

        balls=game.add.image(405, 400, 'balls');
        balls.anchor.setTo(0.5);
        balls.scale.setTo(2);
        balls.incremento=1;

        game.time.events.add(3000,this.Fala1,this);

        balls.velocidade=true;

        UIX=game.add.sprite(100, 700, 'UI_X');
        UIX.fixedToCamera=true;
        UIX.alpha=0;
    },
    update:function(){
        if(balls.y>=430){
            balls.velocidade=false;
        }
        else if(balls.y<=370){
            balls.velocidade=true;
        }
        if (balls.velocidade==true){
            balls.y += 0.3
        }
        else if(balls.velocidade==false){
            balls.y -= 0.3
        }
        UpdateJogador(false);
        updateLumi_Stage1(2699,1);
        balls.angle += balls.incremento;
        if(Cutscene==false){
            if (Tesse.x>2370 && Tesse.x<2550){
                if(interacao.isDown && cooldownX==false){
                    this.start_Stage2();
                }
                UIX.alpha=1;   
                UIX.frame=1;
            }
            else if (Tesse.x>1366 && Tesse.x<1495){
                if(interacao.isDown && cooldownX==false){
                    this.Des_Barco();
                }
                UIX.alpha=1;   
                UIX.frame=0;
            }
            else if (Tesse.x>500 && Tesse.x<900){
                if(interacao.isDown && cooldownX==false){
                    this.Des_Computador();
                }
                UIX.alpha=1;   
                UIX.frame=0;
            }
            else{
                UIX.alpha=0;
            } 
        }
    },
    Des_Barco:function(){
        box=game.add.image(0, 0, 'diag_box');
        box.fixedToCamera=true;
        box.alpha = 0;
        interacao_audio.play();
        Cutscene=true;
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox("Um origami de barco com uma pequena camada de cera",100);
        game.time.events.add(4000,this.FimDes,this)
    },
    Des_Computador:function(){
        box=game.add.image(0, 0, 'diag_box');
        box.fixedToCamera=true;
        box.alpha = 0;
        interacao_audio.play();
        Cutscene=true;
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox("Imprecionante, a maquina está muito estavel",100);
        game.time.events.add(4000,this.FimDes,this)
    },
    start_Stage2:function(){
        game.state.start('Stage2_corredor');
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
        DiagBox(text_Stage1[0],500);
        game.time.events.add(4000,this.Fala2,this);
    },
    Fala2:function() {
        fala2.play(); 
        game.world.remove(diag);
        DiagBox(text_Stage1[1],350);
        game.time.events.add(8000,this.Fim_Fala2,this)
    },
    Fim_Fala2:function() {
        game.add.tween(diag).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(box).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.add.tween(perfil).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(1000,this.FimFala,this)
    },
    FimFala:function() {
        Cutscene=false;
        game.world.remove(diag);
        game.world.remove(box);
        game.world.remove(perfil);
        game.time.events.add(500,this.Tutorial_UIDire,this)
    },
    FimDes:function() {
        game.world.remove(diag);
        game.world.remove(box);
        Cutscene=false;
    },
    Tutorial_UIDire:function(){
        UI_direcao=game.add.image(683, 200, 'tutorial_direcao');
        UI_direcao.anchor.setTo(0.5);
        UI_direcao.fixedToCamera=true;
        UI_direcao.alpha=0;
        game.add.tween(UI_direcao).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(4000,this.Tutorial_UIDire_Fim,this)
    },
    Tutorial_UIDire_Fim:function(){
        game.add.tween(UI_direcao).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(500,this.Tutorial_UIZ,this)
    },
    Tutorial_UIZ:function(){
        game.world.remove(UI_direcao);
        UI_z=game.add.image(683, 200, 'tutorial_shift');
        UI_z.anchor.setTo(0.5);
        UI_z.fixedToCamera=true;
        UI_z.alpha=0;
        game.add.tween(UI_z).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(4000,this.Tutorial_UIZ_Fim,this)
    },
    Tutorial_UIZ_Fim:function(){
        game.add.tween(UI_z).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        game.time.events.add(500,this.Tutorial_Fim,this)
    },
    Tutorial_Fim:function(){
        game.world.remove(UI_z);
    }
}
