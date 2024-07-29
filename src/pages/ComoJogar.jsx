import React from 'react';

const ComoJogar = () => (
  <div>
    <h1>Como Jogar UNO</h1>
    <p>Preparação:<br></br>
    Embaralhe as cartas e distribua 7 para cada jogador.<br></br>
    O restante forma a pilha de compra, com a primeira carta virada para cima, iniciando a pilha de descarte.</p>
    <p>Exemplo: Você recebe as cartas: Amarelo 5, Verde 7, Vermelho Pular, Azul Inverter, Curinga, Azul 2, Amarelo +2. A carta inicial da pilha de descarte é um Vermelho 9.</p>
    <p>Primeira Jogada:<br></br>
    O jogador à esquerda do distribuidor começa.<br></br>
    Ele deve combinar a carta da pilha de descarte por cor, número ou símbolo.<br></br>
    Se não puder, compra uma carta da pilha de compra. Se a carta comprada for jogável, pode jogá-la na mesma vez.</p>
    <p>Exemplo: Você pode jogar o Vermelho Pular, pois coincide na cor com a carta da pilha de descarte.</p>
    <p>Sequência das Jogadas:<br></br>
    O jogo segue no sentido horário (ou anti-horário se alguém jogar a carta Inverter).<br></br>
    Cada jogador, na sua vez, tenta combinar a carta do topo da pilha de descarte.<br></br>
    Se não puder, compra uma carta. Se for jogável, pode jogá-la; se não, passa a vez.</p>
    <p>Exemplo: O próximo jogador joga um Amarelo +2. Você compra uma carta e pega um Verde 0, que não pode ser jogado. Passa a vez.</p>
    <p>Cartas Especiais:<br></br>
    +2 (Comprar Dois): O próximo jogador compra duas cartas e perde a vez.<br></br>
    Inverter: Muda o sentido do jogo.<br></br>
    Pular: O próximo jogador perde a vez.<br></br>
    Curinga: Escolha a cor que será jogada na próxima rodada.<br></br>
    +4 (Curinga Comprar Quatro): Escolha a cor e o próximo jogador compra quatro cartas e perde a vez. Só pode ser usada se não tiver outra carta da cor atual para jogar.</p>
    <p>Exemplo: A carta do topo é um Azul Inverter. Você joga o Azul 2. O jogo agora segue no sentido anti-horário.</p>
    <p>Fim do Jogo:<br></br>
    Quando tiver apenas uma carta na mão, grite "UNO!" antes de jogá-la.<br></br>
    Se esquecer e alguém notar antes do próximo jogador jogar, você compra duas cartas.<br></br>
    O primeiro jogador a ficar sem cartas vence a rodada.</p>
    <p>Dicas para Iniciantes:<br></br>
    Observe os oponentes: Tente prever que cor eles precisam e bloqueie-os com cartas +2 ou Pular.<br></br>
    Use o Curinga com sabedoria: Guarde-o para quando realmente precisar mudar a cor do jogo a seu favor.<br></br>
    Não acumule cartas +2 e +4: Jogue-as o mais rápido possível para não ser prejudicado se receberem uma de volta.<br></br>
    Grite "UNO!" sempre: É fácil esquecer, mas pode te custar duas cartas extras.</p>
  </div>
);

export default ComoJogar;
