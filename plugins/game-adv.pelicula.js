import fs from 'fs';
const timeout = 30000;
const poin = 1000;
const md2 = 'https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t';

const handler = async (m, {conn, usedPrefix}) => {
  conn.tekateki = conn.tekateki ? conn.tekateki : {};
  const id = m.chat;
  if (id in conn.tekateki) {
    conn.reply(m.chat, 'Todavía hay adivinanzas sin responder en este chat', conn.tekateki[id][0]);
    throw false;
  }
  const tekateki = JSON.parse(fs.readFileSync(`./src/game/peliculas.json`));
  const json = tekateki[Math.floor(Math.random() * tekateki.length)];
  const _clue = json.response;
  const clue = _clue.replace(/[A-Za-z]/g, '_');
  const caption = `
ⷮ *${json.question}*

*• Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
*• Bono:* +${poin} Exp
`.trim();
  conn.tekateki[id] = [
    await // conn.reply(m.chat, caption, m),
    conn.sendMessage(m.chat, {text: caption, contextInfo: {'forwardingScore': 9999999, 'isForwarded': true, 'externalAdReply': {'showAdAttribution': true, 'containsAutoReply': true, 'body': `• ADIVINAN LA PELÍCULA CON EMOJIS •`, 'previewType': 'PHOTO', 'thumbnail': imagen1, 'sourceUrl': md2}}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}), json, poin, setTimeout(async () => {
      if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!\n*Respuesta:* ${json.response}`, conn.tekateki[id][0]);
      delete conn.tekateki[id];
    }, timeout),
  ];
};
handler.help = ['advpe'];
handler.tags = ['game'];
handler.command = /^(advpe|adv|peliculas|pelicula)$/i;
export default handler;
