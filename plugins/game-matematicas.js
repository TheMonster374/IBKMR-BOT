const handler = async (m, {conn, args, usedPrefix, command}) => {
  conn.math = conn.math ? conn.math : {};

  if (args.length < 1) {
    throw `
   🧮 Dificultades disponibles : 
  
${Object.keys(modes).join(' | ')} 

_📌Ejemplo : ${usedPrefix+command} normal_
`.trim();
  }
  const mode = args[0].toLowerCase();
  if (!(mode in modes)) {
    throw `
  🧮 Dificultades disponibles : 
  
 ${Object.keys(modes).join(' | ')}

_📌Ejemplo : ${usedPrefix+command} normal_
`.trim();
  }

  const id = m.chat;
  if (id in conn.math) return conn.reply(m.chat, '⚠️ Todavía hay preguntas sin respuesta en este chat', conn.math[id][0]);
  const math = genMath(mode);
  conn.math[id] = [
    await conn.reply(m.chat, `▢ CUANTO ES *${math.str}*=\n\n_Tiempo:_ ${(math.time / 1000).toFixed(2)} segundos\n\n🎁 Recompensa : *${math.bonus} Pesos*`, m),
    math, 4,
    setTimeout(() => {
      if (conn.math[id]) conn.reply(m.chat, `⏳ Se acabó el tiempo!\nLa respuesta es : *${math.result}*`, conn.math[id][0]);
      delete conn.math[id];
    }, math.time),
  ];
};
handler.help = ['mates'];
handler.tags = ['game'];
handler.command = ['mates', 'mate', 'matemáticas', 'math'];


const modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 50],
  fácil: [-10, 10, -10, 10, '*/+-', 20000, 400],
  normal: [-40, 40, -20, 20, '*/+-', 40000, 600],
  difícil: [-100, 100, -70, 70, '*/+-', 30000, 800],
  extremo: [-999999, 999999, -999999, 999999, '*/', 30000, 1000],
};

const operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷',
};

function genMath(mode) {
  const [a1, a2, b1, b2, ops, time, bonus] = modes[mode];
  let a = randomInt(a1, a2);
  const b = randomInt(b1, b2);
  const op = pickRandom([...ops]);
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))();
  if (op == '/') [a, result] = [result, a];
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result,
  };
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from];
  from = Math.floor(from);
  to = Math.floor(to);
  return Math.floor((to - from) * Math.random() + from);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

handler.modes = modes;

export default handler;
