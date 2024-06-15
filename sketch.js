//variaveis  da bolinha
let xbolinha=230;
let ybolinha=200;
let diametro=30;
let raio=diametro/2;

//velocidade da bolinha
let velocidadeXbolinha=4;
let velocidadeYbolinha=4;

//variaveis da raquete
let xraquete=5
let yraquete=150
let raquetecomprimento=10
let raquetealtura=90

//variaveis da raqueteoponente
let xraqueteoponente=460
let yraqueteoponente=150
let velocidadeyoponente;

let collide2D=false;

//placar do jogo
let meuspontos=0;
let pontosoponente=0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha=loadSound("trilha.mp3");
  ponto=loadSound("ponto.mp3");
  raquetada=loadSound("raquetada.mp3");
}
  
function setup() {
  createCanvas(480, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
  verificacolisaobordas();
  mostraraquete(xraquete,yraquete);
  movimentaminharaquete();
  veificacolisaoraquete();
  mostraraquete(xraqueteoponente,yraqueteoponente);
  movimentaminharaqueteoponente();
  colisaobiblioteca(xraquete,yraquete);
  colisaobiblioteca(xraqueteoponente,yraqueteoponente);
  incluirplacar();
  marcaponto();
}

function mostrabolinha(){
  circle(xbolinha,ybolinha,diametro);
  }

function movimentabolinha(){xbolinha+=velocidadeXbolinha;
ybolinha+=velocidadeYbolinha;}

function verificacolisaobordas(){if (xbolinha+raio>width || xbolinha-raio<0)
  {velocidadeXbolinha*=-1;}

if(ybolinha+raio>height||ybolinha-raio<0)
  {velocidadeYbolinha*=-1;}}

function mostraraquete(x,y){rect(x,y,raquetecomprimento,raquetealtura)}

function movimentaminharaquete(){
  if(keyIsDown(UP_ARROW)){
    yraquete-=10;} 
  
  if(keyIsDown(DOWN_ARROW)){
    yraquete+=10; }
  
}

function veificacolisaoraquete(){
 if (xbolinha - raio < xraquete + raquetecomprimento
&& ybolinha - raio < yraquete + raquetealtura
&& ybolinha + raio > yraquete){
  velocidadeXbolinha*=-1; 
   raquetada.play();
 }
  
}

function movimentaminharaqueteoponente(){
  if(keyIsDown(87)){
    yraqueteoponente-=10;} 
  
  if(keyIsDown(83)){
    yraqueteoponente+=10; }
}

function colisaobiblioteca(x,y){ collide2D=collideRectCircle(x,y,raquetecomprimento,raquetealtura,xbolinha,ybolinha,raio)
if(collide2D){
 velocidadeXbolinha*=-1
raquetada.play();}
                                       
}

function incluirplacar(){
stroke(255)
textAlign(CENTER)
textSize(20)
fill(color(255,140,0))
rect(130,10,40,20)
fill(255)
text(meuspontos,150,27)
fill(color(255,140,0))
rect(280,10,40,20)
fill(255)
text(pontosoponente,300,27)

}

function marcaponto(){
 if(xbolinha>465){
   meuspontos+=1
   ponto.play()
 }
 if(xbolinha<15){
   pontosoponente+=1
   ponto.play()
 }
  
}