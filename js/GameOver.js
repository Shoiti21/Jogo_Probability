Smaug.GameOver = function(){}

Smaug.GameOver.prototype = {
    create: function () {
        game.sound.stopAll();
        Monstro_Ataque = game.add.audio('Monstro_Ataque');
        Tesse_Damage = game.add.audio('Tesse_Damage');
        Tesse_Damage.play();
        Monstro_Ataque.play();
        game.time.events.add(3000, this.start, this)
    },
    start: function(){
        this.state.start('Stage5_fuga');
    }
}