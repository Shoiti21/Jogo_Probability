Smaug.Intro = function(){}

Smaug.Intro.prototype = {
    create:function(){
        video1 = game.add.video('Video_1');
        video1.play();
        video1.addToWorld(0, 0, 0, 0, 0.73, 0.73);
        musica.pause();

        video1.onComplete.addOnce(this.start_stage, this);
        game.time.events.add(3000, this.UI_cd, this)
        UIX = game.add.sprite(100, 700, 'UI_X');
        UIX.fixedToCamera = true;
        UIX.alpha = 0;
        UIX.frame = 2;
    },
    UI_cd: function () {
        game.add.tween(UIX).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
        pular_cut = game.input.keyboard.addKey(Phaser.Keyboard.X);
        pular_cut.onDown.add(this.start_stage);
    },
    start_stage:function(){
        game.state.start('Stage1_tutorial');
    },
}
