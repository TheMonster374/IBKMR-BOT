import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `Ya estas registrado\n\n¿Quieres volver a registrarte??\n\n 📌Usa este comando para eliminar tu registro del bot\n*${usedPrefix}unreg* <Número de serie>`;
  if (!Reg.test(text)) throw `uso incorrecto\n\n*ejemplo de uso de comando: ${usedPrefix + command} nombre.edad*\n*Ejemplo: ${usedPrefix + command} Monster.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw 'Debes poner un nombre';
  if (!age) throw 'La edad no puede estar vacia';
  if (name.length >= 30) throw 'El nombre es demasiado largo';
  age = parseInt(age);
  if (age > 100) throw '*[❗] estas muy viejo para usar el bot*';
  if (age < 5) throw '*[❗] estas muy chiquito para usar el bot*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const str = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 INFORMACION 」
┣┅ ━━━━━━━━━━━━ ┅ ━
 *Nombre:* ${name}
 *Edad:* ${age} años
 *Numero de serie:* 
 ${sn}
┣┅ 
tu numero de serie 
servira por si quieres
borrar tu registro
┗┅ ━━━━━━━━━━━━ ┅ ━`;
conn.sendMessage(m.chat, { image: { url: pp }, caption: str, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: `CANAL DE WHATSAPP`,
body: `🤍 Unete al canal OFC`,
mediaType: 1,
sourceUrl: 'https://whatsapp.com/channel/0029VabyyaKGehEIyunTGo0t',
thumbnailUrl: 'https://i.imgur.com/yafZkFB.jpeg'
}}}, { quoted: m })
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 5000;
};
handler.help = ['reg <nombre.edad>'];
handler.tags = ['rg'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;


//━━━━━━━━━━━━ ┅ ━
