import {sticker} from '../lib/sticker.js';
const handler = (m) => m;
handler.all = async function(m, {conn}) {
  const chat = global.db.data.chats[m.chat];

  if (!chat.isBanned && m.text.match(/(:v)/gi)) {
    if (!db.data.chats[m.chat].stickers) return;
    const vn = './storage/img/stickers/dosuve.webp';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {sticker: {url: vn}, fileName: 'sticker.webp', mimetype: 'image/webp', ptt: true}, {quoted: m});
  }
    if (!chat.isBanned && m.text.match(/(Inabakumori)/gi)) {
    if (!db.data.chats[m.chat].stickers) return;
    const vn = './storage/img/stickers/Ibkmr.webp';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {sticker: {url: vn}, fileName: 'sticker.webp', mimetype: 'image/webp', ptt: true}, {quoted: m});
  }
     if (!chat.isBanned && m.text.match(/(Patético|Patética)/gi)) {
    if (!db.data.chats[m.chat].stickers) return;
    const vn = './storage/img/stickers/patetico.webp';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {sticker: {url: vn}, fileName: 'sticker.webp', mimetype: 'image/webp', ptt: true}, {quoted: m});
  }
       if (!chat.isBanned && m.text.match(/(XD)/gi)) {
    if (!db.data.chats[m.chat].stickers) return;
    const pp = './storage/img/stickers/XD.webp';       const pp2 = './storage/img/stickers/XD2.webp';        const pp3 = './storage/img/stickers/XD3.webp';       const pp4 = './storage/img/stickers/XD4.webp';      
   // const vn = [pp, pp2;
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {sticker: {url: [pp, pp2, pp3, pp4].getRandom ()}, fileName: 'sticker.webp', mimetype: 'image/webp', ptt: true}, {quoted: m});
  }
  return !0;
};
export default handler;
