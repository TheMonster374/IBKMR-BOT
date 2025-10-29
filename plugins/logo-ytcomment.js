const handler = async (m, {conn, text}) => {
  if (!text) throw '*_ingresa un texto_*';
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://i.pinimg.com/originals/da/4b/9b/da4b9b9a26146c50c951410d9d2f1037.jpg'),
    comment: text,
    username: conn.getName(m.sender),
  }), 'error.png', '_aqui tienes tu comentario_', m);
};
handler.help = ['ytcomment <texto>'];
handler.tags = ['efectos'];
handler.command = /^(ytcomment|comentario)$/i;
export default handler;
