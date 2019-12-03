function iluminacao(MapasX){
    isqueiroAPAGA=false;
    tamanholuz=500;
    energia=900;
    movingenergia=false;
    sombra=game.add.bitmapData(MapasX,768);
    isqluz=game.add.image(0,0,sombra);
    isqluz.blendMode=PIXI.blendModes.MULTIPLY;
}
function iluminacao_stage4() {
    isqueiroAPAGA = false;
    tamanholuz = 500;
    energia = 900;
    movingenergia = false;
    sombra = game.add.bitmapData(6731, 1306);
    isqluz = game.add.image(0, 0, sombra);
    isqluz.blendMode = PIXI.blendModes.MULTIPLY;
}
function updateEscuro(MapasX){
    var movingtamanho=tamanholuz-game.rnd.integerInRange(40,100,500); 

    if(Tesse.scale.x==1){
        isqueiroX=Tesse.x+175;
    }
    else{
        isqueiroX=Tesse.x-175;
    }

    var gradluz=sombra.context.createRadialGradient(isqueiroX,Tesse.y,tamanholuz*0.15,isqueiroX,Tesse.y,movingtamanho);
    gradluz.addColorStop(0,'rgba(255,205,205,1.0)');
    gradluz.addColorStop(1,'rgba(255,205,205,0.0)');

    sombra.context.fillStyle='rgb(15,15,15)';
    sombra.context.fillRect(0,0,MapasX,768);
    if(isqueiro==true && isqueiroAPAGA==false){
        sombra.context.beginPath();
        sombra.context.fillStyle=gradluz;
        sombra.context.arc(isqueiroX,Tesse.y,tamanholuz,0,Math.PI*2);
        sombra.context.fill();
    }

    sombra.dirty=true;
}
function updateLumi_Stage1(MapasX,versao){
    movingtamanho=tamanholuz-game.rnd.integerInRange(40,100,500);

    if(movingenergia==false){
        energia=energia+5;
        if(energia>900){
            movingenergia=true;
        }
    }
    if(movingenergia==true){
        energia=energia-5;
        if(energia<500){
            movingenergia=false;
        }
    }

    if(Tesse.scale.x==1){
        isqueiroX=Tesse.x+175;
    }
    else{
        isqueiroX=Tesse.x-175;
    }
    gradluz=sombra.context.createRadialGradient(isqueiroX,Tesse.y,tamanholuz*0.15,isqueiroX,Tesse.y,movingtamanho);
    gradluz.addColorStop(0,'rgba(255,205,205,1.0)');
    gradluz.addColorStop(1,'rgba(255,205,205,0.0)');

    gradluz_energia=sombra.context.createRadialGradient(90,300,900*.15,90,300,energia);
    gradluz_energia.addColorStop(0,'rgba(100,255,255,1.0)');
    gradluz_energia.addColorStop(1,'rgba(100,255,255,0.0)');

    gradluz_ball=sombra.context.createLinearGradient(100,0,700,0);
    gradluz_ball.addColorStop(0, 'rgba(255,255,255,0.0)');
    gradluz_ball.addColorStop(0.5, 'rgba(255,255,255,1.0)');
    gradluz_ball.addColorStop(1, 'rgba(255,255,255,0.0)');

    if(versao==1){
        sombra.context.fillStyle='rgb(100,100,100)';
    }
    else if(versao==2){
        sombra.context.fillStyle='rgb(15,15,15)';
    }
    sombra.context.fillRect(0,0,MapasX,768);

    sombra.context.beginPath();
    sombra.context.fillStyle=gradluz_energia;
    sombra.context.arc(90,300,900,0,Math.PI*2);
    sombra.context.fill();

    sombra.context.fillStyle=gradluz_ball;
    sombra.context.fillRect(0,0,MapasX,768);
    if(isqueiro==true){
        sombra.context.beginPath();
        sombra.context.fillStyle=gradluz;
        sombra.context.arc(isqueiroX,Tesse.y,tamanholuz,0,Math.PI*2);
        sombra.context.fill();
    }

    sombra.dirty=true;
}
function updateLumi_Stage4() {
    var movingtamanho = tamanholuz - game.rnd.integerInRange(40, 100, 500);

    if (Tesse.scale.x == 1) {
        isqueiroX = Tesse.x + 175;
    }
    else {
        isqueiroX = Tesse.x - 175;
    }
    var gradluz = sombra.context.createRadialGradient(isqueiroX, Tesse.y, tamanholuz * 0.15, isqueiroX, Tesse.y, movingtamanho);
    gradluz.addColorStop(0, 'rgba(255,205,205,1.0)');
    gradluz.addColorStop(1, 'rgba(255,205,205,0.0)');

    gradluz_energia = sombra.context.createLinearGradient(0, 0, 1842, 0);
    gradluz_energia.addColorStop(0, 'black');
    gradluz_energia.addColorStop(1, 'white');

    sombra.context.fillStyle = gradluz_energia;
    sombra.context.fillRect(0, 0, 1842, 1306);

    if (isqueiro == true && isqueiroAPAGA == false) {
        sombra.context.beginPath();
        sombra.context.fillStyle = gradluz;
        sombra.context.arc(isqueiroX, Tesse.y, tamanholuz, 0, Math.PI * 2);
        sombra.context.fill();
    }

    sombra.dirty = true;
}
function updateLumi_Stage5(){
    var movingtamanho=tamanholuz-game.rnd.integerInRange(40,100,500); 

    if(Tesse.scale.x==1){
        isqueiroX=Tesse.x+175;
    }
    else{
        isqueiroX=Tesse.x-175;
    }
    var gradluz=sombra.context.createRadialGradient(isqueiroX,Tesse.y,tamanholuz*0.15,isqueiroX,Tesse.y,movingtamanho);
    gradluz.addColorStop(0,'rgba(255,205,205,1.0)');
    gradluz.addColorStop(1,'rgba(255,205,205,0.0)');

    if (pisca_luz == true) {
        sombra.context.fillStyle = 'rgb(15,15,15)';
    }
    else {
        sombra.context.fillStyle = 'rgb(110,110,110)';
    }
    
    sombra.context.fillRect(0, 0, 11326,768);
    if(isqueiro==true && isqueiroAPAGA==false){
        sombra.context.beginPath();
        sombra.context.fillStyle=gradluz;
        sombra.context.arc(isqueiroX,Tesse.y,tamanholuz,0,Math.PI*2);
        sombra.context.fill();
    }

    sombra.dirty=true;
}