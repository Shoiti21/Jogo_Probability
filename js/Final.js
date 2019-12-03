Smaug.Final = function () { }

Smaug.Final.prototype = {
    create: function () {
        game.sound.stopAll();
        game.time.events.add(3000, this.vidcut, this)
    },
    vidcut: function () {
        video1 = game.add.video('Video_2');
        video1.play();
        video1.addToWorld(0, 0, 0, 0, 0.73, 0.73);
        video1.onComplete.addOnce(this.vidcreditos, this);
    },
    vidcreditos: function () {
        video2 = game.add.video('Creditos');
        video2.play();
        video2.addToWorld(0, 0, 0, 0, 0.73, 0.73);
        video2.onComplete.addOnce(this.start_stage, this);
    },
    start_stage: function () {
        game.state.start('Menu');
        musica.play(true);
    },
}