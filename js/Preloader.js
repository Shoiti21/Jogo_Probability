Smaug.Preloader = function(){}

Smaug.Preloader.prototype = {
    preload:function(){        
        var carregando = game.add.sprite(50,389,'carregando');
        game.load.setPreloadSprite(carregando);

        game.load.video('Video_1', 'assets/video/Cutscene_1.webm');
        game.load.video('Video_2', 'assets/video/Cutscene_2.webm');
        game.load.video('Creditos', 'assets/video/Creditos.webm');
        game.load.video('Video_Stage4', 'assets/video/fundo_stage4.webm');
        
        game.load.audio('jay_efeito', 'assets/audio/jay_efeito.mp3');
        game.load.audio('Amb_Stage1', 'assets/audio/Amb_Stage1.mp3');
        game.load.audio('Amb_Stage4', 'assets/audio/Amb_Stage4.mp3');
        game.load.audio('Amb_Stage5', 'assets/audio/Amb_Stage5.wav');
        game.load.audio('Amb_Escuro', 'assets/audio/Amb_Escuro.wav');

        game.load.audio('isqueiro', 'assets/audio/Isqueiro.mp3');
        game.load.audio('isqueiro_apaga', 'assets/audio/Isqueiro_apaga.mp3');

        game.load.audio('pulo_audio', 'assets/audio/Pulo.mp3');
        game.load.audio('pulopousa_audio', 'assets/audio/Pulo_Pousa.mp3');
        game.load.audio('Tesse_Respiracao', 'assets/audio/Tesse_Respiracao.wav');
        game.load.audio('Tesse_Damage', 'assets/audio/Tesse_Damage.wav');
        game.load.audio('Tesse_Correndo', 'assets/audio/Tesse_Correndo.wav');
        game.load.audio('Tesse_Pulo1', 'assets/audio/Tesse_Pulo1.wav');
        game.load.audio('Tesse_Pulo2', 'assets/audio/Tesse_Pulo2.wav');
        game.load.audio('Tesse_Pulo3', 'assets/audio/Tesse_Pulo3.wav');
        game.load.audio('passo1', 'assets/audio/Passo.mp3');
        game.load.audio('passo2', 'assets/audio/Passo_Correndo.mp3');

        game.load.audio('Monstro_transfor', 'assets/audio/Monstro_transfor.mp3');
        game.load.audio('Monstro_Efeito', 'assets/audio/Monstro_Efeito.mp3');
        game.load.audio('Monstro_Correndo', 'assets/audio/Monstro_Correndo.mp3');
        game.load.audio('Monstro_Correndo2', 'assets/audio/Monstro_Correndo2.mp3');
        game.load.audio('Monstro_Ataque', 'assets/audio/Monstro_Ataque.mp3');
        game.load.audio('monstro_passos', 'assets/audio/monstro_passos.mp3');

        game.load.audio('Luz_acende', 'assets/audio/Luz_acende.mp3');
        game.load.audio('Jay_virando', 'assets/audio/Jay_virando.mp3');
        game.load.audio('interacao_audio', 'assets/audio/Interacao.mp3');
        game.load.audio('peg_fusivel_audio', 'assets/audio/Pegando_Fusivel.mp3');
        game.load.audio('Porta', 'assets/audio/Porta.mp3');
        game.load.audio('Blackout', 'assets/audio/Blackout.mp3');
        game.load.audio('musica', [ 'assets/audio/Finding_Answers_In_The_Lab.mp3', 'assets/audio/Finding_Answers_In_The_Lab.ogg' ]);
        game.load.audio('encaixando_fusivel', 'assets/audio/Encaixando_fusivel.mp3');
        game.load.audio('fala1', 'assets/audio/1.wav');
        game.load.audio('fala2', 'assets/audio/2.wav');
        game.load.audio('fala3', 'assets/audio/3.wav');
        game.load.audio('fala4', 'assets/audio/4.wav');
        game.load.audio('fala5', 'assets/audio/5.wav');
        game.load.audio('fala6', 'assets/audio/6.wav');
        game.load.audio('fala7', 'assets/audio/7.wav');
        game.load.audio('fala8', 'assets/audio/8.wav');
        game.load.audio('fala9', 'assets/audio/9.wav');
        game.load.audio('fala10', 'assets/audio/10.wav');
        game.load.audio('fala11', 'assets/audio/11.wav');
        game.load.audio('fala12', 'assets/audio/12.wav');
        game.load.audio('fala13', 'assets/audio/13.wav');
        game.load.audio('fala14', 'assets/audio/14.wav');
        game.load.audio('fala15', 'assets/audio/15.wav');
        game.load.audio('fala16', 'assets/audio/16.wav');
        game.load.audio('fala17', 'assets/audio/17.wav');

        game.load.image('tutorial_pulo', 'assets/images/tutorial_espaco.png');
        game.load.image('tutorial_direcao','assets/images/tutorial_direcao.png');
        game.load.image('tutorial_shift','assets/images/tutorial_shift.png');
        game.load.image('tutorial_z','assets/images/tutorial_z.png');
        game.load.spritesheet('UI_X','assets/images/UI_X.png',188,33);

        game.load.image('diag_box','assets/images/diag_box.png');
        game.load.image('perfil_jay','assets/images/perfil_jay.png');
        game.load.image('perfil_tesse','assets/images/perfil_tesse.png');
        game.load.image('perfil_monstro','assets/images/perfil_monstro.png');

        game.load.image('phaser','assets/images/phaser.png');
        game.load.image('studio','assets/images/Unknown_Logo_White.png');
        
        game.load.spritesheet('MenuFundo','assets/images/Menu_Fundo.jpg',1280,800);
        game.load.spritesheet('Logo','assets/images/Logo.png',321,40);;
        game.load.image('texto_menu','assets/images/texto_menu.png');

        game.load.image('balls','assets/images/Balls.png');
        game.load.spritesheet('gerador','assets/images/gerador.png',543,398);

        game.load.image('stage1','assets/images/STAGE_1.jpg');
        game.load.image('stage1_obj','assets/images/STAGE_1_obj.png');
        game.load.image('stage1_barra','assets/images/STAGE_1_barra.png');
        game.load.image('stage2','assets/images/STAGE_2.jpg');
        game.load.image('stage2_obj','assets/images/STAGE_2_obj.png');
        game.load.image('stage3','assets/images/STAGE_3.jpg');
        game.load.image('stage3_obj','assets/images/STAGE_3_obj.png');
        game.load.image('stage4','assets/images/STAGE_4.png');
        game.load.image('stage4_obj','assets/images/STAGE_4_obj.png');
        game.load.image('plat1','assets/images/plat1.png');
        game.load.image('plat2', 'assets/images/plat2.png');
        game.load.spritesheet('gerador', 'assets/images/gerador.png',543,398);
        game.load.image('objeto', 'assets/images/objeto.png');
        game.load.image('stage5', 'assets/images/STAGE_5.png');
        game.load.image('branco', 'assets/images/branco.png');
        game.load.image('stage5_obj', 'assets/images/STAGE_5_obj.png');
        game.load.image('sombra_monstro', 'assets/images/sombra_monstro.png');
        game.load.spritesheet('jaysprite','assets/images/spritesheet_jay.png',147,192);
        game.load.spritesheet('tessesprite', 'assets/images/spritesheet_tesse.png', 243, 336);
        game.load.spritesheet('monstro', 'assets/images/monstro.png', 375, 492);
    },
    update:function(){
        game.state.start('Premenu');
    }
}
