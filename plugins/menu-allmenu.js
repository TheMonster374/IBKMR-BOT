import {promises} from 'fs';
import {join} from 'path';
import fetch from 'node-fetch';
import {xpRange} from '../lib/levelling.js';

const tags = {
  'main': ' `𝙄𝙉𝙁𝙊` ℹ️',
  'game': ' `𝙅𝙐𝙀𝙂𝙊𝙎` 🎮',
  'jadibot': ' `𝙎𝙐𝘽𝘽𝙊𝙏𝙎` 🌐',
  'rpg': ' `𝙍𝙋𝙂` ⚔️',
  'react': ' `𝙍𝙀𝘼𝘾𝘾𝙄𝙊𝙉𝙀𝙎` 🥸',
  'rg': ' `𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊` 🧾',
  'downloader': ' `𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎` 🔽',
  'stalkear': ' `𝙎𝙏𝘼𝙇𝙆𝙀𝘼𝙍` 👤',
  'ia': ' `𝙄𝘼` 🤖',
  'efectos': ' `𝙇𝙊𝙂𝙊𝙎` ✨',
  'on|off': ' `𝙊𝙉/𝙊𝙁𝙁` ☑️',
  'grupo': ' `𝙂𝙍𝙐𝙋𝙊𝙎` 🤍',
  'search': ' `𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍`🔎',
  'img': ' `𝙄𝙈𝘼𝙂𝙀𝙉𝙀𝙎` 🖼',
  'tools': ' `𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎` 🛠️',
  'fun': '`𝘿𝙄𝙑𝙀𝙍𝙎𝙄𝙊𝙉` 👻',
  'audio': ' `𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝘼𝙐𝘿𝙄𝙊` 🎙️',
  'sticker': ' `𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎` 🤑',
  'nsfw': ' `𝙉𝙎𝙁𝙒` 🔞',
  'owner': ' `𝘾𝙍𝙀𝘼𝘿𝙊𝙍` 👑',
};

const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));


const uptime = `${clockString(process.uptime())}`;


const defaultMenu = {
  before: `
> 𝑯𝒐𝒍𝒂 *%taguser*, 𝑺𝒐𝒚 𝑰𝑵𝑨𝑩𝑨𝑲𝑼𝑴𝑶𝑹𝑰

╔═✽ ☾ *=͟͟͞ɪɴꜰᴏ ᴜꜱᴜᴀʀɪᴏ* ☽
║
║➣ 【🤍》 ℕ𝕠𝕞𝕓𝕣𝕖: *%name*
║➣ 【💎》 𝔻𝕚𝕒𝕞𝕒𝕟𝕥𝕖𝕤: *%limit*
║➣ 【🏆》 ℕ𝕚𝕧𝕖𝕝: *%level*
║➣ 【✨》 𝔼𝕩𝕡: *%totalexp*
╚═════════════ꕤ
%readmore
╔═✽ ☾ *=͟͟͞ɪɴꜰᴏ ʙᴏᴛ* ☽
║
║➣ 【👑》ℂℝ𝔼𝔸𝔻𝕆ℝ: 𝕄𝕠𝕟𝕤𝕥𝕖𝕣
║➣ 【👤》𝕌𝕊𝕌𝔸ℝ𝕀𝕆𝕊: *%totalreg*
║➣ 【⌛》𝔸ℂ𝕋𝕀𝕍𝔸: *${uptime}*
║➣ 【🌠》𝕋𝕆𝕋𝔸𝕃 𝔾ℝ𝕌ℙ𝕆𝕊: *${groupsIn.length}*
╚═════════════ꕤ
%readmore
\t\t\t
`.trimStart(),
  header: '》════%category══《\n╭─────────────···',
  body: '︱➣ _%cmd_\n',
  footer: '╰─────────────···\n《 ═════════════ 》\n',
  after: '> 𝙄𝙉𝘼𝘽𝘼𝙆𝙐𝙈𝙊𝙍𝙄 𝑩𝒚 𝗠𝗢𝗡𝗦𝗧𝗘𝗥 \n> © ²⁰²⁴ ᴹᵒⁿˢᵗᵉʳ | ᴬˡˡ ʳⁱᵍʰᵗˢ ʳᵉˢᵉʳᵛᵉᵈ',
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

    const pp = 'https://telegra.ph/file/539d69f4262a13021ae3e.mp4';
    const pp2 = 'https://telegra.ph/file/539d69f4262a13021ae3e.mp4';
    conn.sendMessage(m.chat, {video: {url: [pp, pp2].getRandom()}, gifPlayback: true, caption: text.trim(), mentions: [m.sender]}, {contextInfo: {
      'forwardingScore': 200,
      'isForwarded': false,
      'externalAdReply': {
        showAdAttribution: false,
        title: `CANAL DE WHATSAPP`,
        body: `🤍 Unete al canal OFC`,
        mediaType: 1,
        sourceUrl: 'https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t',
        thumbnailUrl: 'https://i.imgur.com/yafZkFB.jpeg',
      }}}, {quoted: m});

    await conn.sendMessage(m.chat, {react: {text: '🤍', key: m.key}});
  } catch (e) {
    conn.reply(m.chat, '[❌] El menu tiene un error', m);
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

/* function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}*/
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms % (3600 * 24) / 3600);
  const m = isNaN(ms) ? '--' : Math.floor(ms % 3600 / 60);
  const s = isNaN(ms) ? '--' : Math.floor(ms % 60);
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
