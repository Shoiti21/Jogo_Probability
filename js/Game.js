var transparent=false;
var antialias=false;
var filter;
var sprite;
/*
var io = require("socket.io-client");
var socket = io("http://localhost:8081");
var mvJoystickLeft = false;
var mvJoystickRight = false;
var mvJoystickShift = false;
var mvJoystickZ = false;
var mvJoystickX = false;
var mvJoystickSpace = false;
*/

var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'game', this, transparent, antialias);

game.state.add('Boot', Smaug.Boot);
game.state.add('Preloader', Smaug.Preloader);
game.state.add('Premenu', Smaug.Premenu);
game.state.add('Menu', Smaug.Menu);
game.state.add('Intro', Smaug.Intro);
game.state.add('Stage1_tutorial', Smaug.Stage1_tutorial);
game.state.add('Stage1_default', Smaug.Stage1_default);
game.state.add('Stage2_corredor', Smaug.Stage2_corredor);
game.state.add('Stage2_default', Smaug.Stage2_default);
game.state.add('Stage3_jay', Smaug.Stage3_jay);
game.state.add('Stage3_default', Smaug.Stage3_default);
game.state.add('Stage4_gerador', Smaug.Stage4_gerador);
game.state.add('Stage5_fuga', Smaug.Stage5_fuga);
game.state.add('GameOver', Smaug.GameOver);
game.state.add('Final', Smaug.Final);


game.state.start('Boot');