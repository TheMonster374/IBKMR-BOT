const handler = async (m, {conn, command, text}) => {
  if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`;
  const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const follar = `
🤤    🤤¡TE HAS CORRIDO EN ${text}!🤤 \n
😈¡${taguser}! *TE HA CUMEADO* 😈 \n
*¡EL SEMEN TE FASCINA!* 🥵
`.trim();
  m.reply(follar, null, {mentions: conn.parseMention(follar)});
};

handler.help = ['cumear'].map((v) => v + ' <@user>');
handler.tags = ['fun'];
handler.command =/^(Cumear|cumear)/i;
handler.fail = null;
handler.register = true;
export default handler;
