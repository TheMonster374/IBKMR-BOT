import {promises} from 'fs';
import {join} from 'path';
import fetch from 'node-fetch';
import {xpRange} from '../lib/levelling.js';

const tags = {
  'main': ' `《ɪɴꜰᴏ》` ℹ️',
  'game': ' `《ᴊᴜᴇɢᴏꜱ》` 🎮',
  'rpg': ' `《ʀᴘɢ》` ⚔️',
  'nsfw': ' `《ɴꜱꜰᴡ》` 🔞',
  'jadibot': ' `《ꜱᴜʙʙᴏᴛꜱ》` 🤖',
  'react': ' `《ʀᴇᴀᴄᴄɪᴏɴᴇꜱ》` 🥸',
  'downloader': ' `《ᴅᴇꜱᴄᴀʀɢᴀꜱ》` 🔽',
  'stalkear': ' `《ꜱᴛᴀʟᴋᴇᴀʀ》` 👤',
  'ia': ' `《ɪᴀ》` 🤖',
  'efectos': ' `《ᴇꜰᴇᴄᴛᴏꜱ ʏ ʟᴏɢᴏꜱ》` ✨',
  'on|off': ' `《ᴏɴ/ᴏꜰꜰ》` ☑️',
  'grupo': ' `《ɢʀᴜᴘᴏꜱ》` 🐲',
  'rg': ' `《ʀᴇɢɪꜱᴛʀᴏ》` 🧾',
  'search': ' `《ʙᴜꜱᴄᴀᴅᴏʀ》`🔎',
  'img': ' `《ɪᴍᴀɢᴇɴᴇꜱ》` 🖼',
  'tools': ' `《ʜᴇʀʀᴀᴍɪᴇɴᴛᴀꜱ》` 🛠️',
  'fun': '`《ᴅɪᴠᴇʀꜱɪᴏɴ》` 🎉',
  'audio': ' `《ᴇꜰᴇᴄᴛᴏꜱ ᴅᴇ ᴀᴜᴅɪᴏ》` 🎙️',
  'sticker': ' `《ꜱᴛɪᴄᴋᴇʀꜱ》` 💚',
  // 'owner': ' `《ᴄʀᴇᴀᴅᴏʀᴀ》` 🧁',
  'owner': ' `《ᴄʀᴇᴀᴅᴏʀ》` 🧁',
};
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));


const uptime = `${clockString(process.uptime())}`;

const defaultMenu = {
  before: `
> ℍ𝕠𝕝𝕒 *%taguser*, 𝕊𝕠𝕪 𝕃𝕦𝕔𝕠𝕒
  
┏━☋ ꕥ *👤 𝗨𝗦𝗨𝗔𝗥𝗜𝗢* ꕥ
┃➥🐲 *𝘕𝘰𝘮𝘣𝘳𝘦* : %name
┃➥💎 *𝘋𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴* : %limit
┃➥🏆 *𝘕𝘪𝘷𝘦𝘭* : %level
┃➥🧿 *𝘌𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘪𝘢* : %totalexp
┗━━━━━━━━━━━━━☊
%readmore
┏━☋ ꕥ *🐲 𝗟𝗨𝗖𝗢𝗔-𝗕𝗢𝗧* ꕥ
┃➥🧁 *𝘊𝘳𝘦𝘢𝘥𝘰𝘳*: ${ow2}
┃➥👤 *𝘜𝘴𝘶𝘢𝘳𝘪𝘰𝘴* : %totalreg
┃➥🕘 *𝘈𝘤𝘵𝘪𝘷𝘢* : ${uptime}
┃➥✨ *𝘛𝘰𝘵𝘢𝘭 𝘨𝘳𝘶𝘱𝘰𝘴* : ${groupsIn.length}
┗━━━━━━━━━━━━━☊
%readmore
\t\t\t
`.trimStart(),
  header: '❥━☋ %category \n╭─────────────···',
  body: '┃➽ *_%cmd_*\n',
  footer: '╰─────────────···\n❥━━━━━━━━━━━━━☊',
  after: '> 𝙇𝙐𝘾𝙊𝘼\n> 𝘽𝙮 𝙈𝙤𝙣𝙨𝙩𝙚𝙧 \n © 2024 Yunnis | All rights reserved',
};

const handler = async (m, {conn, usedPrefix: _p, __dirname}) => {
  try {
    const _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch((_) => ({}))) || {};
    const {exp, limit, level} = global.db.data.users[m.sender];
    const {min, xp, max} = xpRange(level, global.multiplier);
    const name = await conn.getName(m.sender);
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
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
    const muptime = clockString(_muptime);
    const uptime = clockString(_uptime);
    const totalreg = Object.keys(global.db.data.users).length;
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const help = Object.values(global.plugins).filter((plugin) => !plugin.disabled).map((plugin) => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      };
    });
    for (const plugin of help) {
      if (plugin && 'tags' in plugin) {
        for (const tag of plugin.tags) {
          if (!(tag in tags) && tag) tags[tag] = tag;
        }
      }
    }
    conn.menu = conn.menu ? conn.menu : {};
    const before = conn.menu.before || defaultMenu.before;
    const header = conn.menu.header || defaultMenu.header;
    const body = conn.menu.body || defaultMenu.body;
    const footer = conn.menu.footer || defaultMenu.footer;
    const after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ``) + defaultMenu.after;
    const _text = [
      before,
      ...Object.keys(tags).map((tag) => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter((menu) => menu.tags && menu.tags.includes(tag) && menu.help).map((menu) => {
            return menu.help.map((help) => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%isstar/g, menu.star ? '˄' : '')
                  .replace(/%isPremium/g, menu.premium ? '˄' : '')
                  .trim();
            }).join('\n');
          }),
          footer,
        ].join('\n');
      }),
      after,
    ].join('\n');
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : '';
    const replace = {
      '%': '%',
      'p': _p, uptime, muptime,
      'taguser': '@' + m.sender.split('@s.whatsapp.net')[0],
      'wasp': '@0',
      'me': conn.getName(conn.user.jid),
      'npmname': _package.name,
      'version': _package.version,
      'npmdesc': _package.description,
      'npmmain': _package.main,
      'author': _package.author.name,
      'license': _package.license,
      'exp': exp - min,
      'maxexp': xp,
      'totalexp': exp,
      'xp4levelup': max - exp,
      'github': _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      'readmore': readMore,
    };
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name]);

    const pp = 'https://i.pinimg.com/originals/b4/f7/a6/b4f7a68e142e03ac84221.mp4';
    const pp2 = 'https://i.pinimg.com/originals/34/5d/dd/345ddd00b2854bdd4ba63.mp4';
    conn.sendMessage(m.chat, {video: {url: [pp, pp2].getRandom()}, gifPlayback: true, caption: text.trim(), mentions: [m.sender]}, {quoted: m});
  } catch (e) {
    conn.reply(m.chat, '[❌] ERROR \n\n El menu tiene un error', m);
    throw e;
  }
};

// handler.customPrefix = /comandos|Comandos/i
handler.help = ['allmenu'];
handler.command = ['allmenu', 'AllMenu'];
// handler.command = new RegExp
export default handler;


const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
