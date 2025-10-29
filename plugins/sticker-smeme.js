import uploadImage from '../lib/uploadImage.js';
import {sticker} from '../lib/sticker.js';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  const [atas, bawah] = text.split`|`;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw `*_responde a una imagen_*\n\n*ejemplo:* .smeme bot|pendejo`;
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Error`;
  const img = await q.download();
  const url = await uploadImage(img);
  const meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`;
  const stiker = await sticker(false, meme, global.packname, global.author);
  if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, '', {asSticker: 1});
};
handler.help = ['smeme <responder a imagen + texto>'];
handler.tags = ['sticker'];
handler.command = /^(smeme)$/i;


export default handler;
