import acrcloud from 'acrcloud';

const acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
});
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (/video|audio/.test(mime)) {
    const buffer = await q.download();
    const {status, metadata} = await acr.identify(buffer);
    if (status.code !== 0) throw status.msg;
    const {title, artists, album, genres, release_date} = metadata.music[0];
    let txt = `*• Titulo:* ${title}${artists ? `\n*• Artists:* ${artists.map((v) => v.name).join(', ')}` : ''}`;
    txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genero:* ${genres.map((v) => v.name).join(', ')}` : ''}\n`;
    txt += `*• Fecha de lanzamiento:* ${release_date}`;
    await conn.reply(m.chat, txt, m, adReply);
  } else return conn.reply(m.chat, `*_Responde a un audio o video._*`, m, adReply);
};
handler.help = ['whatmusic <audio/video>'];
handler.tags = ['tools'];
handler.command = /^(whatmusic|shazam)$/i;
export default handler;
