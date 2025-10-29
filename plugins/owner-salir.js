const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  const pp = 'https://i.pinimg.com/originals/34/5d/dd/345ddd00b2854bdd4ba63.mp4';
  await conn.sendMessage(m.chat, {video: {url: pp}, gifPlayback: true, caption: '*Adios a todos, el Bot se despide! 🤍*', mentions: [m.sender]}, {quoted: estilo});
  await conn.groupLeave(id);
};
handler.help = ['salir'];
handler.tags = ['owner'];
handler.command = /^(salir|out|leavegc|leave|salirdelgrupo)$/i;
handler.group = true;
handler.rowner = true;

export default handler;
