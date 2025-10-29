import {canLevelUp, xpRange} from '../lib/levelling.js';
import {levelup} from '../lib/canvas.js';

// import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber';
import {promises} from 'fs';
import {join} from 'path';
const img = 'https://i.pinimg.com/originals/da/4b/9b/da4b9b9a26146c50c951410d9d2f1037.jpg';
const img2 = './src/Channel.jpg';
const handler = async (m, {conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner}) => {
  const {levelling} = '../lib/levelling.js';
  // let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const {min, xp, max} = xpRange(level, global.multiplier);
  const d = new Date(new Date + 3600000);
  const locale = 'es';
  const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
  const week = d.toLocaleDateString(locale, {weekday: 'long'});
  const date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
  const time = d.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  const _uptime = process.uptime() * 1000;
  let _muptime;
  if (process.send) {
    process.send('uptime');
    _muptime = await new Promise((resolve) => {
      process.once('message', resolve);
      setTimeout(resolve, 1000);
    }) * 1000;
  }
  const {money} = global.db.data.users[m.sender];
  const muptime = clockString(_muptime);
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const replace = {
    '%': '%',
    'p': _p, uptime, muptime,
    'me': conn.getName(conn.user.jid),
    'exp': exp - min,
    'maxexp': xp,
    'totalexp': exp,
    'xp4levelup': max - exp,
    level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
    'readmore': readMore,
  };
  text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name]);
  // let name = await conn.getName(m.sender)
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const mentionedJid = [who];
  const username = conn.getName(who);
  // let user = global.db.data.users[m.sender]
  // user.registered = false
  // let handler = async (m, { conn }) => {
  // let { role } = global.db.data.users[m.sender]
  const name = conn.getName(m.sender);
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const {min, xp, max} = xpRange(user.level, global.multiplier);
    throw `
┌───⊷ *𝑵𝑰𝑽𝑬𝑳*
┆ *𝑵𝑶𝑴𝑩𝑹𝑬*
┆ ${name}
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝑵𝑰𝑽𝑬𝑳:* *${user.level}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝑹𝑨𝑵𝑮𝑶:* ${user.role}
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝑿𝑷:* *${user.exp - min}/${xp}*
╰━⊰🤍 INABAKUMORI-Bot⊱━დ

_*te falta ${max - user.exp} de XP para subir de nivel*_
`.trim();
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const teks = `Bien hecho! ${conn.getName(m.sender)} Nivel: ${user.level}`;
    const str = `┌───⊷ *𝑵𝑰𝑽𝑬𝑳*
┆ *𝑵𝑰𝑽𝑬𝑳 𝑨𝑵𝑻𝑬𝑹𝑰𝑶𝑹:* *${before}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝑵𝑰𝑽𝑬𝑳 𝑨𝑪𝑻𝑼𝑨𝑳:* *${user.level}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝑹𝑨𝑵𝑮𝑶:* ${role}
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝑭𝑬𝑪𝑯𝑨:* *${new Date().toLocaleString('id-ID')}*
╰━⊰🤍 INABAKUMORI-Bot⊱━დ

_*Cuanto mas interactues con el bot mayor sera tu nivel!!*_
`.trim();
    try {
      const img = await levelup(teks, user.level);
      conn.sendMessage(m.chat, {image: {url: 'https://i.pinimg.com/originals/b4/a1/91/b4a191e1d7f4d288f3b1204b159a9ff8.gif'}, caption: str, mentions: conn.parseMention(str)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
      // conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
    } catch (e) {
      /* conn.sendMessage(m.chat, {text: str, contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid:[who], image: {url: img}, "externalAdReply":  {"showAdAttribution": true, "renderLargerThumbnail": true, "thumbnail": img2.getRandom(), "title": wm, "containsAutoReply": true, "mediaType": 1, "mediaUrl": 'https://i.pinimg.com/originals/b4/a1/91/b4a191e1d7f4d288f3b1204b159a9ff8.gif', "sourceUrl": 'https://whatsapp.com/channel/0029VaPhM3S3wtbBXOzf6t0j', }}}, { quoted: m })*/
      conn.sendMessage(m.chat, {text: str,
        contextInfo: {
          'forwardingScore': 200,
          'isForwarded': false,
          'externalAdReply': {
            showAdAttribution: false,
            title: `CANAL DE WHATSAPP`,
            body: `🤍 Unete al canal OFC`,
            mediaType: 1,
            sourceUrl: 'https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t',
            thumbnailUrl: 'https://i.pinimg.com/originals/b4/a1/91/b4a191e1d7f4d288f3b1204b159a9ff8.gif',
          }}}, {quoted: m});
    }
  }
};
// m.reply(str)

handler.help = ['levelup'];
handler.tags = ['rpg'];
handler.command = ['nivel', 'lvl', 'levelup', 'level'];
handler.exp = 0;
export default handler;
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
