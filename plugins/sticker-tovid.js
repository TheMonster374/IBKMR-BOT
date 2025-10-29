import {webp2mp4} from '../lib/webp2mp4.js';
import {ffmpeg} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒗𝒊𝒅𝒆𝒐 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒆𝒏 𝒗𝒊𝒅𝒆𝒐\n\n*${usedPrefix + command}*`;
  const mime = m.quoted.mimetype || '';
  if (!/webp|audio/.test(mime)) throw `𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒂𝒖𝒅𝒊𝒐 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒆𝒏 𝑽𝒊𝒅𝒆𝒐\n\n*${usedPrefix + command}*`;
  const media = await m.quoted.download();
  let out = Buffer.alloc(0);
  if (/webp/.test(mime)) {
    out = await webp2mp4(media);
  } else if (/audio/.test(mime)) {
    out = await ffmpeg(media, [
      '-filter_complex', 'color',
      '-pix_fmt', 'yuv420p',
      '-crf', '51',
      '-c:a', 'copy',
      '-shortest',
    ], 'mp3', 'mp4');
  }
  await conn.sendFile(m.chat, out, 'error.mp4', '*FUE UN ÉXITO!!*', m, 0, {thumbnail: out});
};
handler.help = ['tovideo'];
handler.tags = ['sticker'];
handler.command = ['tovideo'];
export default handler;
