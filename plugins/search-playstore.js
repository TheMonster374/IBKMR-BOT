import gplay from 'google-play-scraper';

const handler = async (m, {conn, text}) => {
  if (!text) throw '[📚] 𝒊𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒍𝒂 𝒂𝒑𝒌 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂 𝒃𝒖𝒔𝒄𝒂𝒓\n\n[💡] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐: .playstore guardian tales';
  let res = await gplay.search({term: text});
  if (!res.length) throw `[📚] 𝒊𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒍𝒂 𝒂𝒑𝒌 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂 𝒃𝒖𝒔𝒄𝒂𝒓`;
  const opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
      (v) =>
        `*🔍 Resultado:* ${v.title}
       *✍️ Desarrollador:* ${v.developer}
       *💸 Precio:* ${v.priceText}
       *📈 Puntuacion:* ${v.scoreText}
        *⛓️ Link:* ${v.url}`,
  ).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['search'];
handler.command = /^(playstore)$/i;
export default handler;
