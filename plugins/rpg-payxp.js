import db from '../lib/database.js';

import MessageType from '@whiskeysockets/baileys';
const impuesto = 0.02;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '⚠️ *_Menciona al usuario con @user._*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '⚠️️ *_Ingrese la cantidad de -XP- que quiere transferir._*';
  if (isNaN(txt)) throw ' 🔢 *sólo números.*';
  const xp = parseInt(txt);
  let exp = xp;
  const imt = Math.ceil(xp * impuesto);
  exp += imt;
  if (exp < 1) throw '⚠️️ *Mínimo es  1.*';
  const users = global.db.data.users;
  if (exp > users[m.sender].exp) throw '⚠️️ *_Exp insuficiente para transferir._*';
  users[m.sender].exp -= exp;
  users[who].exp += xp;

  await m.reply(`⊜ *TRANSFERENCIA De XP✨*
┏━━━━━━━━━━━━━⬣
┃⋄  *${-xp}* XP
┃⋄ Impuesto 2% : *${-imt}* XP 
┃⋄ Total gastado: *${-exp} XP*
┗━━━━━━━━━━━━━⬣`);
  conn.fakeReply(m.chat, `⊜ *_Recibiste_*\n\n *_+${xp} XP✨._*`, who, m.text);
};
handler.help = ['payxp *@user <monto>*'];
handler.tags = ['rpg'];
handler.command = ['payxp', 'transferxp', 'darxp'];
handler.rowner = false;

export default handler;

