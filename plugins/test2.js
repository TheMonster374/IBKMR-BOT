import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn, args, usedPrefix, command }) => {
    let who;
    if (m.isGroup) {
      who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else { 
      who = m.chat;
    }
      const textquien = `*[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙾 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n◉ ${usedPrefix + command} @${global.suittag}`;
    if (who === m.chat && m.isGroup || !who && m.isGroup) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  try {
    let name;
    if (who === m.chat) {
      name = "xd";
    } else {
      name = conn.getName(who);
    }
    let name2 = conn.getName(m.sender);
    let apislap = await fetch(`
        "https://api.waifu.pics/nsfw/blowjob",
        "https://api.waifu.pics/nsfw/waifu",
        "https://api.waifu.pics/nsfw/neko",
        "https://nekobot.xyz/api/image?type=hentai"`);
    let jkis = await apislap.json();
    let { url } = jkis;
    let stiker = await sticker(null, url, `${name2}  ${name}`, null);
    conn.sendFile(m.chat, stiker, null, {asSticker: true}, m, true, {contextInfo: {forwardingScore: 200, isForwarded: true}}, {quoted: m});
  } catch {
    throw `*xd*`;
  };
};

handler.command = /^(xd)$/i;
export default handler;
