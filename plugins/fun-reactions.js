//kiss
import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `el nsfw esta desactivado`;
    
if (!text) throw `*Por favor, menciona el usuario*`;
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
    
 let pp = "https://telegra.ph/file/2fa66eb61a800b0fc622b.mp4"
let pp2 = "https://telegra.ph/file/07252543eeec9dfa7c8a4.mp4"
let pp3 = "https://telegra.ph/file/fd2b06eacd36dff5bbba1.mp4"
let pp4 = "https://telegra.ph/file/338a37f5214bfd59edf0c.mp4"
let pp5 = "https://telegra.ph/file/b8811e1304623bb29f65a.mp4"
let pp6 = "https://telegra.ph/file/4a9d8db2e609b1339789a.mp4"

  try {
    const locale = 'es-ES';
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `

        _${taguser} HA BESADO A ${text} 😳💋_
 
  
    `.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6].getRandom() }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6].getRandom() }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❌] ocurrio un error inesperado*', m);
  }
};
handler.help = ['kiss'].map((v) => v + ' <@usuario>');
handler.tags = ['fun'];
handler.command = /^(kiss)$/i;
handler.register = true;
export default handler;

//pat
import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `el nsfw esta desactivado`;
    
if (!text) throw `*Por favor, menciona el usuario*`;
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
    
 let pp = "https://telegra.ph/file/808cef2574fefe25de2cd.mp4"
let pp2 = "https://telegra.ph/file/7900b16e69af07edc3ef1.mp4"
let pp3 = "https://telegra.ph/file/44455e653081edc80972a.mp4"
let pp4 = "https://telegra.ph/file/e3434f922d670014f3c3e.mp4"
let pp5 = "https://telegra.ph/file/e2e7e1872775398ebfc8d.mp4"
let pp6 = "https://telegra.ph/file/7e4c0e58ba89deca79a34.mp4"

  try {
    const locale = 'es-ES';
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `

        _${taguser} HA ACARICIADO A ${text} 🥰🥹_
 
  
    `.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6].getRandom() }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6].getRandom() }, gifPlayback: true, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❌] ocurrio un error inesperado*', m);
  }
};
handler.help = ['pat'].map((v) => v + ' <@usuario>');
handler.tags = ['fun'];
handler.command = /^(pat)$/i;
handler.register = true;
export default handler;

                 
