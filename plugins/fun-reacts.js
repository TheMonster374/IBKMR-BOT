const handler = async (m, {conn, command, text}) => {
  const chatbot = `
┏━⊜「 *🥸 REACCIONES*」
┃
┃ 🌠​ bite <@usuario>
┃
┃ 🌠​ blackflash <@usuario>
┃
┃ 🌠​ blue <@usuario>
┃
┃ 🌠​ cookie <@usuario>
┃
┃ 🌠​ cry
┃
┃ 🌠​ dance
┃
┃ 🌠​ domain <nombre dominio>
┃
┃ 🌠​ evillaugh
┃
┃ 🌠​ facepalm
┃
┃ 🌠​ happy
┃
┃ 🌠​ hug <@usuario>
┃
┃ 🌠​ kameha <@usuario>
┃
┃ 🌠​ kill <@usuario>
┃
┃ 🌠​ kiss <@usuario>
┃
┃ 🌠​ laugh 
┃
┃ 🌠​ lick <@usuario>
┃
┃ 🌠​ pat <@usuario>
┃
┃ 🌠​ punch <@usuario>
┃
┃ 🌠​ purple <@usuario>
┃
┃ 🌠​ red <@usuario>
┃
┃ 🌠​ slap <@usuario>
┃
┃ 🌠​ sleep
┃
┗━━━━━━━━━━━━━⬣

Recuerda usar el prefijo oara utilizar las reacciones

*Ejemplo:*
> .purple @Monster

> ${wm} ${author}
`.trim();
  m.reply(chatbot, null, {mentions: conn.parseMention(chatbot)});
};

handler.help = ['reacts'];
handler.tags = ['fun'];
handler.command =/^(Reacts|reacts)/i;
handler.fail = null;
handler.register = true;
export default handler;
