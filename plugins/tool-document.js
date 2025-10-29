import {toAudio} from '../lib/converter.js';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!m.quoted) throw `[📚] 𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒆 𝒆𝒍 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒂𝒖𝒅𝒊𝒐 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒆𝒏 𝒅𝒐𝒄𝒖𝒎𝒆𝒏𝒕𝒐*`;
  if (!text) throw `[📚] 𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒍𝒂 𝒎ú𝒔𝒊𝒄𝒂 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂 𝒄𝒐𝒍𝒐𝒄𝒂𝒓 𝒂𝒍 𝒅𝒐𝒄𝒖𝒎𝒆𝒏𝒕𝒐.*`;
  if (!/audio|video/.test(mime)) throw `[📚] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂𝒍 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒂𝒖𝒅𝒊𝒐 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒂 𝒅𝒐𝒄𝒖𝒎𝒆𝒏𝒕𝒐 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 :\n\n*${usedPrefix + command}*`;
  const media = await q.download?.();
  if (!media) throw '[⚠️] Error al descargar medios';
  m.reply('⏳ 𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐....');
  if (/video/.test(mime)) {
    return conn.sendMessage(m.chat, {document: media, mimetype: 'video/mp4', fileName: `${text}.mp4`}, {quoted: m});
  } else if (/audio/.test(mime)) {
    return conn.sendMessage(m.chat, {document: media, mimetype: 'audio/mpeg', fileName: `${text}.mp3`}, {quoted: m});
  }
};
handler.help = ['document *<audio/video>*'];
handler.tags = ['tools'];
handler.command = ['document', 'documento'];

export default handler;
