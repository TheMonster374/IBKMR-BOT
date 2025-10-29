export default function handler(m) {
  const teks = `\n\t\t*「🕒 \t ${clockString(process.uptime())} \t🕒」*\n`;
  conn.sendMessage(m.chat, {text: teks, jpegThumbnail: global.thumb}, {quoted: m} );
}
handler.tags = ['main'];
handler.command = handler.help = ['runtime2'];

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms % (3600 * 24) / 3600);
  const m = isNaN(ms) ? '--' : Math.floor(ms % 3600 / 60);
  const s = isNaN(ms) ? '--' : Math.floor(ms % 60);
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
