const handler = (m) => m;
handler.all = async function(m) {
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
  const chat = global.db.data.chats[m.chat];
  const name = conn.getName(m.sender);
  /* if (chat.chatbot) return*/
  if (!db.data.chats[m.chat].chatbot && m.isGroup) return;
  if (/^Nuevo|Nueva$/i.test(m.text) ) { // sin prefijo
    const teks = `
${pickRandom([`*Violen al nuevo*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Yo le doy la bienvenida 🥵*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Carne fresca 😈*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^Temazo|Riko|Rico$/i.test(m.text) ) { // sin prefijo
    const teks = `
${pickRandom([`*Denme pene 🥵*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Monster se la come*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*WhatsApp qliao*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Si uwu*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^Te voy a desconectar$/i.test(m.text) ) { // sin prefijo
    const teks = `
${pickRandom([`*No hay webos 🤑🤌*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Yo con un "reportar número" en la mochila:*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*No sos capaz de manejar tu vida vas a ser capaz de desconectarme 🗣️*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^Que$/i.test(m.text) ) { // sin prefijo
    const teks = `
${pickRandom([`*sobadotas me das tu a mi 🥵*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*so*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }


  if (/^Bot qliao|Bot culiao$/i.test(m.text) ) { // sin prefijo
    const teks = `
${pickRandom([`*Tu vieja 🥺*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Por lo menos soy mas útil que vos en la vida 😍*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Pero con cariño? 🥺*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^Bot de mierda$/i.test(m.text) ) { // sin prefijo
    const teks = `
${pickRandom([`*Humano de mrda ojalá lo borren 🫵🏿🗑️*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*192.342.123.34*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Te voy a violar*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Por lo menos no soy color delincuencia 🗿🚬*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }
  if (/^Hola$/i.test(m.text) ) { // sin prefijo
    const teks = `
${pickRandom([`*Tu nariz contra mis bolas 🗿🚬*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Quien suelta chiste*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Mi nariz contra tus bolas 😈*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^Grupo de mierda$/i.test(m.text) ) { // sin prefijo
    const teks = `${pickRandom([`*.kic*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Tenia que ser negr#*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Quiere pene dice*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^a$/i.test(m.text) ) { // sin prefijo
    const teks = `${pickRandom([`*b*\n*c*\n*d*\n*...*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^Verga$/i.test(m.text) ) { // sin prefijo
    const teks = `${pickRandom([`*Comes*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Tragas*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Chupas*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^No sirve|No funciona|Se murió$/i.test(m.text) ) { // sin prefijo
    const teks = `${pickRandom([`*Yo?, No mi rey*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Sigo aca uwu*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Cala boca puta*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^Bot te amo|Bot te quiero|Te amo bot $/i.test(m.text) ) { // sin prefijo
    const teks = `${pickRandom([`*Tremendo virgen diciendole "Te quiero" a un bot*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Yo mas 😍​🤍​*\n\n> Inabakumori-Bot                           Chatbot activado ✅​*`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^Por nuv| 7 - 0|Pornub|Por noob | Noob$/i.test(m.text) ) { // sin prefijo
    const teks = `${pickRandom([`*No puso pared 👻​*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Yo lo dejo 7-0 😈​*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^Porno|CP|Cepe|Cepesito$/i.test(m.text) ) { // sin prefijo
    const teks = `${pickRandom([`*No mi rey, aca se pasan versiculos de la biblia 🙏​*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Pasen 🥵​*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*2 likes y lo funo*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^Momos|Momazos|Memes$/i.test(m.text) ) { // sin prefijo
    const teks = `${pickRandom([`*Pasen momazos 🤑*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*LA GRASA ES UN SENTIMIENTO*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Saquenlo pero del sistema solar*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  if (/^Te voy a follar|Te voy a violar$/i.test(m.text) ) { // sin prefijo
    const teks = `${pickRandom([`*Rico ​🥵​*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Con tus 5 cm?*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`, `*Si lo haces sos gay 🏳️‍🌈*\n\n> Inabakumori-Bot                           Chatbot activado ✅​`])}
`.trim();
    conn.reply(m.chat, teks, m, {mentions: {mentionedJid: [m.sender]}});
  }

  return !0;
};
// handler.group = true
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
