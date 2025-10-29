import fetch from 'node-fetch';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {text, conn}) => {
  if (!text) throw `*[❗] Ingresa el nombre del paquete que deseas buscar*`;
  try {
    const res2 = await googleImage(text);
    const sfoto = res2.getRandom();
    const json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkeysapi}&query=${text}`);
    const jsons = await json.json();
    const res = jsons.result.map(
        (v, index) => `🔍 • Resultado: ${1 + index}\n*📦 • Nombre:* ${v.title}\n*🗂️ • Autor:* ${v.author}\n*📎 • Url:* ${v.url}`,
    ).join`\n\n───\n\n`;
    await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m);
  } catch {
    await m.reply('*[❗] ha habido un error*');
  }
};
handler.tags = ['sticker', 'search'];
handler.command = ['stickersearch', 'searchsticker', 'stickerssearch', 'searchstickers'];
handler.help = ['stickersearch'];
export default handler;
