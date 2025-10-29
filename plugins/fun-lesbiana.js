const handler = async (m, {conn, command, text}) => {
  if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber q tan puta es*`;
  const lesbiana = `*🏳️‍🌈🏳️‍🌈 ${text} ES ${Math.floor(Math.random() * 600)}% LESBIANA, QUE GAY🏳️‍🌈🏳️‍🌈*.
       `.trim(); m.reply(lesbiana, null, {mentions: conn.parseMention(lesbiana)});
};

handler.help = ['lesbiana'].map((v) => v + ' <@user>');
handler.tags = ['fun'];
handler.command =/^(lesbiana)/i;
handler.fail = null;
handler.register = true;
export default handler;
