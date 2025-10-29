const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/horny', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://i.pinimg.com/originals/da/4b/9b/da4b9b9a26146c50c951410d9d2f1037.jpg'),
  }), 'hornycard.png', '_*Hornycard*_', m);
};
handler.help = ['hornycard'];
handler.tags = ['efectos'];
handler.command = /^(horny(card|license))$/i;
export default handler;
