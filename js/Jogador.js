function CreateJogador(TessePosX,TessePosY){
    Cutscene=false;
    ButtonX=false;
    isqueiro=false;
    pulo_posar=false;
    andando_ativo = false;
    correndo_ativo = false;
    voz_cd = false;

    Tesse_Pulo1 = game.add.audio('Tesse_Pulo1');
    Tesse_Pulo2 = game.add.audio('Tesse_Pulo2');
    Tesse_Pulo3 = game.add.audio('Tesse_Pulo3');
    sound_pulo = [Tesse_Pulo1, Tesse_Pulo2, Tesse_Pulo3];
    interacao_audio=game.add.audio('interacao_audio');
    isqueiro_audio = game.add.audio('isqueiro');
    Tesse_Respiracao = game.add.audio('Tesse_Respiracao');
    Tesse_Correndo = game.add.audio('Tesse_Correndo');
    isqueiroapaga_audio=game.add.audio('isqueiro_apaga');
    passo_andando=game.add.audio('passo1');
    passo_andando.addMarker('loop', 0, 1.5, 1, true);
    passo_correndo = game.add.audio('passo2');
    passo_correndo.addMarker('loop1', 0, 1.5, 1, true);
    pulo_audio=game.add.audio('pulo_audio');
    pulopousa_audio=game.add.audio('pulopousa_audio');
    Tesse = game.add.sprite(TessePosX, TessePosY, 'tessesprite');
    Tesse.animations.add('andando', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, false);
    Tesse.animations.add('andandoluz_dir', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, false); 
    Tesse.animations.add('andandoluz_isq', [22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 10, false);
    Tesse.animations.add('correndo', [33, 34, 35, 36, 37, 38, 39, 40, 41, 42], 10, false);
    Tesse.animations.add('correndoluz_dir', [44, 45, 46, 47, 48, 49, 50, 51, 52, 53], 10, false);
    Tesse.animations.add('correndoluz_isq', [55, 56, 57, 58, 59, 60, 61, 62, 63, 64], 10, false);

    Tesse.anchor.setTo(0.5);
    game.camera.follow(Tesse, Phaser.Camera.FOLLOW_LOCKON, 0.06, 0.1);

    game.physics.arcade.enable(Tesse);
    Tesse.body.gravity.y = 2000;
    Tesse.body.setSize(130,336,50,0);
    Tesse.body.collideWorldBounds = true;

    direcao = game.input.keyboard.createCursorKeys();
    acenderisq = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    correr = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT); 
    pulo = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    interacao = game.input.keyboard.addKey(Phaser.Keyboard.X); 

    acenderisq.onDown.add(function () { isqueiro = !isqueiro; });
    correr.onDown.add(function () { if (voz_cd == false) { audio_pers(2);} });

}
function UpdateJogador(Metodo){
    game.physics.arcade.collide(Tesse, plataforma);
    
    if(Cutscene==false){

        function audio_pers(Tipo) {
            if (Tipo == 1) {
                voz_cd = true;
                Tesse_Respiracao.play();
                game.time.events.add(6000, function () { voz_cd = false; }, this)
            }
            if (Tipo == 2) {
                voz_cd = true;
                Tesse_Correndo.play();
                game.time.events.add(3000, function () { voz_cd = false; }, this)
            }
        }
        if ((direcao.left.isDown || direcao.right.isDown) && Tesse.body.touching.down) {
            if (correr.isDown) {
                andando_ativo = true;
                if (andando_ativo == true) {
                    andando_ativo = false;
                    passo_andando.pause();
                }
                if (correr.duration > 4000 && voz_cd == false) {
                    audio_pers(1);
                }
            }
            else {
                correndo_ativo = true;
                if (correndo_ativo == true) {
                    correndo_ativo = false;
                    passo_correndo.pause();
                }
            }
            if (correndo_ativo == false) {
                    correndo_ativo = true;
                    passo_correndo.play('loop1');
                }
            if (andando_ativo == false) {
                    andando_ativo = true;
                    passo_andando.play('loop');
            }
        }
        else {
            if (andando_ativo == true || correndo_ativo == true) {
                correndo_ativo = false;
                andando_ativo = false;
                passo_andando.pause();
                passo_correndo.pause();
            }
        }
        if(isqueiro==false){
            if(acenderisq.isDown) {
                isqueiroapaga_audio.play();
            }
        }
        if(isqueiro==true){
            if(acenderisq.isDown) {
                isqueiro_audio.play();
            }
        }
        if (!Tesse.body.touching.down && pulo_posar == false) {
            select_pulo = game.rnd.integerInRange(0, 1, 2);
            pulo_posar = true;
            if (voz_cd==false) {
                sound_pulo[select_pulo].play();
            }
            pulo_audio.play();
        }
        if(Tesse.body.touching.down && pulo_posar==true){
            pulopousa_audio.play();
            pulo_posar=false;
        }


        if(isqueiro==false){
            if(direcao.left.isDown) {
                Tesse.scale.x=-1;
                if(correr.isDown) {
                    if(Metodo==true){
                        if(fundo.tilePosition.x>=0){
                            Tesse.body.velocity.x = -400;
                        }
                        else{
                            fundo.tilePosition.x+=6;
                        }
                    }
                    else if(Metodo==false){
                        Tesse.body.velocity.x = -400;
                    }
                    Tesse.animations.play('correndo');
                }
                else{
                    if(Metodo==true){
                        if(fundo.tilePosition.x>=0){
                            Tesse.body.velocity.x = -220;
                        }
                        else{
                            fundo.tilePosition.x+=3;
                        }
                    }
                    else if(Metodo==false){
                        Tesse.body.velocity.x = -220;
                    }
                    Tesse.animations.play('andando');
                }
            }
            else if(direcao.right.isDown) {
                Tesse.scale.x=1;
                if(correr.isDown) {
                    if(Metodo==true){
                        if(Tesse.x<683){
                            Tesse.body.velocity.x = 400;
                        }
                        else{
                            fundo.tilePosition.x-=6;
                        }
                    }
                    else if(Metodo==false){
                        Tesse.body.velocity.x = 400;
                    }
                    Tesse.animations.play('correndo');
                }
                else{
                    if(Metodo==true){
                        if(Tesse.x<683){
                            Tesse.body.velocity.x = 220;
                        }
                        else{
                            fundo.tilePosition.x-=3;
                        }    
                    }
                    else if(Metodo==false){
                        Tesse.body.velocity.x = 220;
                    }
                    Tesse.animations.play('andando');
                }
            }
            else{
                Tesse.body.velocity.x = 0;
                Tesse.frame=10;
            }
            if(!Tesse.body.touching.down){
                Tesse.frame = 7;
                if(correr.isDown){
                    Tesse.frame=41;
                }
            }
            if(Tesse.body.touching.right || Tesse.body.touching.left){
                Tesse.frame = 10;
            }
        }
        else{
            if(direcao.left.isDown) {
                Tesse.scale.x=-1;
                if(correr.isDown) {
                    if(Metodo==true){
                        if(fundo.tilePosition.x>=0){
                            Tesse.body.velocity.x = -400;
                        }
                        else{
                            fundo.tilePosition.x+=6;
                        }
                    }
                    else if(Metodo==false){
                        Tesse.body.velocity.x = -400;
                    }
                    Tesse.animations.play('correndoluz_dir');
                }
                else{
                    if(Metodo==true){
                        if(fundo.tilePosition.x>=0){
                            Tesse.body.velocity.x = -220;
                        }
                        else{
                            fundo.tilePosition.x+=3;
                        }
                    }
                    else if(Metodo==false){
                        Tesse.body.velocity.x = -220;
                    }
                    Tesse.animations.play('andandoluz_dir');
                }
            }
            else if(direcao.right.isDown) {
                Tesse.scale.x=1;
                if(correr.isDown) {
                    if(Metodo==true){
                        if(Tesse.x<683){
                            Tesse.body.velocity.x = 400;
                        }
                        else{
                            fundo.tilePosition.x-=6;
                        }
                    }
                    else if(Metodo==false){
                        Tesse.body.velocity.x = 400;
                    }
                    Tesse.animations.play('correndoluz_isq');
                }
                else{
                    if(Metodo==true){
                        if(Tesse.x<683){
                            Tesse.body.velocity.x = 220;
                        }
                        else{
                            fundo.tilePosition.x-=3;
                        }  
                    }
                    else if(Metodo==false){
                        Tesse.body.velocity.x = 220;
                    }
                    Tesse.animations.play('andandoluz_isq');
                }
            }
            else{
                if(Tesse.scale.x==1){
                    Tesse.body.velocity.x = 0;
                    Tesse.frame=32;
                    if(!Tesse.body.touching.down){
                        Tesse.frame = 52;
                        if(correr.isDown){
                            Tesse.frame=18;
                        }
                    }
                }
                else{
                    Tesse.body.velocity.x = 0;
                    Tesse.frame=21;
                }
            }     
            if(!Tesse.body.touching.down){
                Tesse.frame = 63;
                if(correr.isDown){
                    Tesse.frame=29;
                }
            }
            if(Tesse.body.touching.right || Tesse.body.touching.left){
                Tesse.frame = 21;
            }
        }
        if((pulo.isDown) && Tesse.body.touching.down) {
            Tesse.body.velocity.y = -800;
        }
    }
    else{
        if(isqueiro==false){
            Tesse.body.velocity.x = 0;
            Tesse.frame=10;
        }
        else{
            if(Tesse.scale.x==1){
                Tesse.body.velocity.x = 0;
                Tesse.frame=32;
                if(!Tesse.body.touching.down){
                    Tesse.frame = 52;
                    if(correr.isDown){
                        Tesse.frame=18;
                    }
                }
            }
            else{
                Tesse.body.velocity.x = 0;
                Tesse.frame=21;
            }
        }
    }
}