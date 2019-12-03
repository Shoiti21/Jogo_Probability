var Smaug = {};

Smaug.Boot = function(){}

Smaug.Boot.prototype={
    preload:function(){
        this.load.spritesheet('carregando','assets/images/carregando.png',186,24);
    },
    create:function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.state.start('Preloader');
    }
}