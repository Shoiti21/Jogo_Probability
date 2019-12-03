Smaug.Stage1_default = function(){}

Smaug.Stage1_default.prototype = {
    create: function () { 
        game.sound.stopAll();
        cooldownX=true;
        game.time.events.add(2000, function () { cooldownX = false; }, this);

        Amb_Escuro = game.add.audio('Amb_Escuro');
        interacao_audio = game.add.audio('interacao_audio');
        Amb_Escuro.play(true);

        porta=game.add.audio('Porta');
        porta.play();   
        Stage_Porta=1;    
        game.camera.flash('rgb(0,0,0)',1500);
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

        Cutscene=false;
        CreateJogador(2460, 400);
        
        game.add.tileSprite(10, 40, 2699, 700, 'stage1_barra');

        iluminacao(2699);

        balls=game.add.image(405, 400, 'balls');
        balls.anchor.setTo(0.5);
        balls.scale.setTo(2);
        balls.incremento=1;

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
        //game.physics.arcade.collide(Tesse, plataforma1);
        UpdateJogador(false);
        updateLumi_Stage1(2699,2);
        balls.angle += balls.incremento;
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
    },
    Des_Barco:function(){
        Cutscene = true;
        interacao_audio.play();
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox("Um origami de barco com uma pequena camada de cera.",100);
        game.time.events.add(4000,this.Fim_Fala2,this)
    },
    Des_Computador:function(){
        Cutscene = true;
        interacao_audio.play();
        game.add.tween(box).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        DiagBox("A máquina está estável.",100);
        game.time.events.add(4000,this.Fim_Fala2,this)
    },
    start_Stage2:function(){
        game.state.start('Stage2_default');
    },
}