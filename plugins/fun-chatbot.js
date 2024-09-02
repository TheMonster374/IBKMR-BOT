let handler = async (m, { conn, command, text }) => {
 let chatbot = `
┏━⊜「 *🤖 𝘾𝙃𝘼𝙏𝘽𝙊𝙏*」
┃
┃ 🗣️ Nuevo/Nueva
┃
┃ 🗣️ Temazo/Riko/Rico
┃
┃ 🗣️ Te voy a desconectar 
┃
┃ 🗣️ Que
┃
┃ 🗣️ Bot qliao/Bot culiao
┃
┃ 🗣️ Bot de mierda 
┃
┃ 🗣️ Hola
┃
┃ 🗣️ Grupo de mierda 
┃
┃ 🗣️ a
┃
┃ 🗣️ Verga
┃
┃ 🗣️ No sirve/No funciona/
┃ Se murió 
┃
┃ 🗣️ Bot te amo/Bot te quiero/
┃ Te amo bot
┃
┃ 🗣️ Por nuv/ 7 - 0 / Por noob 
┃ / Noob
┃
┃ 🗣️ Porno/ CP/Cepe/Cepesito
┃
┃ 🗣️ Momos/Momazos/Memes
┃
┃ 🗣️ Te voy a follar/
┃ Te voy a violar
┃
┗━━━━━━━━━━━━━⬣
*Puedes escribir cualquiera de las anteriores palabras para usar el chatbot sin necesidad del prefijo (es decir, el ".")*

Recuerda que el chatbot debe estar activado, usa *.on2 chatbot* para activarlo

> ${wm} ${author}
`.trim();
m.reply(chatbot, null, { mentions: conn.parseMention(chatbot) })}

handler.help = ['chatbot']
handler.tags = ['fun']
handler.command =/^(chatbot|Chatbot)/i
handler.fail = null
handler.register = true
export default handler
