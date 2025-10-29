const handler = async (m, {conn, args, text, usedPrefix, command}) => {
  const ruletaresultado = 'https://i.pinimg.com/originals/b4/f7/a6/b4f7a68e142e03ac84221.mp4';

  const amount = parseInt(args[0]);
  const color = args[1]?.toLowerCase();
  if (args.length < 2 || !color) throw `*_ingresa la cantidad que quieres apostar y el color rojo o negro._*`;
  const colores = ['rojo', 'negro'];
  const colour = colores[Math.floor(Math.random() * colores.length)];
  const user = global.db.data.users[m.sender];
  if (isNaN(amount) || amount < 10) throw `*_Lo minimo para apostar son 10 Coins 🪙_*.`;
  if (!colores.includes(color)) throw '*_Debes especificar un color válido: rojo o negro_*';
  if (user.exp < amount) throw '*_¡No tienes suficiente Coins!_*';
  if (amount > 100000) throw `*_No puedes apostar mas de 100000 Coins 🪙_.*`;
  let result = '';
  if (colour == color) {
    result = `${colour == 'rojo' ? '*La pelota paro en el color:* 🔴' : '*La pelota paro en el color:* ⚫'} \n\n *+ ${amount * 2} Coins 🪙*`;
    user.exp += amount * 2;
  } else {
    result = `${colour == 'rojo' ? '*La pelota paro en el color:* 🔴' : 'La pelota paro en el color:* ⚫'} \n\n *- ${amount} Coins 🪙*`;
    user.exp -= amount;
  }
  /* conn.sendMessage(m.chat, { video: { url: ruletaresultado }, caption: result }, { quoted: m })
*/
  /* conn.sendMessage(m.chat, { video: { url: ruletaresultado }, gifPlayback: true, caption: result }, { quoted: m })*/
  conn.sendMessage(m.chat, {video: {url: ruletaresultado}, gifPlayback: true, caption: result,
    contextInfo: {
      'forwardingScore': 200,
      'isForwarded': false,
      'externalAdReply': {
        showAdAttribution: false,
        title: `CANAL DE WHATSAPP`,
        body: `🤍 Unete al canal OFC`,
        mediaType: 1,
        sourceUrl: 'https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t',
        thumbnailUrl: 'https://i.pinimg.com/originals/b4/a1/91/b4a191e1d7f4d288f3b1204b159a9ff8.gif',
      }}}, {quoted: m});
};
handler.help = ['ruleta apuesta/color'];
handler.tags = ['game'];
handler.command = ['ruleta', 'rt'];


export default handler;
