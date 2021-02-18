var db;
var form,player,game;
var gameState = 0;
var playerCount;
function setup(){
    createCanvas(500,500);
    db = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
    drawSprites();
}

