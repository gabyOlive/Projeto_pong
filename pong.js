//variávei de bolinha
let xBolinha = 300;
let yBolinha = 200; 
let diametro = 13;
let raio = diametro / 2 :

//velocidade da bolinha 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6; 
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete 
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente 
let xRaqueteOponente = 585;
let yRaqueOponente = 150;
let velocidadeYOponente;

let colidiu = false; 

//placar do jogo 
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo 
let ponto;
let raquetada;
let trilha;

function preload(){
   trilha = loadSound("trilha,mp3`);
 raquetada = loadSound("raquetada.mp3");
  ponto = loadSound(ponto.mp3");
}           
                   
   function setup() {
     createCanvas(600, 400);
    trilha.loop():
}
    
    function draw() {
      background(0)
    mostraBolinha();
      movimentarBolinha();
      verificarColisaoBorda();
      mostraRaquete(raquete, yRaquete);
      movimentarMinhaRaquete();
      //verificaColisaoRaquete();
      verificarColisaoRaquete(xraquete, yRaquete);
      mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
      movimentaRaqueteOponente();
      verificarColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
      incluiPlacar();
      marcaPonto();
}
      
function mostraBolinha()(
        circle(xBolinha, yBolinha, diametro);
}
  
  function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}
    
    function verificaColisaoBorda(){
      if (xBolinha + raio> width ||
          xBolinha - raio< 0)(
        velocidadeXBolinha += -1;
        )
      if (yBolinha + raio> height ||
          yBolinha - raio < 0)(
        velocidadeYBolinha += -1;
        }
    }
      
      function mostraRaquete(x,y)(
        rect(x,y, raqueteComprimente,
             raqueteAltura);
       }
      
      function movimentaMinhaRaquete(){
        if (keyIsDown(UP_ARROW)){
          yRaquete -= 10;
        }
          if (keyIsDonw(DOWN_ARROW){
            yRaquete += 10;
        }
  }
  
  function verificaColisaoRaquete(){
    if (xBolinha - raio < xraquete + raqueteComprimento && yBolinha - raio < yRaquete + raquete + raqueteAltura && yBolinha + raio > yRquete){
      velocidadeXBolinha *= -1;
     }
}
        
    function verificaColisaoRaque(x, y){
      colidiu = colideRectCircle(x,y,raqueteComprimento,raqueteAltura,
xBolinha,ybolinha,raio);
      if (colidiu){
        velocidadeXBolinha *= -1;
        Raquetada.play();
      }
    }
    
    function movimentaRaqueteOponente(){
      velocidaeOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 38;
      yraqueteOponente += velocidadeYOponente
    }
    
    function incluiPlcr(){
      stroke(255);
     textAlign(CENTER);
      textSize(16);
      fill(color(255, 140, 0));
      rect(150, 10, 40, 20);
      fill(255);
      text(meusPonto, 170, 26);
      fill(color(255, 140 0));
      rect(450, 10 40, 20);
      fill(255);
      text(pontoDoOponente,470, 26);
    }
    
    function marcaPonto(){
      if (xBolinha > 500){
        meuspontos += 1;
        ponto.play();
      }
      if (xBolinha < 10){
        pontosDoOponente += 1;
        ponto.play():
      }
    }
