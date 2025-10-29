import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
const handler = async (m, {conn, command, args, usedPrefix}) => {
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, '[📚] 𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒆𝒍 𝒕𝒆𝒙𝒕𝒐 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒃𝒖𝒔𝒄𝒂𝒓 \n\n[💡] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:  𝑰𝒏𝒂𝒃𝒂𝒌𝒖𝒎𝒐𝒓𝒊', m);
  const url = 'https://google.com/search?q=' + encodeURIComponent(text);
  google({'query': text}).then((res) => {
    let teks = `𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐 𝒅𝒆: _${text}_*`;
    for (const g of res) {
      teks += `_*${g.title}*_\n_${g.link}_\n_${g.snippet}_\n\n`;
    }
    const ss = `https://image.thum.io/get/fullpage/${url}`;
    conn.sendFile(m.chat, ss, 'error.png', teks, m);
    // m.reply(teks)
  });
};
handler.help = ['google'].map((v) => v + ' <texto>');
handler.tags = ['search'];
handler.command = /^googlef?$/i;
export default handler;

