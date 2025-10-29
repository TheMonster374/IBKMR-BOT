const handler = async (m, {conn, isPrems}) => { // lastmiming
  const fkontak = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': false,
      'id': 'Halo',
    },
    'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    'participant': '0@s.whatsapp.net',
  };

  const user = global.db.data.users[m.sender];
  const premium = user.premium;
  const minar = `${pickRandom(['Que pro 😎 has minado',
    '🌟✨ Genial!! Obtienes',
    'WOW!! eres un(a) gran Minero(a) ⛏️ Obtienes',
    'Has Minado!!',
    '😲 Lograste Minar la cantidad de',
    'Tus Ingresos subiran gracias a que minaste',
    '⛏️⛏️⛏️⛏️⛏️ Minando',
    '🤩 SII!!! AHORA TIENES',
    'La minaria esta de tu lado, por ello obtienes',
    '😻 La suerte de Minar',
    '♻️ Tu Mision se ha cumplido, lograste minar',
    '⛏️ La Mineria te ha beneficiado con',
    '🛣️ Has encontrado un Lugar y por minar dicho lugar Obtienes',
    '👾 Gracias a que has minado tus ingresos suman',
    'Felicidades!! Ahora tienes', '⛏️⛏️⛏️ Obtienes'])}`;

  const pp = 'https://us.123rf.com/450wm/emojiimage/emojiimage1802/emojiimage180200332/95468325-mont%C3%B3n-de-piedras-preciosas-diamantes-azules-brillantes-concepto-de-joyas-caras-s%C3%ADmbolo-de-riqueza-d.jpg?ver=6';

  const diamond = `${pickRandom([0, 1, 0, 0, 2])}` * 1;
  const diamondpremium = `${pickRandom([3, 4, 5, 5, 5])}` * 1;

  const recompensas = {
    diamond: premium ? diamondpremium : diamond,
  };
  // let xp = Math.floor(Math.random() * 2000)
  const limit = `${pickRandom([2, 3, 4, 5, 0, 1, 6, 7, 8, 9, 10])}` * 1;
  const limitpremium = `${pickRandom([4, 7, 8, 9, 11, 13, 16, 17, 19, 22, 24, 26, 28, 30])}` * 1;

  const time = user.lastdiamantes + 900000; // 15 min
  if (new Date - user.lastdiamantes < 900000) return await conn.reply(m.chat, `*⏱️ 𝙑𝙪𝙚𝙡𝙫𝙖 𝙚𝙣 ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙖𝙧 𝙢𝙞𝙣𝙖𝙣𝙙𝙤 ${global.rpgshopp.emoticon('limit')}⛏️*`, fkontak, m);
  user.limit += premium ? limitpremium : limit;
  let texto = '';
  for (const reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue;
    user[reward] += recompensas[reward];
    texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`;
  }

  const gat = `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${limit} ${global.rpgshop.emoticon('limit')}*\n\n🍁 𝗕 𝗢 𝗡 𝗢\n\n${texto}\n${wm}`;
  await conn.sendFile(m.chat, pp, 'gata.jpg', gat, fkontak);
  /* conn.sendHydrated(m.chat, `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${limit} ${global.rpgshop.emoticon('limit')}*`,`🍁 𝗕 𝗢 𝗡 𝗢\n` + texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, pp, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['𝙈𝙞𝙣𝙖𝙧 𝙀𝙓𝙋 ⚡', `.minar`],
['𝙈𝙞𝙣𝙖𝙧 C𝗼𝗶𝗻𝘀 🐈', `.minar2`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `.menu`]
], m,)*/
  user.lastdiamantes = new Date * 1;
};
handler.help = ['minardiamantes'];
handler.tags = ['rpg'];
handler.command = ['minar3', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'];
handler.fail = null;
handler.exp = 0;
handler.register = true;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m y ' + seconds + ' s ';
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
