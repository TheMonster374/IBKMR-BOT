let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
 let follar = `
🤤¡${text} TE LA HAN CHUPADO!🤤\n
😈¡${taguser}! *TE LA HA MAMADO*😈 \n
 *¡COMO TE ENCANTA LA VERGA!*🥵

`.trim();
m.reply(follar, null, { mentions: conn.parseMention(follar) })}

handler.help = ['mamada'].map((v) => v + ' <@user>')
handler.tags = ['fun']
handler.command =/^(Mamada|manada)/i
handler.fail = null
handler.register = true
export default handler
