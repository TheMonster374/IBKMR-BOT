import fetch from 'node-fetch';
import PDFDocument from 'pdfkit';
import {extractImageThumb} from '@whiskeysockets/baileys';
const handler = async (m, {conn, text, usedPrefix, command, args}) => {
  if (!db.data.chats[m.chat].nsfw && m.isGroup) throw '*❗ 𝑙𝑜𝑠 𝑐𝑜𝑚𝑎𝑛𝑑𝑜𝑠 +18 𝑒𝑠𝑡𝑎𝑛 𝑑𝑒𝑠𝑎𝑐𝑡𝑖𝑣𝑎𝑑𝑜𝑠, 𝑠𝑖 𝑞𝑢𝑖𝑒𝑟𝑒𝑠 𝑎𝑐𝑡𝑖𝑣𝑎𝑟𝑙𝑜𝑠 𝑢𝑠𝑎 !enable nsfw*';
  if (!text) throw `[📚] 𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑒𝑙 𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒 𝑎𝑙𝑔𝑢𝑛𝑎 𝑐𝑎𝑡𝑒𝑔𝑜𝑟𝑖𝑎 𝑑𝑒 ℎ𝑒𝑛𝑡𝑎𝑖 \n\n *[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:*: ${usedPrefix + command} miku*`;
  try {
    m.reply(global.wait);
    const res = await fetch(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkeysapi}&query=${text}`);
    const json = await res.json();
    const aa = json.result[0].id;
    const data = await nhentaiScraper(aa);
    const pages = [];
    const thumb = `https://external-content.duckduckgo.com/iu/?u=https://t.nhentai.net/galleries/${data.media_id}/thumb.jpg`;
    data.images.pages.map((v, i) => {
      const ext = new URL(v.t).pathname.split('.')[1];
      pages.push(`https://external-content.duckduckgo.com/iu/?u=https://i7.nhentai.net/galleries/${data.media_id}/${i + 1}.${ext}`);
    });
    const buffer = await (await fetch(thumb)).buffer();
    const jpegThumbnail = await extractImageThumb(buffer);
    const imagepdf = await toPDF(pages);
    await conn.sendMessage(m.chat, {document: imagepdf, jpegThumbnail, fileName: data.title.english + '.pdf', mimetype: 'application/pdf'}, {quoted: m});
  } catch {
    throw `*[❌] Intenta con una categoria diferente*`;
  }
};
handler.help = ['hentaipdf'];
handler.tags = ['nsfw', 'search'];
handler.command = /^(hentaipdf)$/i;
export default handler;
async function nhentaiScraper(id) {
  const uri = id ? `https://cin.guru/v/${+id}/` : 'https://cin.guru/';
  const html = (await axios.get(uri)).data;
  return JSON.parse(html.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]).props.pageProps.data;
}
function toPDF(images, opt = {}) {
  return new Promise(async (resolve, reject) => {
    if (!Array.isArray(images)) images = [images];
    const buffs = []; const doc = new PDFDocument({margin: 0, size: 'A4'});
    for (let x = 0; x < images.length; x++) {
      if (/.webp|.gif/.test(images[x])) continue;
      const data = (await axios.get(images[x], {responseType: 'arraybuffer', ...opt})).data;
      doc.image(data, 0, 0, {fit: [595.28, 841.89], align: 'center', valign: 'center'});
      if (images.length != x + 1) doc.addPage();
    }
    doc.on('data', (chunk) => buffs.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(buffs)));
    doc.on('error', (err) => reject(err));
    doc.end();
  });
}


/* import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*❗ 𝖫𝗈𝗌 𝖢𝗈𝗆𝖺𝗇𝖽𝗈𝗌 +𝟷𝟾 𝖤𝗌𝗍𝖺́𝗇 𝖣𝖾𝗌𝖺𝖼𝗍𝗂𝗏𝖺𝖽𝗈 𝖤𝗇 𝖤𝗌𝗍𝖾 𝖦𝗋𝗎𝗉𝗈, 𝖲𝗂 𝖤𝗋𝖾𝗌 𝖠𝖽𝗆𝗂𝗇 𝖸 𝖣𝖾𝗌𝖾𝖺𝗌 𝖠𝖼𝗍𝗂𝗏𝖺𝗋𝗅𝗈, 𝖴𝗌𝖾 𝖤𝗌𝗍𝖾 𝖢𝗈𝗆𝖺𝗇𝖽𝗈 #enable modohorny*'
if (!text) throw `*[❗] 𝘐𝘯𝘨𝘳𝘦𝘴𝘦 𝘌𝘭 𝘕𝘰𝘮𝘣𝘳𝘦 𝘋𝘦 𝘈𝘭𝘨𝘶𝘯𝘢 𝘊𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘢 𝘋𝘦 𝘏𝘦𝘯𝘵𝘢𝘪, 𝘌𝘫𝘦𝘮𝘱𝘭𝘰: ${usedPrefix + command} miku*`
try {
m.reply(global.wait)
let res = await fetch(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let aa = json.result[0].id
let aa2 = json.result[0].title_native
let res2 = await fetch(`https://api.lolhuman.xyz/api/nhentaipdf/${aa}?apikey=${lolkeysapi}`)
let json2 = await res2.json()
let aa3 = json2.result
await conn.sendMessage(m.chat, { document: { url: aa3 }, mimetype: 'application/pdf', fileName: `${aa2}.pdf` }, { quoted: m })
} catch {
throw `*[❗] Eʀʀᴏʀ Iɴᴛᴇɴᴛᴇ Cᴏɴ Oᴛʀᴀ Cᴀᴛᴇɢᴏʀɪᴀ*`
}}
handler.command = /^(hentaipdf)$/i
export default handler*/
