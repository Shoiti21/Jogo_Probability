var text_Stage1=["O que aconteceu?","Estranho, a máquina está ligada e parece normal, mas por que não tá funcionando? E cadê o Jay?"];
var text_Stage2=["Vocês buscaram por algo maior do que deveriam compreender. Por conta do vosso ato, a humanidade inteira sofrerá as consequências.","O-o que foi isso? A energia acabou. M-mas o que aconteceu com as luzes de emergência? Preciso encontrar alguma forma reestabelecer a energia no prédio. Eu vou ter que ligar o gerador manualmente.","Espera, a sala do gerador é aqui..."];
var text_Stage3=["Jay?! O que aconteceu? Por onde esteve?","Ei, tá me ouvindo?!","(suspiros) Doutora?! O que tá acontecendo?! Me ajuda, ele vai me pegar!","AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!","J-Jay?! Onde você foi?! Preciso dar um jeito nesse gerador logo. Mas... que sala é essa?","O-o que aconteceu?! Eu só posso estar ficando maluca.","Onde o fusível foi parar?"];
var text_Stage4=["O-o que aconteceu?! Eu estou ficando maluca...","Onde o fusível foi parar?","Isso... é obra da máquina?"];
var text_Stage5=["O que foi isso?","Eu estive te esperando, Tesse.","Q-quem é você?!","A hora da sua punição chegou."];

var text_frase = [];

function DiagBox(texto,tempo) {
    diag = game.add.text(475, 617, '', { font: "25px Times New Roman", fill: "#ffffff", align: "left", boundsAlignH: "left", boundsAlignV: "top", wordWrap: true, wordWrapWidth: 630 });
    diag.fixedToCamera=true;
    wordDelay=tempo;
    text_frase = texto.split(' ');
    wordIndex = 0;
    game.time.events.repeat(wordDelay, text_frase.length, nextWord, this);
}
function nextWord() {
    diag.text = diag.text.concat(text_frase[wordIndex] + " ");
    wordIndex++;
}
