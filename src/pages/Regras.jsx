import React from 'react';

const Regras = () => (
  <div>
    <h1>Regras do UNO</h1>
    <p>Objetivo: Ser o primeiro jogador a ficar sem cartas na mão.</p>
    <p>Preparação:<br></br>
      Embaralhe as cartas e distribua 7 cartas para cada jogador.<br></br>
      Coloque o restante das cartas viradas para baixo para formar a pilha de compra.<br></br>
      Vire a primeira carta da pilha de compra para cima e coloque ao lado para iniciar a pilha de descarte.</p>
      <p>Como jogar:<br></br>
      O jogador à esquerda do distribuidor começa.<br></br>
      Em sua vez, o jogador deve combinar a carta do topo da pilha de descarte por cor, número ou símbolo.<br></br>
      Se o jogador não tiver uma carta para jogar, ele deve comprar uma carta da pilha de compra. Se a carta comprada puder ser jogada, ele pode jogá-la imediatamente.<br></br>
      O jogo continua no sentido horário.</p>
      <p>Cartas Especiais e suas Funções:<br></br>
      Inverter: Muda a direção do jogo (de horário para anti-horário e vice-versa).<br></br>
      Pular: O próximo jogador perde a vez.<br></br>
      Comprar Dois (+2): O próximo jogador compra duas cartas e perde a vez.<br></br>
      Curinga: O jogador que jogar esta carta escolhe a cor que deve ser jogada em seguida.<br></br>
      Curinga Comprar Quatro (+4): O jogador que jogar esta carta escolhe a cor que deve ser jogada em seguida e o próximo jogador compra quatro cartas e perde a vez. Esta carta só pode ser jogada se o jogador não tiver nenhuma outra carta da cor atual para jogar.</p>
      <p>Regra do UNO:<br></br>
      Quando um jogador tiver apenas uma carta na mão, ele deve gritar "UNO!" antes de jogar a penúltima carta. Se ele esquecer e outro jogador perceber antes do início da próxima jogada, o jogador que esqueceu de gritar "UNO!" deve comprar duas cartas.</p>
      <p>Final do jogo:<br></br>
      O jogo termina quando um jogador se livra de todas as suas cartas.</p>
  </div>
);

export default Regras;
