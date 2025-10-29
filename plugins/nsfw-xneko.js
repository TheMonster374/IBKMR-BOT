import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await fetch('https://api.waifu.pics/nsfw/neko');
  if (!res.ok) return;
  const json = await res.json();
  if (!json.url) return;
  await conn.sendFile(m.chat, json.url, 'xneko.png', '*nsfw neko*', m);
};

handler.help = ['xneko'];
handler.tags = ['nsfw'];
handler.command = ['xneko'];

export default handler;
