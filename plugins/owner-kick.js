let handler = async (m, { conn, participants }) => {
  if (!m.mentionedJid[0] && !m.quoted) throw 'Etiqueta a alguien del grupo para eliminarlo'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = m.chat.split`-`[0]
  if (user.includes(owr)) return await m.reply('No puedo eliminarlo\'a por que el creó el grupo')
  conn.groupParticipantsUpdate(m.chat, [user], 'remove')
  m.reply(`El usuario *@${user.split('@')[0]}* fue eliminado por decisión de mi creador`, null, { mentions: [user] })
}

handler.help = ['kick2']
handler.tags = ['owner']
handler.command = /^(kick2|ban2|delete2|chau2)$/i

handler.rowner = true
handler.group = true
handler.botAdmin = true

export default handler