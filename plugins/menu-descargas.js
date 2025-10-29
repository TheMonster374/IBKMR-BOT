import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen9;
    const img = './storage/img/menus/Menu6.jpg';
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
  *Hola,* ${taguser}

 ┏━⊜「 *=͟͟͞INFO USUARIO* 」
┃🤍 *𝑵𝒐𝒎𝒃𝒓𝒆* : *${taguser}
┃💎 *𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔* : *${limit}
┃⬆️ *𝑵𝒊𝒗𝒆𝒍* : *${level}
┃🪙 *Coins* : *${money}
┗━━━━━━━━━━━━━⬣
 ${readMore}
┏━⊜「 *=͟͟͞INFO BOT* 」
┃◣w◢ *CREADOR*: Wa.me/573136737414
┃👤 *TOTAL USUARIOS* : ${totalusr}
┗━━━━━━━━━━━━━⬣
 ${readMore}
 
┏━⊜ DESCARGAS 🔽╗
╭─────────────···
┃│ ${usedPrefix}fb <link>
┃│ ${usedPrefix}apk
┃│ ${usedPrefix}gitclone
┃│ ${usedPrefix}igstory <username>
┃│ ${usedPrefix}instagram
┃│ ${usedPrefix}mediafire
┃│ ${usedPrefix}mega
┃│ ${usedPrefix}play <búsqueda>
┃│ ${usedPrefix}play1 < busqueda >
┃│ ${usedPrefix}play2 < busqueda >
┃│ ${usedPrefix}play3 <formato> <búsqueda>
┃│ ${usedPrefix} play5 <búsqueda>
┃│ ${usedPrefix}soundcloud
┃│ ${usedPrefix}spotify <texto>
┃│ ${usedPrefix}spotifydl *<texto>*
┃│ ${usedPrefix}tiktok
┃│ ${usedPrefix}x (twitter)
┃│ ${usedPrefix}videodoc
┃│ ${usedPrefix}yta <yt url>
┃│ ${usedPrefix}ytv <yt url>
╰─────────────···
┗━━━━━━━━━━━━━⬣
                                    


`.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
    await conn.sendMessage(m.chat, {react: {text: '🔽', key: m.key}});
  } catch {
    conn.reply(m.chat, '*[❌] ocurrio un error inesperado al enviar el menu*', m);
  }
};
handler.command = /^(menudescargas|MenuDescargas|MENUDESCARGAS)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
