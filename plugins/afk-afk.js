const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
  m.reply(`*El usuario ${conn.getName(m.sender)} estara inactivo (afk), porfavor no lo etiqueten*\n\n*> Motivo de la inactividad (afk)${text ? ': ' + text : ''}*
`);
};
handler.help = ['afk [razón]'];
handler.tags = ['rpg'];
handler.command = /^afk$/i;
export default handler;
