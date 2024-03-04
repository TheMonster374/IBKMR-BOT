import { execSync } from 'child_process';

const handler = async (m, { conn, text }) => {

    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
  
  try {
          const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
          let messager = stdout.toString()
          if (messager.includes('Already up to date.')) messager = '𝗨𝗣𝗗𝗔𝗧𝗘\n\n*[ ✅ ] 𝒏𝒐 𝒉𝒂𝒚 𝒂𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒄𝒊𝒐𝒏𝒆𝒔 𝒑𝒆𝒏𝒅𝒊𝒆𝒏𝒕𝒆𝒔*'
          if (messager.includes('Updating')) messager = '𝗨𝗣𝗗𝗔𝗧𝗘\n\n*𝑨𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒄𝒊𝒐𝒏 𝒆𝒙𝒊𝒕𝒐𝒔𝒂*\n\n' + stdout.toString()
          conn.reply(m.chat, messager, m);
  } catch {      
 try {    
      const status = execSync('git status --porcelain');
      if (status.length > 0) {
        const conflictedFiles = status
          .toString()
          .split('\n')
          .filter(line => line.trim() !== '')
          .map(line => {
            if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('JTSession/') || line.includes('npm-debug.log')) {
              return null;
            }
            return '*→ ' + line.slice(3) + '*';
          })
          .filter(Boolean);
        if (conflictedFiles.length > 0) {
          const errorMessage = `𝗨𝗣𝗗𝗔𝗧𝗘\n\n*ꜱᴇ ʜᴀɴ ʜᴇᴄʜᴏ ᴄᴀᴍʙɪᴏꜱ ʟᴏᴄᴀʟᴇꜱ ᴇɴ ᴀʀᴄʜɪᴠᴏꜱ ᴅᴇʟ ʙᴏᴛ Qᴜᴇ ᴇɴᴛʀᴀɴ ᴇɴ ᴄᴏɴꜰʟɪᴄᴛᴏ ᴄᴏɴ ʟᴀꜱ ᴀᴄᴛᴜᴀʟɪᴢᴀᴄɪᴏɴᴇꜱ ᴅᴇʟ ʀᴇᴘᴏꜱɪᴛᴏʀɪᴏ. ᴘᴀʀᴀ ᴀᴄᴛᴜᴀʟɪᴢᴀʀ, ʀᴇɪɴꜱᴛᴀʟᴀ ᴇʟ ʙᴏᴛ o ʀᴇᴀʟɪᴢᴀ ʟᴀꜱ ᴀᴄᴛᴜᴀʟɪᴢᴀᴄɪᴏɴᴇꜱ ᴍᴀɴᴜᴀʟᴍᴇɴᴛᴇ*\n\n*ᴀʀᴄʜɪᴠᴏꜱ ᴇɴ ᴄᴏɴꜰʟɪᴄᴛᴏ:*\n\n${conflictedFiles.join('\n')}.*`;
          await conn.reply(m.chat, errorMessage, m);  
        }
      }
  } catch (error) {
    console.error(error);
    let errorMessage2 = '_*[❗] 𝑬𝑹𝑹𝑶𝑹 [❗]*_\n\n*𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐*';
    if (error.message) {
      errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
    }
    await conn.reply(m.chat, errorMessage2, m);
  }
 }
};
handler.help = ['update'];
handler.tags = ['owner'];
handler.command = /^(update|actualizar|gitpull)$/i;
handler.rowner = true;
export default handler;
