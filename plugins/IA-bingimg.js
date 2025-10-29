import fetch from 'node-fetch';

const handler = async (m, {conn, text}) => {
  if (!text) throw '*_ingresa un texto de la imagen que quieres_*\n\n*ejemplo:* .bingimg mono en el espacio';
  const msg = encodeURIComponent(text);
  const res = await fetch(`https://aemt.me/bingimg?text=${msg}`);
  const data = await res.json();
  console.log(data);
  const buffer = data.result;
  conn.sendFile(m.chat, buffer, 'image.png', `${text}`, m);
};

handler.help = ['bingimg <texto>'];
handler.tags = ['ia'];
handler.command = /^bingimg$/i;

export default handler;
