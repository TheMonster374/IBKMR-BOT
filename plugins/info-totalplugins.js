let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `
total plugins: ${totalf}`,m)
}

handler.help = ['totalplugins']
handler.tags = ['main']
handler.command = ['totalplugins']

export default handler 
