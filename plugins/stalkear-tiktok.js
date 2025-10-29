
import fg from 'api-dylux';
const handler = async (m, {conn, text, args}) => {
  if (!text) throw `✳️Buscar el nombre del usuario del tik tok `;
  const res = await fg.ttStalk(args[0]);
  const txt = `
┌──「 *TIKTOK STALK* 
▢ *🔖Nombre:* ${res.name}
▢ *🔖Usuario:* ${res.username}
▢ *👥Seguidores:* ${res.followers}
▢ *🫂Seguiendo:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`;
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m);
};
handler.help = ['tiktokstalk'];
handler.tags = ['stalkear'];
handler.command = /^t(tstalk|iktokstalk)$/i;

export default handler;
