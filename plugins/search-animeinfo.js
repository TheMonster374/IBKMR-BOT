// Update By Xnuvers007

import fetch from 'node-fetch';

const handler = async (m, {conn, text}) => {
  if (!text) throw `*¡Ingresa el título del manga que deseas buscar!*`;
  conn.reply(m.chat, 'Buscando manga... Por favor espera', m);
  const res = await fetch('https://api.jikan.moe/v4/manga?q=' + text);
  if (!res.ok) throw 'error';
  const json = await res.json();
  const {chapters, url, type, score, scored, scored_by, rank, popularity, members, background, status, volumes, synopsis, favorites} = json.data[0];
  const judul = json.data[0].titles.map((jud) => `${jud.title} [${jud.type}]`).join('\n');
  const xnuvers007 = json.data[0].authors.map((Xnuvers007) => `${Xnuvers007.name} (${Xnuvers007.url})`).join('\n');
  const genrenya = json.data[0].genres.map((xnvrs007) => `${xnvrs007.name}`).join('\n');

  const animeingfo = `📚 titulo: ${judul}
📑 capitulo: ${chapters}
✉️ transmisión: ${type}
🗂 Estado: ${status}
😎 Género: ${genrenya}
🌟 favoritos: ${favorites}
🧮 puntaje: ${score}
🌟 Rank: ${rank}
⛓️ Url: ${url}
👨‍🔬 Autor: ${xnuvers007}
`;
  conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'manga.jpg', `*MANGA INFO*\n` + animeingfo, m);
};
handler.help = ['mangainfo <manga>'];
handler.tags = ['search'];
handler.command = /^(mangainfo)$/i;

export default handler;
