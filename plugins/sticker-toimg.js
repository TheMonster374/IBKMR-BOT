import {webp2png} from '../lib/webp2mp4.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `responde a un sticker con: *${usedPrefix + command}*`;
  const q = m.quoted ? m.quoted : m;
  const name = await conn.getName(m.sender);
  const mime = q.mediaType || '';
  if (!/sticker/.test(mime)) throw `responde a un sticker con: *${usedPrefix + command}*`;
  const media = await q.download();
  const out = await webp2png(media).catch((_) => null) || Buffer.alloc(0);
  await conn.sendFile(m.chat, out, 'out.png', 'pedido por: ' + name, m);
};
handler.help = ['toimg (responer a sticker)'];
handler.tags = ['sticker'];
handler.command = ['toimg'];

export default handler;
