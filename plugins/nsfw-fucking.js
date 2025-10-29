import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await fetch('https://nekos.pro/api/fucking');
  if (!res.ok) return;
  const json = await res.json();
  if (!json.url) return;
  await conn.sendFile(m.chat, json.url, 'fucking.png', '', m);
};

handler.help = ['fucking'];
handler.tags = ['nsfw'];
handler.command = ['fucking'];

export default handler;
