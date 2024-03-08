import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw '𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑒 𝑜 𝑒𝑡𝑖𝑞𝑢𝑒𝑡𝑒 𝑢𝑛𝑎 𝑖𝑚𝑎𝑔𝑒𝑛';
  m.reply('[⌛] 𝐸𝑛𝑣𝑖𝑎𝑛𝑑𝑜...');
  const data = await q.download?.();
  const image = await uploadImage(data);
  try {
    const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (i) {
    try {
      const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
      await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
    } catch (a) {
      try {
        const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
        await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
      } catch (e) {
        throw '[❌] 𝐸𝑟𝑟𝑜𝑟, 𝑣𝑒𝑟𝑖𝑓𝑖𝑐𝑎 𝑞𝑢𝑒 𝑒𝑛 𝑙𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑠𝑒𝑎 𝑣𝑖𝑠𝑖𝑏𝑙𝑒 𝑙𝑎 𝑝𝑒𝑟𝑠𝑜𝑛𝑎';
      }
    }
  }
};
handler.help = ['toanime'];
handler.tags = ['fun'];
handler.command = /^(jadianime|toanime)$/i;
export default handler;
