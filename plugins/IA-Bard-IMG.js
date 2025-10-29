import fetch from 'node-fetch';
import uploader from '../lib/uploadImage.js';

const handler = async (m, {conn, text, command, usedPrefix}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (/image/g.test(mime) && !/webp/g.test(mime)) {
    const buffer = await q.download();

    conn.sendPresenceUpdate('composing', m.chat);

    const media = await (uploader)(buffer);
    const json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json();

    conn.sendMessage(m.chat, {text: json.result}, {quoted: m});
  } else return conn.reply(m.chat, `*_manda una imagen con el comando y el texto a buscar_*\n\n*ejemplo:* !bardimg dame informacion de lo que sale en la imagen `, m, fake);
};
handler.help = ['bardimg'];
handler.tags = ['ia'];
handler.command = /^(bardimg|bardimage)$/i;


export default handler;
