let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
 let follar = `
🤤    🤤¡TE HAS FOLLADO A ${text}!🤤 \n
😈¡${text}! *TE HAN FOLLADO* 😈 \n
*¡LA VERGA TE FASCINA!* 🥵
`.trim();
m.reply(follar, null, { mentions: conn.parseMention(follar) })}

handler.help = ['follar'].map((v) => v + ' <@user>')
handler.tags = ['fun']
handler.command =/^(follar|follar)/i
handler.fail = null
handler.register = true
export default handler
