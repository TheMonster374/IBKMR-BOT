let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩⁩;;\nFN:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩⁩\nORG:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩\nTITLE:\nitem1.TEL;waid=5491156673266:5491156673266\nitem1.X-ABLabel:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '𝘈𝘓Σ𝘟Σ𝘐  - 🇲🇹⁩', contacts: [{ vcard }] }}, {quoted: m})
  await m.reply('enviar mensaje solo para cosas del bot')
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
