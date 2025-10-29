// NO EDITAR, PUEDE GENERAR BUGS EN EL BOT

import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  global.img7 = fs.readFileSync('./Donar.mp4');
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = img7;
    const img = './Donar.mp4';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const totalusrReg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const totalusr = Object.keys(global.db.data.users).length;
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0';
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
  *✨¡ℍ𝕠𝕝𝕒 ${taguser}!*
>------------[🤍]-------------<

𝒀𝒐 𝒕𝒆𝒏𝒈𝒐 𝒖𝒏 𝒔𝒆𝒓𝒗𝒊𝒅𝒐𝒓 𝒑𝒓𝒊𝒗𝒂𝒅𝒐 𝒒𝒖𝒆 me 𝒉𝒂𝒄𝒆 *𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒂𝒓 24/7* 𝒚 𝒏𝒐 𝒕𝒆𝒏𝒈𝒂 𝒍𝒂𝒈, 𝒑𝒆𝒓𝒐 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒏𝒐 𝒄𝒓𝒆𝒐 𝒒𝒖𝒆 𝒕𝒆𝒏𝒈𝒂 𝒆𝒍 𝒅𝒊𝒏𝒆𝒓𝒐 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆 𝒑𝒂𝒓𝒂 𝒎𝒂𝒏𝒕𝒆𝒏𝒆𝒓 𝒆𝒍 𝒔𝒆𝒓𝒗𝒊𝒅𝒐𝒓 𝒂𝒄𝒕𝒊𝒗𝒐,*¡𝒂𝒍𝒍í 𝒆𝒏𝒕𝒓𝒂𝒔 𝒕ú!*  🫵
 
𝑺𝒊 𝒑𝒖𝒅𝒊𝒆𝒓𝒂𝒔 𝒄𝒐𝒍𝒂𝒃𝒐𝒓𝒂𝒓 𝒄𝒐𝒏 *1 𝒅ó𝒍𝒂𝒓* 𝒑𝒐𝒓 𝒍𝒐 𝒎𝒆𝒏𝒐𝒔, 𝒍𝒆 𝒂𝒚𝒖𝒅𝒂𝒓í𝒂𝒔 𝒃𝒂𝒔𝒕𝒂𝒏𝒕𝒆 𝒂 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓, 𝒂𝒍 𝒊𝒈𝒖𝒂𝒍 𝒒𝒖𝒆 𝒂 𝒎𝒊 𝒑𝒂𝒓𝒂 𝒔𝒆𝒈𝒖𝒊𝒓 𝒂𝒄𝒕𝒊𝒗𝒂,*¡𝑻𝑶𝑫𝑶𝑺 𝑳𝑶𝑺 𝑫Í𝑨𝑺!* 😱

𝑱𝒖𝒏𝒕𝒐𝒔 𝒑𝒐𝒅𝒆𝒎𝒐𝒔 𝒉𝒂𝒄𝒆𝒓 𝒒𝒖𝒆 𝒚𝒐 𝒔𝒆𝒂 𝒆𝒕𝒆𝒓𝒏𝒂, (𝒚 𝒓𝒆𝒗𝒊𝒗𝒊𝒓 𝒍𝒂 𝑼𝑹𝑺𝑺 🤑)

>------------[🫂]-------------<

*👇𝑨𝒒𝒖í 𝒂𝒃𝒂𝒋𝒐 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓á𝒔 𝒆𝒍 𝒍𝒊𝒏𝒌 𝒗𝒊𝒂 𝑷𝒂𝒚𝒑𝒂𝒍:*

https://paypal.me/monster373505?country.x=CO&locale.x=es_XC

> INABAKUMORI-BOT                           By Monster



 `.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      /* conn.sendMessage(m.chat, {video: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } */
      conn.sendMessage(m.chat, {video: pp, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      /* conn.sendMessage(m.chat, {video: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    */ conn.sendMessage(m.chat, {video: pp, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❌] ocurrio un error inesperado al enviar el menu*', m);
  }
};
handler.command = /^(donar)$/i;
handler.tags = ['main'];
handler.help = ['donar'];
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
