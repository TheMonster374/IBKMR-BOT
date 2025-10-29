const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `Hola, estos son los grupos de INABAKUMORI-BOT 
┏━❰ *𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙾𝚃* ❱━┓

ꕥ》𝙄𝙉𝘼𝘽𝘼𝙆𝙐𝙈𝙊𝙍𝙄-𝘽𝙤𝙩《ꕥ | [𝙊𝙁𝘾
https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc

🤑/ Latino Gang /😈                 
https://chat.whatsapp.com/G7yw7ilDYm0JfUOerplf9V
━━━━━━━━━━━━━━━━━

*Canal Oficial*:
https://whatsapp.com/channel/0029VaPhM3S3wtbBXOzf6t0j

┗━❰ *𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙾𝚃* ❱━┛
`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/TheMonster374`},
    'mimetype': `application/${document}`,
    'fileName': `𝙄𝙉𝘼𝘽𝘼𝙆𝙐𝙈𝙊𝙍𝙄-𝘽𝙤𝙩`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': '𝙄𝙉𝘼𝘽𝘼𝙆𝙐𝙈𝙊𝙍𝙄-𝘽𝙤𝙩',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝙄𝙉𝘼𝘽𝘼𝙆𝙐𝙈𝙊𝙍𝙄-𝘽𝙤𝙩',
        'body': wm,
        'thumbnail': catalogo,
        'sourceUrl': 'md'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['grupos'];
handler.tags = ['main'];
handler.command = ['linkgc', 'grupos', 'gruposjt'];
export default handler;
